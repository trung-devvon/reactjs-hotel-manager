import { apiCreateNewHotel } from '@api/hotel'
import { PageLoading, Title, ValidText } from '@components/common'
import { Facilities } from '@components/facilities'
import { InputMultipleFiles } from '@components/inputs'
import { yupResolver } from '@hookform/resolvers/yup'
import { useAppDispatch, useAppSelector } from '@hooks/useApp'
import { Button, Input, Option, Select } from '@material-tailwind/react'
import { toggleLoading } from '@redux/slices/app.slice'
import { setDefaultFacilities } from '@redux/slices/hotel.slice'
import { hotelTypes } from '@utils/constans'
import { HotelSchema, hotelSchema } from '@utils/schemas'
import React, { useEffect, useRef, useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

interface IValidateForm {
  destinations: string | null
  facilities: string | null
  images: boolean
  hotelType: string | null
}
const CreateHotel = () => {
  const {
    register,
    reset,
    formState: { errors, isDirty },
    handleSubmit
  } = useForm<HotelSchema>({
    resolver: yupResolver(hotelSchema)
  })
  const scrollRef = useRef<HTMLDivElement>(null)
  const [images, setImage] = useState<string[]>([])
  const [des, setDes] = useState<any>(null)
  const [invalid, setInvalid] = useState<IValidateForm>({
    destinations: null,
    facilities: null,
    images: false,
    hotelType: null
  })
  const dispatch = useAppDispatch()
  useEffect(() => {
    if (!images.length && isDirty) return setInvalid((prev) => ({ ...prev, images: true }))
    else setInvalid((prev) => ({ ...prev, images: false }))
  }, [images, isDirty])
  const { destinations, isLoading } = useAppSelector((state) => state.app)
  const { facilities } = useAppSelector((state) => state.hotel)
  const handleChangeDestinations = (value: any) => {
    setDes(value)
    setInvalid((prev) => ({ ...prev, destinations: null }))
  }
  useEffect(() => {
    if (facilities.length === 0 || !facilities) {
      setInvalid((prev) => ({ ...prev, facilities: 'Vui lòng chọn đầy đủ các tiện nghi mà khách sạn có' }))
    } else {
      setInvalid((prev) => ({ ...prev, facilities: null }))
    }
  }, [facilities])
  const whenSubmit: SubmitHandler<FieldValues> = async (data) => {
    if (!des) {
      setInvalid((prev) => ({ ...prev, destinations: 'Vui lòng chọn địa điểm tham quan [!]' }))
      return
    }
    if (invalid.images || invalid.facilities || invalid.destinations) return

    const payload = { ...data, name: data.name, destinationCode: des, images, facilities }
    console.log(payload)
    dispatch(toggleLoading(true))
    const response: any = await apiCreateNewHotel(payload)
    dispatch(toggleLoading(false))
    if (response.success) {
      toast.success(response.message)
      reset()
      setImage([])
      setDes('')
      dispatch(setDefaultFacilities())
      if (scrollRef.current) {
        scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    } else toast.error(response.message)
  }
  return (
    <>
      {isLoading && <PageLoading />}
      <div ref={scrollRef}>
        <Title>Tạo mới bài đăng về khách sạn / chỗ ở</Title>
        <form onSubmit={handleSubmit(whenSubmit)} className='p-5 flex flex-col'>
          <div className='grid grid-cols-10 gap-6'>
            <div className='col-span-7 w-full'>
              <div className='w-full'>
                <Input color='teal' crossOrigin={'true'} label='Nhập tiêu đề bài đăng' {...register('name')} />
                <ValidText>{errors.name?.message}</ValidText>
              </div>
            </div>
            <div className='col-span-3 w-full'>
              <Select
                color='teal'
                label='Chọn địa điểm tham quan'
                selected={(element) =>
                  element &&
                  React.cloneElement(element, {
                    disabled: true,
                    className: 'flex items-center opacity-100 px-0 gap-2 pointer-events-none'
                  })
                }
                value={des}
                onChange={handleChangeDestinations}
              >
                {destinations?.map(({ name, code }: any) => (
                  <Option key={code} value={code}>
                    {name}
                  </Option>
                ))}
              </Select>
              <ValidText>{invalid.destinations}</ValidText>
            </div>
          </div>
          <div className='w-full my-3'>
            <InputMultipleFiles
              getFile={setImage}
              id='hotelImages'
              name='hotelImages'
              label='Chọn ảnh chi tiết khách sạn, chỗ ở'
              invalid={invalid.images}
              preview={images}
            />
          </div>
          <Facilities id='facilities' label='Chọn các loại tiện nghi' />
          <span className='mb-10'>
            <ValidText>{invalid.facilities}</ValidText>
          </span>
          <div className="grid grid-cols-10 gap-6">
            <div className="col-span-7">
              <div className="w-full">
                <Select label='Chọn loại chỗ nghỉ' color='teal'>
                  {hotelTypes.map(type => (
                    <Option key={type} value={type}>
                      {type}
                    </Option>
                  ))}
                </Select>
              </div>
            </div>
            <div className="col-span-3">
              <div className="w-full"></div>
            </div>
          </div>
          <Button color='teal' type='submit'>
            Tạo mới khách sạn
          </Button>
        </form>
      </div>
    </>
  )
}

export default CreateHotel
