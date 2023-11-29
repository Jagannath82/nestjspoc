import { Module } from '@nestjs/common';
import { ProducerService } from './producer.service';
import { ConsumerService } from './consumer.service';
import { KafkaclientController } from './kafkaclient.controller';

@Module({
  imports: [],
  controllers: [KafkaclientController],
  providers: [ProducerService, ConsumerService],
})
export class KafkaModule {}
