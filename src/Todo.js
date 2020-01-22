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
                <div>
                <form onSubmit={this.handleUpdate}>
                <input type="text" value={this.state.task} name="task" onChange={this.handleChange}/>
                <button>Save</button>
                </form>
                </div>
            )
        }
        else {
            result = (
                <div>
                <button onClick={this.toogleForm}>Edit</button>
                <button onClick={this.handleRemove}>X</button>
                <li className={this.props.completed ? "completed" : ""} onClick={this.handleToggle}>{this.props.task}</li>
                </div>
            )
        }

        return result;
    }
}
export default Todo;