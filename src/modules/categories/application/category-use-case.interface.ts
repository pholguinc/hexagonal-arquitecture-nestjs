import { IUpdateCategoryRepositoryDto } from "src/commons/domain/dto/category-repository.dto";
import { CategoryDto } from "../infrastructure/dto/category.dto";
import { PaginationDto } from '../../../commons/domain/dto/pagination.dto';

export interface IUseCaseCategoryService {
  getAllCategories(paginationDto:PaginationDto): Promise<CategoryDto[]>;
  saveCategory(newCategory: CategoryDto): Promise<IResponse>;
  getCategoryById(id: number): Promise<CategoryDto>;
  putCategoryStatus(id: number, newStatus: number): Promise<void>;
  updateCategoryById(
    id: number,
    updatedCategory: IUpdateCategoryRepositoryDto,
  ): Promise<IResponse>;
}

export interface IResponse {
  message: string;
  code: number;
}
