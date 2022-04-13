import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { resolve } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PRODUCTS } from './constants/constants';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: PRODUCTS,
        transport: Transport.GRPC,
        options: {
          package: PRODUCTS,
          protoPath: resolve(__dirname, './contracts/products.proto'),
          url: 'localhost:5000',
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
