import React, { Component } from 'react';
import './TodoItem.css';
import checkImg from '../img/check.svg';
import checkCompleteImg from '../img/check-complete.svg';

class TodoItem extends Component {

    render() {
        const  { item, changeStyleText,index }  = this.props;
        let url = checkImg;
        if (item.isComplete) {
            url = checkCompleteImg;
        }

        return(
            <div 
                 
                className={item.isComplete ? "TodoItem TodoItem-complete" : 'TodoItem'}        
            >
                <img src = {url} width = {32} 
                    onClick={()=>changeStyleText(index)}
                />
                <p>{this.props.item.title}</p>
               
            </div>
            
        );
    }
}

export default TodoItem;