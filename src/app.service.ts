import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { PRODUCTS, PRODUCTS_SERVICE } from './constants/constants';
import { products } from './contracts/products';

@Injectable()
export class AppService implements OnModuleInit {
  constructor(@Inject(PRODUCTS) private readonly grpcClient: ClientGrpc) {}

  private productsService: products.ProductsService;

  onModuleInit() {
    this.productsService =
      this.grpcClient.getService<products.ProductsService>(PRODUCTS_SERVICE);
  }

  findAll() {
    return lastValueFrom(this.productsService.findAll({}));
  }

  deleteOne(data: products.DeleteOneRequest) {
    return lastValueFrom(this.productsService.deleteOne(data));
  }

  updateOne(data: products.UpdateOneRequest) {
    return lastValueFrom(this.productsService.updateOne(data));
  }

  addOne(data: products.AddOneProductRequest) {
    return lastValueFrom(this.productsService.addOne(data));
  }
}
