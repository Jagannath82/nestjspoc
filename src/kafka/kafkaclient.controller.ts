import { Controller, Get, Post } from '@nestjs/common';
import { ProducerService } from './producer.service';
import { ConsumerService } from './consumer.service';

@Controller('kafkaclient')
export class KafkaclientController {
  constructor(
    private readonly producerService: ProducerService,
    private readonly consumerService: ConsumerService,
  ) {}

  @Post('producer')
  async sendMessage() {
    console.log('Publishing messages');
    await this.producerService.produce({
      topic: 'user-tracking',
      messages: [
        {
          value: 'Hello world',
        },
      ],
    });
  }

  @Get('consumer')
  async readMessage() {
    await this.consumerService.consume(
      { topics: ['user-tracking'] },
      {
        eachMessage: async ({ topic, partition, message }) => {
          console.log({
            value: message.value.toString(),
            topic: topic.toString(),
            partition: partition.toString(),
          });
        },
      },
    );
  }
}
