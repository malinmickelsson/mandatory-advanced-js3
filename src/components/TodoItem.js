import React from 'react';

function TodoItem() {
    return ( //kom ihåg att du måste returna innehållet, så att komponenten vet vad den ska exportera
    	<div className="App-body-TodoItem"> 
            
            <input type="checkbox" value="option1" /*checked={true}*/ />
            <label>item</label>
            <button className="TodoItem-button">Delete</button>

        </div>
    )
};

export default TodoItem;