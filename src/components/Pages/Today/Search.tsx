import React from 'react';
import classes from './styles/Search.module.css'

function Search() {
  return (
    <div>
      <input className={classes.taskSearch}
             type="text"
             name="taskSearch"
             placeholder="Search..."/>
    </div>
  );
}

export default Search;