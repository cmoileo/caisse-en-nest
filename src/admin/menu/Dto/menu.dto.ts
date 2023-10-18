import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class MenuDto {
    id: number

    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsNotEmpty()
    description: string

    @IsNotEmpty()
    admin_id: number

    @IsString()
    @IsNotEmpty()
    price: string
}