/**
 * Example User Role Enum
 * 
 * This is a demonstration implementation showing how to define user roles
 * and helper functions.
 * 
 * In a real-world application, you should:
 * - Define roles based on your application's access control needs
 * - Add more granular roles (e.g., SUPER_ADMIN, CUSTOMER, GUEST)
 * - Implement permission-based access control
 * - Create role hierarchy and inheritance
 * - Add role validation utilities
 * - Consider using bitwise flags for multiple roles
 * 
 * Modify or replace this enum based on your project's specific requirements.
 */

// Example enum for user roles. Replace or extend as needed for your application.
export enum UserRole {
    ADMIN = 'admin',
    MODERATOR = 'moderator',
    USER = 'user',
}

// Example helper function to check for admin role
export function isAdminRole(role: UserRole): boolean {
    return role === UserRole.ADMIN;
}

// Example helper function to check for moderator role
export function isModeratorRole(role: UserRole): boolean {
    return role === UserRole.MODERATOR;
}