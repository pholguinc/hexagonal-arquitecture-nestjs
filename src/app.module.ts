import { ProviderModule } from './modules/providers/provider.module';
import { PrismaModule } from './commons/infrastructure/prisma.module';
import { PrismaService } from './commons/infrastructure/prisma.service';
import { CategoryController } from './modules/categories/infrastructure/category.controller';
import { CategoryModule } from './modules/categories/category.module';
import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { CONFIG_DATABASE } from './commons/infrastructure/config-database';

@Module({
  imports: [
        ProviderModule, PrismaModule, CONFIG_DATABASE(), CategoryModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
