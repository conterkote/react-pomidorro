import React from 'react';
import classes from './styles/TimeCard.module.css'

export type TTimes = 'morning' | 'midday' | 'afternoon' | 'evening'
export interface TimeSelectorProps {
  time: TTimes,
  addTask: (time: TTimes) => void
}

function TimeCard({ time, addTask } : TimeSelectorProps) {
  return (
    <div className={`${classes.Card} ${classes[time]} default-radius`}>
      <div className={classes.daytimeHead}>
          <div>
              {time}
          </div>
          <svg onClick={() => addTask(time)} className={classes.plusIcon} width="32" height="38" viewBox="0 0 32 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="18" r="16" fill="var(--text-color)"/>
              <path d="M14.53 24.77V20.21H10.03V16.79H14.53V12.23H18.07V16.79H22.57V20.21H18.07V24.77H14.53Z" fill="var(--back-color)"/>
          </svg>
      </div>
    </div>
  );
}

export default TimeCard;