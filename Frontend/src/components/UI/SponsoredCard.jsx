import React from 'react'

export const SponsoredCard = ({image}) => {
  return (
    <div className="w-full h-full flex justify-center items-center bg-white rounded-md shadow-md border border-gray-200">
      <img src={image} alt="Sponsored" draggable={false} className="w-full h-full object-cover rounded-md" />
    </div>
  )
}
