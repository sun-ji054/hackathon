import React from "react";

function InputBox({inputType, placeholder, value, onchange}) {


  return(
    /**
     * @todo styled-components input 만들어서 넣기
     */
    <input 
      type={inputType}
      placeholder={placeholder} 
      value={value}
      onChange={onchange}>

    </input>
  );
}

export default InputBox;