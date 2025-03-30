import CustomButton from '@/ui/CustomButton'
import React from 'react'

const MainPage = () => {
  return (
    <div className='text-red-600'>
      Main Page
      <CustomButton type={"button"} variant={"destructive"} className='text-black cursor-pointer'>Hello</CustomButton>
    </div>
  )
}

export default MainPage