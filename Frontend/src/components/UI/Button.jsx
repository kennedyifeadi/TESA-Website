import React from 'react'

export const Button = ({title, icon, color}) => {
  return (
    <div className={`bg-[${color}] flex justify-between`}>
      <span>{title}</span>
      <img src={icon} alt="" />
    </div>
  )
}
