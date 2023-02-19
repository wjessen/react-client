import React, { useState } from 'react';
// import './App.css';


function TodoItem(props: any) {

    const [isEditable, setIsEditable] = useState(props.isEditable);
    const [text, setText] = useState(props.text);

    const handleDoubleClick = (event: any) => {
        if(event.detail !== 2){
          return;
        }
        setIsEditable(!isEditable);
        console.log("Double Clicked");
    }

    const handleSingleClick = (event: any) => {
        if(event.detail !== 1){
            return;
        }
        console.log("Single Clicked")
    }

    const handleClick = (event: any) => {
        handleSingleClick(event);
        handleDoubleClick(event);

    }
    const handleChange = (event: any) => {
        setText(event.target.value);
        props.textHandler(event.target.value, props.index);
    }
    if (isEditable) {
        return(
            <div>
                <input onClick={handleClick}  onChange={handleChange} type="text" value={text}></input>
            </div>
        )
    }
    return(
        <div>
            <p onClick={handleClick} onChange={handleChange}>{text}</p>
        </div>
    )

}

export default TodoItem;
