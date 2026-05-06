import { useId } from "react";
import type { SearchBarProps } from "./constants/types";


export default function SearchBar({
  onFilterTextChange,
  onInStockOnlyChange,
}: SearchBarProps) {
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
