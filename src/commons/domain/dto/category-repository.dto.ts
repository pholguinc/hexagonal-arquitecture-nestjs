export interface ICategoryRepositoryDto {
  name: string;
  createdAt: Date;
  updatedAt?: Date;
  status: number;

}


export interface IGetCategoryRepositoryDto extends ICategoryRepositoryDto {
  id: number;
}

export interface IUpdateCategoryRepositoryDto {
  id: number;
  name?: string;
  status?: number;
}
