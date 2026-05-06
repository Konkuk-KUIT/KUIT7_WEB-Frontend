export interface Product {
  id: number;
  category: string;
  price: string;
  stocked: boolean;
  name: string;
}

export type ProductInput = Pick<Product, "name" | "price">;
export type EditProduct = (id: number, newProducts: ProductInput) => void;
export type DeleteProduct = (id: number) => void;

export type useProductsReturn = {
  products: Product[];
  edit: EditProduct;
  remove: DeleteProduct;
}

export type useFilteredProductsParas = {
  filterText: string;
  inStockOnly: boolean;
}

export type useFilteredProductsReturn = {
  filteredProducts: Product[];
  edit: EditProduct;
  remove: DeleteProduct;
}

export type SearchBarProps = {
  filteredText: string;
  inStockOnly: boolean;
  onFilterTextChange: (filterText: string) => void;
  onInStockOnlyChange: (inStockOnly: boolean) => void;
}

export type ProductTableProps = {
  products: Product[];
  onProductEdit: (id: number, newProduct: ProductInput) => void;
  onProductDelete: (id: number) => void;
}

export type ProductRowListProps = {
  products: Product[];
  onEdit: (id: number, product: ProductInput) => void;
  onDelete: (id: number) => void;
}

export type ProductRowProps = {
  id: number;
  name: string;
  price: string;
  onEdit: (id: number, product: ProductInput) => void;
  onDelete: (id: number) => void;
}