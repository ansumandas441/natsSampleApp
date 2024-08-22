import { Test, TestingModule } from '@nestjs/testing';
import { NatsAppController } from './nats-app.controller';
import { NatsAppService } from './nats-app.service';

describe('NatsAppController', () => {
  let natsAppController: NatsAppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [NatsAppController],
      providers: [NatsAppService],
    }).compile();

    natsAppController = app.get<NatsAppController>(NatsAppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(natsAppController.getHello()).toBe('Hello World!');
    });
  });
});
