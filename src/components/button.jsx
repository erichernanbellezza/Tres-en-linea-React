import React from 'react';
import { useState } from 'react';

export default function Square() {
  let [value, setValue] = useState(null);

  function handleClick() {
    setValue("X");
    console.log("Click");
  }
    return (
        <button className="square" onClick={handleClick}> {value} </button>
    );
  }
