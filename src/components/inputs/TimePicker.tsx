import React, { useEffect, useState } from 'react'

interface ITimePicker {
  label?: string
  getTime?: React.Dispatch<React.SetStateAction<any>>
  id?: string
  currentTime?: number
}
const TimePicker = ({ label, getTime, id, currentTime = 0 }: ITimePicker) => {
  const [time, setTime] = useState({ hour: '', min: '' })
  useEffect(() => {
    getTime && getTime(time)
  }, [])
  return (
    <div className='flex flex-col'>
      {label && <span className='font-medium'>{label}</span>}
      <div className='flex gap-3 items-center'>
        <select
          value={Math.floor(currentTime) || time.hour}
          onChange={(e) => setTime((prev) => ({ ...prev, hour: e.target.value }))}
          className='border py-2 rounded-md min-w-[80px]'
        >
          <option value='' disabled>
            Giờ
          </option>
          {Array.from(Array(24).keys()).map((el) => (
            <option key={el + 1000} value={el}>
              {el}
            </option>
          ))}
        </select>
        <div className='font-bold'>:</div>
        <div className='flex w-full max-w-[8rem]'>
          <select
            className='border min-w-[80px] py-2 rounded-md'
            value={time.min}
            onChange={(e) => setTime((prev) => ({ ...prev, min: e.target.value }))}
          >
            <option value='' disabled>
              Phút
            </option>
            {Array.from(Array(60).keys())
              .filter((num) => num % 15 === 0)
              .map((minute: any) => (
                <option key={minute + 1000} value={minute}>
                  {minute}
                </option>
              ))}
          </select>
        </div>
      </div>
    </div>
  )
}

export default TimePicker
