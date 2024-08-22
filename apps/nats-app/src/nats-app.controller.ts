import { Controller } from '@nestjs/common';
import { NatsAppService } from './nats-app.service';
import { Ctx, EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { NatsJetStreamContext } from '@nestjs-plugins/nestjs-nats-jetstream-transport';

@Controller()
export class NatsAppController {
  constructor(private readonly appService: NatsAppService) {}

  @MessagePattern('postMessage')
  async sendNormalMessage(){
    console.log("Post request received")
    this.appService.publishToNats();
    return 'postMessage done'
  }

  @MessagePattern('postStream')
  async sendStreamMessage(){
    console.log("Post request received from jetstream")
    await this.appService.publishToJetStream();
    return 'The stream message is sent';
  }

  @MessagePattern('nats.subject.normal')
  normalMessageHandler(data: any){
    console.log('Message received from nats core')
    return 'Message received from nats core';
  }

  @EventPattern('nats.subject.jetstream')
  jetStreamMessageHandler(
    @Payload() data: any,
    @Ctx() context: NatsJetStreamContext,
  ){

    console.log('Message received from nats jetstream worker1', data);
    if (context && context.message) {
      context.message.ack();
    }
  }

}
