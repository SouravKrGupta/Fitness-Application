import React from 'react';
import './styles.css';
import Empty from '../../../../assets/13525-empty.gif'
const EmptyList = () => (
  <div className='emptyList-wrap'>
    <img src={Empty} alt='empty' />
  </div>
);

export default EmptyList;
