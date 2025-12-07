import { BaseEntity, UserRole } from '@/types';

/**
 * Profile Domain Model
 *
 * Pure business entity representing a user profile
 */

export interface Profile extends BaseEntity {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  avatarUrl?: string;
  role: UserRole;
}

/**
 * Profile validation and business logic
 */
export class ProfileModel {
  constructor(private profile: Profile) {
    this.validate();
  }

  private validate(): void {
    if (!this.profile.firstName || this.profile.firstName.trim().length === 0) {
      throw new Error('First name is required');
    }

    if (!this.profile.lastName || this.profile.lastName.trim().length === 0) {
      throw new Error('Last name is required');
    }

    if (!this.profile.email || !this.isValidEmail(this.profile.email)) {
      throw new Error('Valid email is required');
    }

    if (!this.profile.role) {
      throw new Error('User role is required');
    }
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  getFullName(): string {
    return `${this.profile.firstName} ${this.profile.lastName}`;
  }

  getInitials(): string {
    const first = this.profile.firstName.charAt(0).toUpperCase();
    const last = this.profile.lastName.charAt(0).toUpperCase();
    return `${first}${last}`;
  }

  isAdmin(): boolean {
    return this.profile.role === 'admin' || this.profile.role === 'manager';
  }

  getEntity(): Profile {
    return { ...this.profile };
  }
}
