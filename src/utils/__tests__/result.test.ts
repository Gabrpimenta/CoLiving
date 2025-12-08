import { ok, err, mapResult, mapError, flatMap } from '../result';

describe('result utilities', () => {
  describe('ok', () => {
    it('should create a successful result', () => {
      const result = ok('test data');
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data).toBe('test data');
      }
    });
  });

  describe('err', () => {
    it('should create an error result', () => {
      const error = new Error('test error');
      const result = err(error);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error).toBe(error);
      }
    });
  });

  describe('mapResult', () => {
    it('should map successful result', () => {
      const result = ok(5);
      const mapped = mapResult(result, (x) => x * 2);
      
      expect(mapped.success).toBe(true);
      if (mapped.success) {
        expect(mapped.data).toBe(10);
      }
    });

    it('should not map error result and preserve error', () => {
      const error = new Error('original error');
      const result = err(error);
      const mapped = mapResult(result, (x: any) => x * 2);
      
      expect(mapped.success).toBe(false);
      if (!mapped.success) {
        expect(mapped.error).toBe(error);
        expect(mapped.error.message).toBe('original error');
      }
    });

    it('should chain multiple mapResult calls', () => {
      const result = ok(5);
      const mapped = mapResult(mapResult(result, x => x * 2), x => x + 10);
      
      expect(mapped.success).toBe(true);
      if (mapped.success) {
        expect(mapped.data).toBe(20);
      }
    });
  });

  describe('mapError', () => {
    it('should map error result', () => {
      const error = new Error('original error');
      const result = err(error);
      const mapped = mapError(result, () => new Error('new error'));
      
      expect(mapped.success).toBe(false);
      if (!mapped.success) {
        expect(mapped.error.message).toBe('new error');
      }
    });

    it('should not map success result and preserve data', () => {
      const result = ok('test data');
      const mapped = mapError(result, () => new Error('new error'));
      
      expect(mapped.success).toBe(true);
      if (mapped.success) {
        expect(mapped.data).toBe('test data');
      }
    });

    it('should chain multiple mapError calls', () => {
      const result = err(new Error('error1'));
      const mapped = mapError(
        mapError(result, e => new Error(`wrapped: ${e.message}`)),
        e => new Error(`final: ${e.message}`)
      );
      
      expect(mapped.success).toBe(false);
      if (!mapped.success) {
        expect(mapped.error.message).toBe('final: wrapped: error1');
      }
    });
  });

  describe('flatMap', () => {
    it('should chain successful operations', () => {
      const result = ok(5);
      const mapped = flatMap(result, (x) => ok(x * 2));
      
      expect(mapped.success).toBe(true);
      if (mapped.success) {
        expect(mapped.data).toBe(10);
      }
    });

    it('should short-circuit on error', () => {
      const error = new Error('test error');
      const result = err(error);
      const mapped = flatMap(result, (x: any) => ok(x * 2));
      
      expect(mapped.success).toBe(false);
      if (!mapped.success) {
        expect(mapped.error).toBe(error);
      }
    });

    it('should propagate error from mapper function', () => {
      const result = ok(5);
      const error = new Error('mapper error');
      const mapped = flatMap(result, () => err(error));
      
      expect(mapped.success).toBe(false);
      if (!mapped.success) {
        expect(mapped.error).toBe(error);
      }
    });

    it('should chain flatMap calls', () => {
      const result = ok(5);
      const mapped = flatMap(
        flatMap(result, x => ok(x * 2)),
        x => ok(x + 10)
      );
      
      expect(mapped.success).toBe(true);
      if (mapped.success) {
        expect(mapped.data).toBe(20);
      }
    });

    it('should short-circuit on first error', () => {
      const result = ok(5);
      const mapped = flatMap(
        flatMap(result, () => err(new Error('first error'))),
        () => ok(100)
      );
      
      expect(mapped.success).toBe(false);
      if (!mapped.success) {
        expect(mapped.error.message).toBe('first error');
      }
    });

    it('should preserve error through chain', () => {
      const originalError = new Error('original');
      const result = err(originalError);
      const mapped = flatMap(
        flatMap(result, x => ok((x as any) * 2)),
        x => ok((x as any) + 10)
      );
      
      expect(mapped.success).toBe(false);
      if (!mapped.success) {
        expect(mapped.error).toBe(originalError);
      }
    });
  });

  describe('mixed operations', () => {
    it('should combine mapResult and flatMap', () => {
      const result = ok(5);
      const step1 = mapResult(result, x => x * 2);
      const step2 = flatMap(step1, x => ok(x + 10));
      
      expect(step2.success).toBe(true);
      if (step2.success) {
        expect(step2.data).toBe(20);
      }
    });

    it('should handle error in mixed operations', () => {
      const result = ok(5);
      const step1 = flatMap(result, () => err(new Error('error')));
      const step2 = mapResult(step1, (x: any) => x * 2);
      
      expect(step2.success).toBe(false);
      if (!step2.success) {
        expect(step2.error.message).toBe('error');
      }
    });
  });
});
