import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

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
    if (!product) throw new NotFoundException('product not found');
    return product;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const { affected } = await this.productsRepository.update(
      { id },
      updateProductDto,
    );
    if (!affected) throw new NotFoundException('product not found');
    return this.productsRepository.findOne({ where: { id } });
  }

  async remove(id: number) {
    const { affected } = await this.productsRepository.delete({ id });
    if (!affected) throw new NotFoundException('product not found');
    return { deleted: true };
  }
}
