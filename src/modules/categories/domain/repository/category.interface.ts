import { PaginationDto } from "src/commons/domain/dto/pagination.dto";
import { ICategoryRepositoryModel, ISaveCategoryRepositoryModel, IUpdateCategoryRepositoryModel } from "../models/category-repository.model";

export interface ICrudCategoryRepository {
  getAllCategories(
    paginationDto: PaginationDto,
  ): Promise<ICategoryRepositoryModel[]>;
  saveCategory(newCategory: ISaveCategoryRepositoryModel): Promise<void>;
  getCategoryById(id: number): Promise<ICategoryRepositoryModel>;
  putCategoryStatus(id: number, status: number): Promise<void>;
  updateCategoryById(
    id: number,
    updatedCategory: IUpdateCategoryRepositoryModel,
  ): Promise<void>;
}
