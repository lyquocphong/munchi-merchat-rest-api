import { routesConfig } from '@/config/routes';
import { swaggerTag } from '@/config/swagger';
import { Body, Controller, Get, NotImplementedException, Post, Type } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';
import { JwtResponse } from './auth.type';

@Controller()
@ApiTags(swaggerTag.auth)
export class AuthController {
    constructor() { }

    @Post(routesConfig.auth.login)
    @ApiOperation({
        summary: 'Login with jwt',
        description: 'Login with email and password',
    })
    @ApiOkResponse({
        description: 'Successfully authenticated. Returns a jwt',
        type: JwtResponse,
    })
    async login(@Body() body:LoginDto) {
        /**
         * TODO: Need to implement
         */
        throw new NotImplementedException('Login Need implement')
    }

    @Post(routesConfig.auth.logout)
    @ApiOperation({
        summary: 'Logout',
        description: 'Log user out of system',
    })
    @ApiOkResponse({
        description: 'Successfully logged out',
    })
    @ApiUnauthorizedResponse({
        description: 'Error: Unauthorized',
    })
    async logout() {
        /**
         * TODO: Need to implement
         */
        throw new NotImplementedException('Logout Need implement')
    }
}