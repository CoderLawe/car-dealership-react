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
        <div className="grid lg:grid-cols-3 gap-x-[28px] gap-y-[44.01px] mt-[30px]">
            <CarCardMain type="sedan" price="20,000,000" title="2003 BMW 745i" transmission="Manual" fuel="Petrol" image="https://media.carsandbids.com/cdn-cgi/image/width=712,height=468,quality=70/20309e251cb7341d1fb94cb5d4546882260d2202/photos/9a4RoxD8-W1q8Ccxvvz-(edit).jpg?t=168271134231" mileage="25,000"/>
            <CarCardMain type="SUV" price="15,000,000" title="Jeep Liberty 2005 Renegade" transmission="Automatic" fuel="Petrol" mileage="161,800" image="https://cdn.discordapp.com/attachments/817048198022430761/1105767736648421426/IMG_20230429_064010_723.jpg"/>
            <CarCardMain type="SUV" price="15,000,000" title="2002 Toyota 4Runner SR5 4x4" transmission="Manual" fuel="Petrol" mileage="161,800" image="https://media.carsandbids.com/cdn-cgi/image/width=712,height=468,quality=70/438ad923cef6d8239e95d61e7d6849486bae11d9/photos/36Y0lpRn-37PL0UNo4H-(edit).jpg?t=168236584346"/>


            <CarCardMain type="SUV" price="15,000,000" title="Jeep Liberty 2005 Renegade" transmission="Automatic" fuel="Petrol" mileage="161,800" image="https://cdn.discordapp.com/attachments/817048198022430761/1105767736648421426/IMG_20230429_064010_723.jpg"/>
            <CarCardMain type="sedan" price="20,000,000" title="2003 BMW 745i" transmission="Manual" fuel="Petrol" image="https://media.carsandbids.com/cdn-cgi/image/width=712,height=468,quality=70/20309e251cb7341d1fb94cb5d4546882260d2202/photos/9a4RoxD8-W1q8Ccxvvz-(edit).jpg?t=168271134231" mileage="25,000"/>
            <CarCardMain type="SUV" price="15,000,000" title="2002 Toyota 4Runner SR5 4x4" transmission="Manual" fuel="Petrol" mileage="161,800" image="https://media.carsandbids.com/cdn-cgi/image/width=712,height=468,quality=70/438ad923cef6d8239e95d61e7d6849486bae11d9/photos/36Y0lpRn-37PL0UNo4H-(edit).jpg?t=168236584346"/>


        </div>
    </div>
  )
}

export default CarCardsMain