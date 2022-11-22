import React from 'react';
import TimeCard from "./components/TimeCard";

function TimeSelector() {
  return (
    <div className="TimeSelector">
      <TimeCard time={'Morning'}/>
    </div>
  );
}

export default TimeSelector;