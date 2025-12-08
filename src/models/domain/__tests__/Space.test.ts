import { SpaceModel, type Space, type SpaceType } from '../Space';

describe('SpaceModel', () => {
  const createSpace = (overrides?: Partial<Space>): Space => ({
    id: '1',
    name: 'Test Space',
    type: 'gym' as SpaceType,
    description: 'Test description',
    capacity: 10,
    amenities: ['wifi', 'ac'],
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01',
    ...overrides,
  });

  describe('Basic Operations', () => {
    it('should create valid space', () => {
      const space = createSpace();
      const model = new SpaceModel(space);
      expect(model.getEntity()).toEqual(space);
    });

    it('should check availability', () => {
      const space = createSpace();
      const model = new SpaceModel(space);
      const start = new Date();
      const end = new Date(start.getTime() + 3600000);
      expect(model.isAvailable(start, end)).toBe(true);
    });

    it('should get type display name', () => {
      const space = createSpace({ type: 'gym' });
      const model = new SpaceModel(space);
      expect(model.getTypeDisplayName()).toBe('Gym');
    });

    it('should get display name for all types', () => {
      const types: SpaceType[] = [
        'gym',
        'coworking',
        'kitchen',
        'laundry',
        'rooftop',
        'meeting-room',
        'cinema',
      ];

      types.forEach((type) => {
        const space = createSpace({ type });
        const model = new SpaceModel(space);
        expect(model.getTypeDisplayName()).toBeTruthy();
      });
    });

    it('should return entity copy', () => {
      const space = createSpace();
      const model = new SpaceModel(space);
      const entity = model.getEntity();
      expect(entity).not.toBe(space);
      expect(entity).toEqual(space);
    });
  });

  describe('Validation', () => {
    it('should throw error for empty name', () => {
      const space = createSpace({ name: '' });
      expect(() => new SpaceModel(space)).toThrow('Space name is required');
    });

    it('should throw error for whitespace-only name', () => {
      const space = createSpace({ name: '   ' });
      expect(() => new SpaceModel(space)).toThrow('Space name is required');
    });

    it('should validate type is required', () => {
      const space = createSpace({ type: '' as SpaceType });
      expect(() => new SpaceModel(space)).toThrow('Space type is required');
    });

    it('should throw error for zero capacity', () => {
      const space = createSpace({ capacity: 0 });
      expect(() => new SpaceModel(space)).toThrow('Space capacity must be greater than 0');
    });

    it('should throw error for negative capacity', () => {
      const space = createSpace({ capacity: -1 });
      expect(() => new SpaceModel(space)).toThrow('Space capacity must be greater than 0');
    });
  });

  describe('Branch Coverage - Display Names', () => {
    it('should get display names for all space types', () => {
      const types: SpaceType[] = ['gym', 'coworking', 'kitchen', 'laundry', 'rooftop', 'meeting-room', 'cinema'];
      const expectedNames = ['Gym', 'Coworking Space', 'Kitchen', 'Laundry Room', 'Rooftop', 'Meeting Room', 'Cinema'];

      types.forEach((type, index) => {
        const space = createSpace({ type });
        const model = new SpaceModel(space);
        expect(model.getTypeDisplayName()).toBe(expectedNames[index]);
      });
    });

    it('should check availability with different times', () => {
      const space = createSpace();
      const model = new SpaceModel(space);
      
      const start1 = new Date('2024-01-01T10:00:00');
      const end1 = new Date('2024-01-01T11:00:00');
      expect(model.isAvailable(start1, end1)).toBe(true);

      const start2 = new Date('2024-01-01T14:00:00');
      const end2 = new Date('2024-01-01T15:00:00');
      expect(model.isAvailable(start2, end2)).toBe(true);
    });

    it('should return copy of entity', () => {
      const space = createSpace();
      const model = new SpaceModel(space);
      const entity1 = model.getEntity();
      const entity2 = model.getEntity();

      expect(entity1).toEqual(entity2);
      expect(entity1).not.toBe(entity2);
      entity1.name = 'Changed';
      expect(entity2.name).toBe('Test Space');
    });
  });
});
