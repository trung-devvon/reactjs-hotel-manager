import { apiGetHotels } from '@api/hotel'
import { ModelDialog } from '@components/common'
import { useAppDispatch, useAppSelector } from '@hooks/useApp'
import React, { useEffect, useState } from 'react'

const Home = () => {
  const [bestHotels, setBestHotels] = useState(null)
  const fetchBestHotels = async () => {
    const response: any = await apiGetHotels({ order: [['star', 'DESC']]})
    if (response?.success) setBestHotels(response)
    console.log(response)
  }
  useEffect(() => {
    fetchBestHotels()
  }, [])
  return (
    <>
      <div>home</div>
    </>
  )
}

export default Home
