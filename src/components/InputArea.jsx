import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input onChange={props.handleChangeRef} type="text" value={props.inputTextRef} />
      <button onClick={props.addItemRef}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;