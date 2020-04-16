import { Row as ADRow } from 'antd';
import React from 'react';


export const Row = ({ justify, children }) => (
  <ADRow justify={justify} align="middle" gutter={[12, 12]}>
    {children}
  </ADRow>
)

