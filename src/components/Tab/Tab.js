import React from 'react';
import './Tab.css';

function Tab(props) {
  return ( 
    <div className="Tab">
      <p>{props.name}</p>
    </div> 
  );
}

export default Tab;
