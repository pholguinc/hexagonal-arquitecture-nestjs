import { ICategoryRepositoryDto, IGetCategoryRepositoryDto, IUpdateCategoryRepositoryDto } from "../../dto/category-repository.dto";
import { PaginationDto } from "../../dto/pagination.dto";


export interface IOrmCategoryRepository {
  getAllCategories(paginationDto:PaginationDto): Promise<IGetCategoryRepositoryDto[]>;
  saveCategory(newCategory: ICategoryRepositoryDto): Promise<void>;
  getCategoryById(id: number): Promise<IGetCategoryRepositoryDto>;
  putCategoryStatus(id: number, status: number): Promise<void>;
  updateCategoryById(
    id: number,
    updatedCategory: IUpdateCategoryRepositoryDto,
  ): Promise<void>;
}
