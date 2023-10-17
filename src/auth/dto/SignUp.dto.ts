import { IsEmail, IsNotEmpty, IsString, Matches } from "class-validator";

export class SignUpDto {
    @IsNotEmpty()
    @IsEmail()
    email: string

    @IsString()
    @Matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?°&])[A-Za-z\d@$!%*?&]{8,}$/, {
        message: "Le mot de passe doit contenir au moins 8 caractères, dont au moins une lettre, un chiffre et un caractère spécial"
    })
    password: string
    name: string;
}