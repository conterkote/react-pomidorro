import React from 'react';
import classes from './styles/TimeCard.module.css'

export interface TimeSelectorProps {
  time: 'morning' | 'midday' | 'afternoon' | 'evening'
}

function TimeCard({ time } : TimeSelectorProps) {
  return (
    <div className={classes.Card}>

    </div>
  );
}

export default TimeCard;