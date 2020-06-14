import React, { Component } from 'react';

import './App.css';
import ListItems from './components/ListItems';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      items:[],
      currentItem:{
        text:'',
        key:''
      }
    }
  }

  handleInput = (e) => {
    this.setState({
      currentItem:{
        text: e.target.value,
        key: Date.now()
      }
    })
  }

  addItem = (e) => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.text !== '') {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items : newItems,
        currentItem : {
          text: '',
          key: ''
        }
      })
    }
    
  }

  deleteItem = (key) => {
    var { items } = this.state;
    const newItems = items.filter(item => item.key !== key)
    this.setState({
      items: newItems
    })
  }

  setUpdate = (text, key) => {
    const {items} = this.state;
    items.map(item => {
      if(item.key === key){
        item.text = text;
      }
    })
    this.setState({
      items: items
    })
  }

  handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.addItem(e);
    }
  }
    
  render() {

    return (
      <div className="App">
        <header>
          <form id="to-do-form" onSubmit={this.addItem}>
            <input type="text" placeholder="Enter text"
              value={this.state.currentItem.text}
              onChange={this.handleInput} 
              onKeyDown={this.handleKeyDown}
            />
            <button type="submit">Add</button>
          </form>
          <ListItems 
            items={this.state.items} 
            deleteItem={this.deleteItem}
            setUpdate={this.setUpdate}
          ></ListItems>

        </header>
      </div>
    )

  }

  
}
 
export default App;
