import { Module } from "@nestjs/common";
import { NatsAppModule } from "./nats-app.module";
import { NatsAppController } from "./nats-app.controller";
import { NatsAppService } from "./nats-app.service";

@Module({
    imports: [NatsAppModule],
    controllers: [NatsAppController],
    providers: [NatsAppService],
})

export class AppModule {}