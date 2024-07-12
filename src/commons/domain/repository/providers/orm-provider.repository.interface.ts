import { IGetProviderRepositoryDto, IProviderRepositoryDto, IUpdateProviderRepositoryDto } from "../../dto/provider-repository.dto";

export interface IOrmProviderRepository {
  getAllProviders(): Promise<IGetProviderRepositoryDto[]>;
  saveProvider(newProvider: IProviderRepositoryDto): Promise<void>;
  getProviderById(id: number): Promise<IGetProviderRepositoryDto>;
  putProviderStatus(id: number, status: number): Promise<void>;
  updateProviderById(
    id: number,
    updatedProvider: IUpdateProviderRepositoryDto,
  ): Promise<void>;
}
