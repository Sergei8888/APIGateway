export type User = {
    id: number;
    username: string;
    password: string;
    email?: string;
    phone?: string;
    createdAt: string;
};

export type Telescope = {
    id: number;
    name: string;
    country: string;
};

// One of username or email field must exist
export type LoginOptions = {
    username?: string;
    email?: string;
    password: string;
};
