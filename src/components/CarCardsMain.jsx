import React from 'react'
import CarCardMain from './CarCardMain'
import Filters from './Filters'

function CarCardsMain() {
  return (
    <div className="block  mx-[60px] mt-[20px]">
        {/* Title and filters */}
        <div className="block space-y-[8px]">
            <p className="text-gray-900 text-[24px] font-[700]">Arrivals</p>
            <Filters />
        </div>
        <div className="flex space-x-[8px] mt-[30px]">
            <CarCardMain />
        </div>
    </div>
  )
}

export default CarCardsMain