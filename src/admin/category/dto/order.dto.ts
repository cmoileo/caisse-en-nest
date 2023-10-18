import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class OrderDto {
    @IsNotEmpty()
    id: number

    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsNotEmpty()
    description: string

    @IsNumber()
    @IsNotEmpty()
    price: number

    @IsBoolean()
    @IsNotEmpty()
    isFinished: boolean

    @IsNotEmpty()
    admin_id: number

    @IsNotEmpty()
    user_id: number
}