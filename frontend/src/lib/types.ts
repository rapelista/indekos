export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
    created_at: string;
    updated_at: string;
    role_id: number;
    role: Role;
}

export interface Role {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
}

export interface Room {
    id: number;
    name: string;
    floor_id: number;
    created_at: string;
    updated_at: string;
    floor: Floor;
}

export interface Floor {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
    rooms: Room[];
}

export enum Action {
    UPDATE = "UPDATE",
    DELETE = "DELETE",
}

export interface IAction {
    type: Action;
    data?: any;
}
