import StoresList from "../../components/Stores/StoresList";
import Button from "../../components/ui/Button";

const Stores = () => {
  return (
    <main className="mx-auto min-h-screen w-full max-w-md bg-white px-8 pt-16 pb-36">
      <Button
        variant="ghostIcon"
        type="button"
        aria-label="뒤로가기"
        className="mb-14"
      >
        <img className="size-6" src="/back.svg" alt="" />
      </Button>
      <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900">
        샐러드
      </h1>
      <StoresList />
    </main>
  );
};

export default Stores;
