import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {

    @IsEmail()
    @IsNotEmpty()
    @ApiProperty({
        description: 'The email of the user to authenticate',
        type: String,
        example: 'user@email.com',
        required: true,
    })
    email: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'The password is used to authenticate',
        type: String,
        example: '12345abcd',
        required: true,
    })
    password: string;
}