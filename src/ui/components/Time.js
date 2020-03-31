import React, { useState } from 'react';
import { TimePicker } from 'antd';
import moment from 'moment';

export const Time = () => {
  const [currentDate, setCurrentDate] = useState('');
  return (
    <div className='time-picker'>
      <TimePicker
        format={'HH:mm'}
        defaultValue={() => setCurrentDate(moment().format('HH:mm'))}
        placeholder='Seleccione la hora'
      />
    </div>
  );
};
