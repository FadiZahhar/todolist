import React, {Component} from 'react';

class Todo extends Component {
    constructor(props){
        super(props);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }
    handleEdit(evt){

    }
    handleRemove(evt){
        this.props.removeTodo(this.props.id);
    }
    render() {
        return(
            <div>
                <button onClick={this.handleEdit}>Edit</button>
                <button onClick={this.handleRemove}>X</button>
                <li>{this.props.task}</li>
            </div>
        )
    }
}
export default Todo;