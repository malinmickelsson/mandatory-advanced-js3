import React from 'react';

function TodoItem() {
    return ( //kom ihåg att du måste returna innehållet, så att komponenten vet vad den ska exportera
    	<div className="App-body-TodoItem"> 
            
            <input type="checkbox" value="option1" /*checked={true}*/ />
            <label>Placeholder text here</label>

        </div>
    )
};

export default TodoItem;