import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CategoryUseCaseService } from '../application/category-use-case.service';
import {
  IResponse,
  IUseCaseCategoryService,
} from '../application/category-use-case.interface';
import { CategoryDto } from './dto/category.dto';
import { IUpdateCategoryRepositoryDto } from 'src/commons/domain/dto/category-repository.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { PaginationDto } from 'src/commons/domain/dto/pagination.dto';

@ApiTags('categories')
@Controller('categories')
export class CategoryController {
  constructor(
    @Inject(CategoryUseCaseService)
    private readonly categoryService: IUseCaseCategoryService,
  ) {}

  @Get()
  @ApiOperation({ summary: 'Petición HTTP para listar categorias' })
  async getCategories(
    @Query() paginationDto: PaginationDto,
  ): Promise<CategoryDto[]> {
    return this.categoryService.getAllCategories(paginationDto);
  }

  @Post()
  saveCategory(@Body() category: CategoryDto): Promise<IResponse> {
    return this.categoryService.saveCategory(category);
  }

  @Get(':id')
  getCategoryById(@Param('id') id: number): Promise<CategoryDto> {
    return this.categoryService.getCategoryById(id);
  }

  @Put('status/:id')
  async updateCategoryStatus(
    @Param('id') id: number,
    @Body('status') status: number,
  ): Promise<IResponse> {
    await this.categoryService.putCategoryStatus(id, status);
    return { message: 'Status updated successfully', code: 200 };
  }
  @Put(':id')
  async updateCategoryById(
    @Param('id') id: number,
    @Body() updatedCategory: IUpdateCategoryRepositoryDto,
  ): Promise<IResponse> {
    await this.categoryService.updateCategoryById(id, updatedCategory);
    return { message: 'Category updated successfully', code: 200 };
  }
}
