import { Inject, Injectable } from '@nestjs/common';
import { ICrudCategoryRepository } from './category.interface';
import { ICategoryRepositoryModel, ISaveCategoryRepositoryModel, IUpdateCategoryRepositoryModel } from '../models/category-repository.model';
import { OrmCategoryRepository } from 'src/commons/domain/repository/categories/orm-category.respository';
import { IOrmCategoryRepository } from 'src/commons/domain/repository/categories/orm-category.repository.interface';
import { PaginationDto } from 'src/commons/domain/dto/pagination.dto';

@Injectable()
export class CategoryRepository implements ICrudCategoryRepository {
  constructor(
    @Inject(OrmCategoryRepository)
    private readonly ormCategoryRepository: IOrmCategoryRepository,
  ) {}

  async getAllCategories(
    paginationDto: PaginationDto,
  ): Promise<ICategoryRepositoryModel[]> {
    
      return await this.ormCategoryRepository.getAllCategories(paginationDto);
   
  }

  async saveCategory(newCategory: ISaveCategoryRepositoryModel): Promise<void> {
    await this.ormCategoryRepository.saveCategory(newCategory);
  }

  async getCategoryById(id: number): Promise<ICategoryRepositoryModel> {
    return await this.ormCategoryRepository.getCategoryById(id);
  }

  async putCategoryStatus(id: number, status: number): Promise<void> {
    return await this.ormCategoryRepository.putCategoryStatus(id, status);
  }

  async updateCategoryById(
    id: number,
    updatedCategory: IUpdateCategoryRepositoryModel,
  ): Promise<void> {
    return await this.ormCategoryRepository.updateCategoryById(id, updatedCategory)
  }
}
