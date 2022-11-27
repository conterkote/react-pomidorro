import React from 'react';
import TimeCard, {TimeSelectorProps} from "./components/TimeCard";



function TimeSelector() {
  return (
    <div className="TimeSelector">
        <TimeCard time={'morning'}/>
        <TimeCard time={'midday'}/>
        <TimeCard time={'afternoon'}/>
        <TimeCard time={'evening'}/>
    </div>
  );
}

export default TimeSelector;