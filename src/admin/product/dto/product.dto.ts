import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class ProductDto {
    id: number

    @IsNotEmpty()
    @IsString()
    name: string
    
    @IsNotEmpty()
    @IsString()
    description: string

    @IsString()
    @IsNotEmpty()
    price: string

    @IsNumber()
    @IsNotEmpty()
    category_id: number
}