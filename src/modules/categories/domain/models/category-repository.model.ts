export interface ICategoryRepositoryModel {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt?: Date;
  status: number;
}

export type ISaveCategoryRepositoryModel = Omit<
  ICategoryRepositoryModel,
  'id'
>;

export interface IUpdateCategoryRepositoryModel {
  id: number;
  name?: string;
  status?: number;
}
