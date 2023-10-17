import { IsNotEmpty, IsString } from "class-validator"

export class Category {
    @IsNotEmpty()
    id: number

    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsNotEmpty()
    description: string

    @IsNotEmpty()
    admin_id: number
}