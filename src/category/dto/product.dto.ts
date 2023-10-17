import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class ProductDto {
    @IsNotEmpty()
    id: number

    @IsNotEmpty()
    @IsString()
    name: string
    
    @IsNotEmpty()
    @IsString()
    description: string

    @IsNumber()
    @IsNotEmpty()
    price: number
}