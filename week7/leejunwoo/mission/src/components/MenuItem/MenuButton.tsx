type MenuProps = {
    image: string
    name: string
}

const MenuButton = ({image, name}:MenuProps) => {
  return (
    <button type='button' 
    className="flex flex-col w-full h-[80px] items-center justify-center !p-0 gap-[6px] items-center justify-center rounded-[8px]">
        <img src={image} alt={name} className="w-[28px] h-[28px]"/>
        <span className="text-[#333d4b] text-[14px]">{name}</span>
    </button>
  )
}

export default MenuButton