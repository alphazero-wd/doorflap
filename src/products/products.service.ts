import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { ProductNotFoundException } from './exceptions/product-not-found.exception';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const newProduct = this.productsRepository.create(createProductDto);
    await this.productsRepository.save(newProduct);
    return newProduct;
  }

  findAll() {
    return this.productsRepository.findAndCount();
  }

  async findOne(id: number) {
    const product = await this.productsRepository.findOne({ where: { id } });
    if (!product) throw new ProductNotFoundException(id);
    return product;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const { affected } = await this.productsRepository.update(
      { id },
      updateProductDto,
    );
    if (!affected) throw new ProductNotFoundException(id);
    return this.productsRepository.findOne({ where: { id } });
  }

  async remove(id: number) {
    const { affected } = await this.productsRepository.delete({ id });
    if (!affected) throw new ProductNotFoundException(id);
    return { deleted: true };
  }
}
