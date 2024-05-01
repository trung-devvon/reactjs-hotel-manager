import { apiGetHotels } from '@api/hotel'
import { ModelDialog, Slider } from '@components/common'
import { useAppDispatch, useAppSelector } from '@hooks/useApp'
import React, { useEffect, useState } from 'react'

const Home = () => {
  const [bestHotels, setBestHotels] = useState(null)
  const { hotelTypes } = useAppSelector((state) => state.app)
  const fetchBestHotels = async () => {
    const response: any = await apiGetHotels({ order: [['star', 'DESC']] })
    if (response?.success) setBestHotels(response)
  }
  useEffect(() => {
    fetchBestHotels()
  }, [])
  return (
    <>
      <div className='flex flex-col mx-auto w-main'>
        <Slider title='Tìm theo loại chỗ nghỉ'>
          {hotelTypes?.map((item) => (
            <div key={item.code} className='flex cursor-pointer flex-col gap-2'>
              <img src={item.image} alt='logo' className='w-full object-cover rounded-lg h-[200px]' />
              <span className='flex flex-col'>
                <span className='font-semibold text-base'>{item.name}</span>
                <span className='text-xs'>{item.hotelData?.length + ' chỗ nghỉ'}</span>
              </span>
            </div>
          ))}
        </Slider>
      </div>
    </>
  )
}

export default Home
