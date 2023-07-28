import { ApiProperty } from '@nestjs/swagger'

export class LoginDto {

    @ApiProperty({
        description: 'The email of the user to authenticate',
        type: String,
        example: 'admin@nestjs-template.com',
        required: true,
    })
    email: string;

    @ApiProperty({
        description: 'The password is used to authenticate',
        type: String,
        example: '12345abcd',
        required: true,
    })
    password: string;
}