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
    }

    addToDo = (todo) => {
        this.setState({
            toDoLists: [...this.state.toDoLists, todo]
        });
        toast.success("Wow so easy !");
    }

    render() {
        let { toDoLists } = this.state;
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
                                        <span>{index + 1}. {item.activity}</span>
                                        <div className='todo-child-btn'>
                                            <button className='todo-child-btn-edit'>Edit</button>
                                            <button className='todo-child-btn-delete'>Delete</button>
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