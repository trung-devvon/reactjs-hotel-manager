import React, { memo } from 'react'
import Datepicker, { ColorKeys, DateValueType } from 'react-tailwindcss-datepicker'

interface IDatePicker {
  date: DateValueType
  setDate: any
  primaryColor: ColorKeys
  inputClassName?: string
  placeholder?: string
}
const DatePickerCustom = ({ date, setDate, primaryColor, inputClassName, placeholder }: IDatePicker) => {
  return (
    <div className='flex flex-col gap-2'>
      <Datepicker
        placeholder={placeholder}
        inputClassName={inputClassName}
        primaryColor={primaryColor}
        onChange={(value) => setDate(value)}
        value={date}
      />
    </div>
  )
}

export default memo(DatePickerCustom)
