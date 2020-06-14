import React, { Component, } from 'react';
import TodoItem from './components/ToDoItem';
import './App.css';
import tick from './img/tick.svg';
// import TrafficLight from './components/TrafficLight';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: '',
      todoItems : [
        { title: 'Buy Bim Bim', isComplete: false},
        { title: 'Buy Meat', isComplete: false},
        { title: 'Buy Condom', isComplete: false}
      ]
    }
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  // onItemClicked(key) {
  //   const newList = this.state.todoItems;

  //   newList[key].isComplete = !newList[key].isComplete; 
  //   this.setState({todoItems:newList})

  // }

  onItemClicked(item) {

    return (event) => {
      const isComplete = item.isComplete;
      const { todoItems } = this.state;
      const index = todoItems.indexOf(item);

      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          {
            ...item,
            isComplete: !isComplete,
          },
          ...todoItems.slice(index + 1)
        ]
      });
    }

  }
 
  onKeyUp(event) {

    if(event.keyCode === 13){ //enter key
      let text = event.target.value;
      if(!text) {
          return;
        }

        text = text.trim();
        if(!text) {
          return; 
        } 

        this.setState({
          newItem: '',
          todoItems: [
            {title: text, isComplete: false},
            ...this.state.todoItems
          ]
        })
    } 

  }
  
  onChange(event) {
    this.setState({
      newItem: event.target.value
    });
  }

  render() {
    const {todoItems, newItem} = this.state;

    if(todoItems.length > 0 ){
      return (
        <div className="App">
          <div className="Header">
            <img src={tick}  width={32} height={32} />
            <input 
              type="text" 
              placeholder="Add new item" 
              onKeyUp={this.onKeyUp}
              value = {newItem}
              onChange={this.onChange}
            />
          </div>
          {
            todoItems.map((item, index) =>
             <TodoItem 
                key={index} 
                index={index} 
                item={item} 
                changeStyleText={this.onItemClicked(item)}
              />
             )
          }
        </div>
      );
    }else {
      return (
        <div className="App">Nothing here.</div>
      );
    }
  }
}
 
export default App;