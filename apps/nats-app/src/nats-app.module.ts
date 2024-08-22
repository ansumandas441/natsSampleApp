import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { NatsJetStreamTransport } from '@nestjs-plugins/nestjs-nats-jetstream-transport';
import { config } from './config';

@Module({
  imports: [
    ClientsModule.register([
      {
        name:'NATS_CLIENT',
        transport: Transport.NATS,
        options: {
          ...config
        }
      },
    ]),
    NatsJetStreamTransport.register({
      connectionOptions: {
        name: 'NATS_JETSTREAM',
        ...config
      }
    })
  ],
  exports: [ClientsModule, NatsJetStreamTransport]
})
export class NatsAppModule {}
