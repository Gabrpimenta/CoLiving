import { ProfileModel, type Profile } from '../Profile';
import type { UserRole } from '@/types';

describe('ProfileModel', () => {
  const createProfile = (overrides?: Partial<Profile>): Profile => ({
    id: '1',
    userId: 'user-1',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    role: 'resident' as UserRole,
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01',
    ...overrides,
  });

  describe('Basic Operations', () => {
    it('should create valid profile', () => {
      const profile = createProfile();
      const model = new ProfileModel(profile);
      expect(model.getEntity()).toEqual(profile);
    });

    it('should get full name', () => {
      const profile = createProfile({ firstName: 'Jane', lastName: 'Smith' });
      const model = new ProfileModel(profile);
      expect(model.getFullName()).toBe('Jane Smith');
    });

    it('should get initials', () => {
      const profile = createProfile({ firstName: 'John', lastName: 'Doe' });
      const model = new ProfileModel(profile);
      expect(model.getInitials()).toBe('JD');
    });

    it('should check if user is admin', () => {
      const profile = createProfile({ role: 'manager' });
      const model = new ProfileModel(profile);
      expect(model.isAdmin()).toBe(true);
    });

    it('should check if user is not admin', () => {
      const profile = createProfile({ role: 'resident' });
      const model = new ProfileModel(profile);
      expect(model.isAdmin()).toBe(false);
    });
  });

  describe('Validation', () => {
    it('should throw error for empty first name', () => {
      const profile = createProfile({ firstName: '' });
      expect(() => new ProfileModel(profile)).toThrow('First name is required');
    });

    it('should throw error for empty last name', () => {
      const profile = createProfile({ lastName: '' });
      expect(() => new ProfileModel(profile)).toThrow('Last name is required');
    });

    it('should throw error for invalid email', () => {
      const profile = createProfile({ email: 'invalid-email' });
      expect(() => new ProfileModel(profile)).toThrow('Valid email is required');
    });
  });

  describe('Branch Coverage - Edge Cases', () => {
    it('should throw error for whitespace-only first name', () => {
      const profile = createProfile({ firstName: '   ' });
      expect(() => new ProfileModel(profile)).toThrow('First name is required');
    });

    it('should throw error for whitespace-only last name', () => {
      const profile = createProfile({ lastName: '   ' });
      expect(() => new ProfileModel(profile)).toThrow('Last name is required');
    });

    it('should throw error for empty email', () => {
      const profile = createProfile({ email: '' });
      expect(() => new ProfileModel(profile)).toThrow('Valid email is required');
    });

    it('should throw error for email without @ symbol', () => {
      const profile = createProfile({ email: 'invalidemail.com' });
      expect(() => new ProfileModel(profile)).toThrow('Valid email is required');
    });

    it('should throw error for email without domain', () => {
      const profile = createProfile({ email: 'test@' });
      expect(() => new ProfileModel(profile)).toThrow('Valid email is required');
    });

    it('should throw error for email without local part', () => {
      const profile = createProfile({ email: '@example.com' });
      expect(() => new ProfileModel(profile)).toThrow('Valid email is required');
    });

    it('should get full name correctly', () => {
      const profile = createProfile({ firstName: 'Jane', lastName: 'Smith' });
      const model = new ProfileModel(profile);
      expect(model.getFullName()).toBe('Jane Smith');
    });

    it('should get initials correctly', () => {
      const profile = createProfile({ firstName: 'alice', lastName: 'bob' });
      const model = new ProfileModel(profile);
      expect(model.getInitials()).toBe('AB');
    });

    it('should return true for manager role', () => {
      const profile = createProfile({ role: 'manager' });
      const model = new ProfileModel(profile);
      expect(model.isAdmin()).toBe(true);
    });

    it('should return false for staff role', () => {
      const profile = createProfile({ role: 'staff' });
      const model = new ProfileModel(profile);
      expect(model.isAdmin()).toBe(false);
    });

    it('should return copy of entity', () => {
      const profile = createProfile();
      const model = new ProfileModel(profile);
      const entity1 = model.getEntity();
      const entity2 = model.getEntity();

      expect(entity1).toEqual(entity2);
      expect(entity1).not.toBe(entity2);
      entity1.firstName = 'Changed';
      expect(entity2.firstName).toBe('John');
    });
  });
});
