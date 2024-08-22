import { NatsJetStreamClientProxy } from '@nestjs-plugins/nestjs-nats-jetstream-transport';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class NatsAppService {
  constructor(
    @Inject('NATS_CLIENT') private readonly natsClient: ClientProxy,
    @Inject(NatsJetStreamClientProxy) private readonly jetstreamClient: NatsJetStreamClientProxy 
  ) {}


  publishToNats(){
    const message = { text: 'Hello, from nats core publisher' };
    return this.natsClient.emit('nats.subject.normal', message);
  }

  publishToJetStream() {
    const message = { text: 'Hello, from nats core publisher' };
    console.log("Just before returning")
    return this.jetstreamClient
    .emit('nats.subject.jetstream', message)
    .subscribe((pubAck)=>{
      console.log(pubAck);
    });
  }

  getHello(): string {
    return 'Hello World!';
  }
}
