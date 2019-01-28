import React from "react";
import "./TodoList.css";
import TodoItem from "./TodoItem";

class TodoList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: []
        }
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <label htmlFor="insert">input: </label>
                    <input
                        id="insert"
                        className='input'
                        value={this.state.inputValue}
                        onChange={this.handleInputChange.bind(this)}
                    />
                    <button  onClick={this.handleBtnClick.bind(this)}>submit</button>
                </div>
                <ul>
                    {this.state.list.map(
                        (item, index) => {
                            return (
                                <TodoItem 
                                    content={item} 
                                    index={index}
                                    deleteItem={this.handleItemDelete.bind(this)}
                                    />
                            )
                        }
                    )}
                </ul>
            </React.Fragment>
        )
    }

    handleInputChange(e){
        this.setState({
            inputValue: e.target.value
        })
    }

    handleBtnClick(){
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }

    handleItemDelete(index){
        // immutable
        const currentList = [...this.state.list];
        currentList.splice(index, 1);
        this.setState({
            list: currentList
        })
    }
}

export default TodoList;