import { TypeOrmModule } from '@nestjs/typeorm';
import { Inject, Injectable } from '@nestjs/common';
import { CategoryRepository } from '../domain/repository/category.repository';
import { ICrudCategoryRepository } from '../domain/repository/category.interface';
import { CategoryDto } from '../infrastructure/dto/category.dto';
import {
  IResponse,
  IUseCaseCategoryService,
} from './category-use-case.interface';
import { IUpdateCategoryRepositoryDto } from 'src/commons/domain/dto/category-repository.dto';
import { PaginationDto } from 'src/commons/domain/dto/pagination.dto';



@Injectable()
export class CategoryUseCaseService implements IUseCaseCategoryService {
  constructor(
    @Inject(CategoryRepository)
    private readonly categoryRepository: ICrudCategoryRepository,
  ) {}

  async getAllCategories(paginationDto: PaginationDto): Promise<CategoryDto[]> {
    return await this.categoryRepository.getAllCategories(paginationDto);
    
  }

  async saveCategory(newCategory: CategoryDto): Promise<IResponse> {
    await this.categoryRepository.saveCategory(newCategory);
    return { message: 'Success', code: 200 };
  }

  async getCategoryById(id: number): Promise<CategoryDto> {
    const category = await this.categoryRepository.getCategoryById(id);
    return {
      id: category.id,
      name: category.name,
      createdAt: category.createdAt,
      updatedAt: category.updatedAt,
      status: category.status,
    };
  }

  async putCategoryStatus(id: number, newStatus: number): Promise<void> {
    await this.categoryRepository.putCategoryStatus(id, newStatus);
  }

  async updateCategoryById(
    id: number,
    updatedCategory: IUpdateCategoryRepositoryDto,
  ): Promise<IResponse> {
    await this.categoryRepository.updateCategoryById(id, updatedCategory);
    return { message: 'Category updated successfully', code: 200 };
  }
}
