import { Button } from '@/components/ui/button'
import { ButtonType } from '@/types/ButtonType'
import React, { FC } from 'react'

const CustomButton:FC<ButtonType> = ({children, variant, type, onChange, className}) => {
  return (
    <Button variant={variant} type={type} onChange={onChange} className={className}>{children}</Button>
  )
}

export default CustomButton