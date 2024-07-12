export interface IProviderRepositoryDto {
  name: string;
  ruc_number: string;
  email: string;
  phone: string;
  createdAt: Date;
  updatedAt?: Date;
  status: number;
}

export interface IGetProviderRepositoryDto extends IProviderRepositoryDto {
  id: number;
}

export interface IUpdateProviderRepositoryDto {
  id: number;
  name?: string;
  ruc_number?: string;
  email?: string;
  phone?: string;
  status?: number;
}
