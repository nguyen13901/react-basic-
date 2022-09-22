import React from 'react';
import { toast } from 'react-toastify';

class AddToDo extends React.Component {

    state = {
        currentToDo: "",
    }

    handleOnChange = (event) => {
        this.setState({
            currentToDo: event.target.value
        })
    }

    handleAddBtn = () => {
        if (!this.state.currentToDo) {
            toast.warning("Please input something !");
            return;
        }
        let todo = {
            id: "td" + Math.floor(Math.random() * 100),
            activity: this.state.currentToDo
        }
        this.setState({
            currentToDo: ""
        })
        this.props.addToDo(todo);
    }

    render() {
        return (
            <>
                <div className="list-todo-add">
                    <input type="text" onChange={(event) => this.handleOnChange(event)} value={this.state.currentToDo} />
                    <button onClick={() => this.handleAddBtn()}>Add</button>
                </div>
            </>
        )
    }
}

export default AddToDo;