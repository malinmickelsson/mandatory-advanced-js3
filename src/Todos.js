import React, { Component } from 'react';

class Todos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: '',
      list: []
    };
  }

  // updateInput(key, value) {
  //   this.setState({
  //     [key]: value
  //   });
  // }

  addItem() {
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };

    const list = [...this.state.list];

    list.push(newItem);

    this.setState({
      list,
      newItem: ''
    });
    console.log('new item added');
  }

  handleKeyDown = e => {
    if (e.key === 'Enter') {
      this.addItem();
    }
  };

  deleteItem(id) {
    const list = [...this.state.list];

    const updatedList = list.filter(item => item.id !== id)

    this.setState({list: updatedList});
    console.log('item deleted');
  }


  render() {
    return (
      <div>
        <div>
          Add an Item...
          <br />
          <input
            type='text'
            placeholder='Type item here...'
            value={this.state.newItem}
            onChange={e => this.updateInput('newItem', e.target.value)}
            onKeyDown={this.handleKeyDown}
          />
          <button onClick={() => this.addItem()}>Add item</button>
          <br />
          <ul>
            {this.state.list.map(item => {
              return (
                <li key={item.id}>
                  {item.value}
                  <button onClick={() => this.deleteItem(item.id)}
                  >Delete
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Todos;
