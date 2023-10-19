import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class OrderDto {
    @IsNotEmpty()
    @IsString()
    userName: string

    @IsNotEmpty()
    @IsString()
    description: string

    @IsNotEmpty()
    @IsString()
    price: string

    @IsBoolean()
    @IsNotEmpty()
    isFinished: boolean

    @IsNumber()
    @IsNotEmpty()
    adminId: number

    @IsNumber()
    @IsNotEmpty()
    userId: number
}