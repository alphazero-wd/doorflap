import { NotFoundException } from '@nestjs/common';

export class ProductNotFoundException extends NotFoundException {
  constructor(productId: number) {
    super(`Cannot find product with id: #${productId}`);
  }
}
