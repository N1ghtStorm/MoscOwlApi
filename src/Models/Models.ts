import {Entity} from "typeorm";

@Entity()
export class Player {
    memberId: number;
    fullName: string;
    fourZeroCount: number;
}

@Entity()
export class Flag {
    flagId: number;
    memberId: number;
    flagName: string;
}

@Entity()
export class User {
    userName: string;
    passwordHash: string;
    passwordSalt: string;
}

