import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { CategoryEntity } from '../../entities/category.entity';
import { IOrmCategoryRepository } from './orm-category.repository.interface';
import {
  IGetCategoryRepositoryDto,
  ICategoryRepositoryDto,
  IUpdateCategoryRepositoryDto,
} from '../../dto/category-repository.dto';
import { PrismaService } from 'src/commons/infrastructure/prisma.service';
import { CategoryDto } from 'src/modules/categories/infrastructure/dto/category.dto';
import { PaginationDto } from '../../dto/pagination.dto';

@Injectable()
// extends Repository<CategoryEntity>
export class OrmCategoryRepository implements IOrmCategoryRepository {
  // constructor(dataSource: DataSource) {
  //   super(CategoryEntity, dataSource.createEntityManager());
  // } //TODO TypeORM definition

  constructor(private readonly prisma: PrismaService) {}

  async saveCategory(newCategory: ICategoryRepositoryDto): Promise<void> {
    // await this.save(newCategory); //TODO TyeORM definition

    await this.prisma.category.create({
      data: {
        name: newCategory.name,
        status: newCategory.status,
      },
    });
  }

  async getAllCategories(
    paginationDto: PaginationDto,
  ): Promise<IGetCategoryRepositoryDto[]> {
    // return await this.find(); //TODO TypeORM definition

    const { page, limit } = paginationDto;
    const totalPages = await this.prisma.category.count();
    const currentPage = page;

    const categories = await this.prisma.category.findMany({
      skip: (page - 1) * limit,
      take: limit,
    });

    return {
      categories,
      totalPages,
      currentPage,
    } as any as IGetCategoryRepositoryDto[];
  }

  async getCategoryById(id: number): Promise<IGetCategoryRepositoryDto> {
    const category = await this.prisma.category.findUnique({
      where: { id: Number(id) },
    });
    if (!category) {
      throw new Error('Category not found');
    }
    return {
      id: category.id,
      name: category.name,
      createdAt: category.createdAt,
      updatedAt: category.updatedAt,
      status: category.status,
    };
  }

  async putCategoryStatus(id: number, newStatus: number): Promise<void> {
    await this.prisma.category.update({
      where: { id: Number(id) },
      data: { status: newStatus },
    });
  }

  async updateCategoryById(
    id: number,
    updatedCategory: IUpdateCategoryRepositoryDto,
  ): Promise<void> {
    await this.prisma.category.update({
      where: { id: Number(id) },
      data: {
        ...updatedCategory,
        updatedAt: new Date(),
      },
    });
  }
}
