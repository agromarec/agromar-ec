export declare class CreateUserDto {
    name: string;
    lastName: string;
    email: string;
    password: string;
    address: string;
    phone: string;
    paisId: number;
    cantonId: number;
    userId?: number;
    paypalEmail: string;
    roles: number[];
    userType?: string;
}
