import React, { useState } from 'react'
import Datepicker from 'react-tailwindcss-datepicker'

const Test = () => {
  const [value, setValue] = useState<any>({
    startDate: null,
    endDate: null
  })

  const handleValueChange = (newValue: any) => {
    console.log('newValue:', newValue)
    setValue(newValue)
  }

  return (
    <div>
      <Datepicker value={value} onChange={handleValueChange} showShortcuts={true} />
    </div>
  )
}

export default Test
