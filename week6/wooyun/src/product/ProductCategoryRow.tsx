interface ProductCategoryProps {
  category: string;
}

export default function ProductCategoryRow({ category }: ProductCategoryProps) {
  return (
    <tr>
      <th colSpan={2}>{category}</th>
    </tr>
  );
}
