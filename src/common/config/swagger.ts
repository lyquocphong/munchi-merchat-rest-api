import { DocumentBuilder } from "@nestjs/swagger";

export const swaggerConfig = new DocumentBuilder()
    .setTitle(process.env.SWAGGER_TITLE)
    .setDescription(process.env.SWAGGER_DESC)
    .setVersion(process.env.SWAGGER_VERSION)
    .setContact('Munchi Dev','https://gomunchi.com','dev@gomunchi.com')
    .addBearerAuth({
        name: 'JWT',
        description: 'Authentication via JWT',
        type: 'http',
        scheme: 'bearer',
    })
    .build();

export const swaggerTag = {
    auth: 'authentication'
}