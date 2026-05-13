import React from 'react'

type MenuProps = {
    image: string
    name: string
}

const MenuButton = ({image, name}:MenuProps) => {
  return (
    <button type='button' className=''>
        <img src={image} alt={name} />
        <span>{name}</span>
    </button>
  )
}

export default MenuButton