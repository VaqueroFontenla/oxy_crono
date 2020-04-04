import React from 'react'
import { Col as ADCol } from 'antd'

export const Col = ({ children, span, flex }) => (
  <ADCol xl={span} lg={8} md={12} xs={24} flex={flex}>
    {children}
  </ADCol>
)
