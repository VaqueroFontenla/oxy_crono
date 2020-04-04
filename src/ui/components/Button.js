import { Button as ADButton } from 'antd'
import React from 'react'

export const Button = ({ children, type, size, onClick }) => {
  return (
    <ADButton
      type={type}
      onClick={onClick}
      size={size}>
      {children}
    </ADButton>
  )
}
