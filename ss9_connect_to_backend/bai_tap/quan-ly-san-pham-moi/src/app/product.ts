import {Category} from './category';

export interface Product {
  id ?: number;
  categoryId ?: Category;
  name ?: string;
  price ?: number;
  production ?: string;
}
