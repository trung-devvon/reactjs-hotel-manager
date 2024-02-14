import instance from '../instance'
import { FieldValues, SubmitHandler } from 'react-hook-form'

export const apiCreateNewHotel: SubmitHandler<FieldValues> = (data) =>
  instance({
    method: 'POST',
    url: 'hotel/create',
    data: data
  })
export const apiGetHotels: SubmitHandler<FieldValues> = (params) =>
  instance({
    method: 'GET',
    url: 'hotel/',
    params
  })
