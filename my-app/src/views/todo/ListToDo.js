import React from 'react';
import '../../styles/todo.scss';
import AddToDo from './AddToDo';
import { toast } from 'react-toastify';


class ListToDo extends React.Component {

    state = {
        toDoLists: [
            { id: "td1", activity: "do exercise" },
            { id: "td2", activity: "cooking" },
            { id: "td3", activity: "studying" }
        ],
        editToDo: "",
    };

    addToDo = (todo) => {
        this.setState({
            toDoLists: [...this.state.toDoLists, todo]
        });
        toast.success("Wow so easy !");
    }

    handleDeleteBtn = (todo) => {
        let currentList = this.state.toDoLists;
        currentList = currentList.filter(item => item.id !== todo.id);
        this.setState({
            toDoLists: currentList,
        });
        toast.success("Delete succeed!");
    }

    handleEdit = (item) => {
        let { toDoLists, editToDo } = this.state;
        let emptyObj = Object.keys(editToDo).length === 0;
        if (emptyObj === false && editToDo.id === item.id) {
            let newToDoLists = [...toDoLists];
            let objIndex = toDoLists.findIndex(item => item.id === editToDo.id);
            newToDoLists[objIndex].activity = editToDo.activity;
            this.setState({
                toDoLists: newToDoLists,
            });
            toast.success("Edit success!");
            this.setState({
                editToDo: "",
            });
            return;
        }
        this.setState({
            editToDo: item,
        });
    }

    handleOnChange = (event) => {
        let newEditToDo = this.state.editToDo;
        newEditToDo.activity = event.target.value;
        this.setState({
            editToDo: newEditToDo,
        });
    }

    render() {
        let { toDoLists, editToDo } = this.state;
        let emptyObj = Object.keys(editToDo).length === 0;

        return (
            <>
                <div className="list-todo-container">
                    <h2 className="list-todo-title">List to do: </h2>
                    <AddToDo addToDo={this.addToDo} />
                    <div className="list-todo-content">
                        {toDoLists && toDoLists.length > 0 &&
                            toDoLists.map((item, index) => {
                                return (
                                    <div className='todo-child' key={item.id}>
                                        {(emptyObj === false && editToDo.id === item.id) ?
                                            <span>{index + 1}.
                                                <input type="text" value={editToDo.activity} onChange={(event) => this.handleOnChange(event)} /></span>
                                            : <span>{index + 1}. {item.activity}</span>
                                        }
                                        <div className='todo-child-btn'>
                                            {(emptyObj === false && editToDo.id === item.id) ?
                                                <button
                                                    className='todo-child-btn-edit'
                                                    onClick={() => this.handleEdit(item)}
                                                >Save</button>
                                                :
                                                <button
                                                    className='todo-child-btn-edit'
                                                    onClick={() => this.handleEdit(item)}
                                                >Edit</button>
                                            }

                                            <button
                                                className='todo-child-btn-delete'
                                                onClick={() => this.handleDeleteBtn(item)}
                                            >Delete</button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </>
        )
    }

}

export default ListToDo;