import { useId } from "react";

export default function SearchBar({
  onFilterTextChange,
  onInStockOnlyChange,
}: {
  onFilterTextChange: (text: string) => void;
  onInStockOnlyChange: (inStockOnly: boolean) => void;
}) {
  const stockCheckboxId = useId();

  const handleFilterTextChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    onFilterTextChange(event.target.value);
  };

  const handleInStockOnlyChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    onInStockOnlyChange(event.target.checked);
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        onChange={handleFilterTextChange}
      />
      <br />
      <label htmlFor={stockCheckboxId}>
        <input
          type="checkbox"
          id={stockCheckboxId}
          onChange={handleInStockOnlyChange}
        />{" "}
        Only show products in stock
      </label>
    </form>
  );
}
