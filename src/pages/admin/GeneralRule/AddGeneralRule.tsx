import { Title } from '@components/common'
import { TimePicker } from '@components/inputs'
import { useAppDispatch } from '@hooks/useApp'
import { Button } from '@material-tailwind/react'
import { modal } from '@redux/slices/app.slice'
import React, { useState } from 'react'

const AddGeneralRule = ({ data }: { data: any }) => {
  const [payload, setPayload] = useState<any>({
    timeGetRoomStart: '',
    timeGetRoomEnd: '',
    timeLeftRoomStart: '',
    timeLeftRoomEnd: '',
    childrenAndBed: '',
    ageRetriction: '',
    pets: false,
    cashOnly: '',
    cancellation: ''
  })
  const handleValueChange = (newValue: any) => {
    console.log('newValue:', newValue)
    setPayload(newValue)
  }
  const dispatch = useAppDispatch()
  return (
    <div onClick={(e) => e.stopPropagation()} className='shadow-md w-[90%] bg-white h-screen relative'>
      <div className='absolute top-5 right-5'>
        <Button
          onClick={() => dispatch(modal({ isShowModal: false, contentModal: null }))}
          className='capitalize'
          size='sm'
          color='teal'
        >
          Thoát
        </Button>
      </div>
      <Title>
        Thiết lập quy định chung
        <span className='text-main-600 ml-3 text-3xl'>{'#' + data?.name}</span>
      </Title>
      <div className='p-4'>
        <div className='grid grid-cols-2 gap-4'>
          <div className='flex flex-col gap-2 border rounded-md p-2'>
            <span className='font-semibold'>1. Thời gian nhận phòng</span>
            <div className='flex gap-4'>
              <TimePicker label='Từ' />
              <TimePicker label='Đến' />
            </div>
          </div>
          <div className='flex flex-col gap-2 border rounded-md p-2'>
            <span className='font-semibold'>2. Thời gian trả phòng</span>
            <div className='flex gap-4'>
              <TimePicker label='Từ' />
              <TimePicker label='Đến' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddGeneralRule
