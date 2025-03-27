export interface User {
    id?: string; // Optional: Auto-generated ID
    fullName: string;
    email: string;
    password: string;
    role: 'freelancer' | 'client' | 'both'; // User role selection
    createdAt?: Date; // Optional: Timestamp for account creation
}
