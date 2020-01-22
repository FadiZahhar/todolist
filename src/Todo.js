import React, {Component} from 'react';
import uuid from 'uuid';
import './Todo.css';

class Todo extends Component {
    constructor(props){
        super(props);
        this.state = {
        isEditing: false,
        task: this.props.task
        };
        this.handleRemove = this.handleRemove.bind(this);
        this.toogleForm = this.toogleForm.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }
    handleRemove(evt){
        this.props.removeTodo(this.props.id);
    }
    toogleForm(){
        this.setState({isEditing: !this.state.isEditing });
    }
    handleUpdate(evt) {
        evt.preventDefault();
        // tabke new task data and pass up to parent
        this.props.updateTodo(this.props.id, this.state.task);
        this.setState({isEditing: false });
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }
    handleSubmit(evt) {
        evt.preventDefault();
        this.props.createTodo({...this.state,id:uuid()});
        this.setState({task: "" });
    }
    handleToggle(evt){
        this.props.toggleTodo(this.props.id);
    }
    render() {
        let result;
        if(this.state.isEditing) {
            result = (
                <div className="Todo">
                <form className="Todo-edit-form" onSubmit={this.handleUpdate}>
                <input type="text" value={this.state.task} name="task" onChange={this.handleChange}/>
                <button>Save</button>
                </form>
                </div>
            )
        }
        else {
            result = (
                <div className="Todo">
                
                <li className={this.props.completed ? "Todo-task completed" : "Todo-task"} onClick={this.handleToggle}>{this.props.task}</li>
                
                <div className="Todo-Buttons">
                    <button onClick={this.toogleForm}><i class="fas fa-edit" /></button>
                    <button onClick={this.handleRemove}><i class="fas fa-trash" /></button>
                </div>
                </div>
            )
        }

        return result;
    }
}
export default Todo;