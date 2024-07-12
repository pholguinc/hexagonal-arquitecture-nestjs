
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryEntity } from 'src/commons/domain/entities/category.entity';
import { CategoryController } from './infrastructure/category.controller';
import { CategoryUseCaseService } from './application/category-use-case.service';
import { CategoryRepository } from './domain/repository/category.repository';
import { PrismaModule } from 'src/commons/infrastructure/prisma.module';
import { OrmCategoryRepository } from 'src/commons/domain/repository/categories/orm-category.respository';

@Module({
    imports: [PrismaModule],
    controllers: [CategoryController],
    providers: [CategoryUseCaseService, CategoryRepository, OrmCategoryRepository],
})
export class CategoryModule {}
