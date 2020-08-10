import React, { useRef, useState } from 'react';

const getPriority = priority => {
    switch(priority) {
        case '1':
            return { text: 'High', color: '#ff3800'}
        case '2':
            return { text: 'Medium', color: '#FFC200'}
        case '3':
            return { text: 'Low', color: '#00ff13' }
    }
}

const Todo = props => {
    const [editable, setEditable] = useState(false);
    const inputRef = useRef();
    const checkboxRef = useRef();
    const { id, task, priority, completed, checked } = props.todo;
    const { text, color } = getPriority(priority);

    const editTodo = () => {
        setEditable(true)
    }

    const saveTodoUpdate = todo => {
        props.editTodo(todo, inputRef.current.value)
        setEditable(false);  
    }

    const removeTodo = todo => {
        props.removeTodo(todo.id)
    }

    const todoTaskStyle = {
        textDecoration: completed ? 'line-through' : 'none'
    }

    return (
        <div className="todo mb-1">
           <div className="card">
               <div className="card-body">
                        { editable ? 
                        <div className="todo-edit">
                            <input type="text" className="form-control mb-2 mr-sm-2" defaultValue={task} ref={inputRef}/>
                            <i className="fa fa-save" aria-hidden="true" onClick={() => saveTodoUpdate(props.todo)}></i>
                        </div>
                        :
                        <div className="todo-task">
                            <span className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" onChange={() => props.handleTodoSelect(id)} checked={checked}/>
                                <label className="custom-control-label" htmlFor={task}></label>
                                <span style={todoTaskStyle} onClick={() => props.markCompleted(id)}>{task}</span>
                            </span>
                            <span>
                                {!completed  && <i className="fa fa-edit mr-2" onClick={editTodo}></i> }
                                <i className="fa fa-times mr-2" onClick={() => removeTodo(props.todo)}></i>
                            </span>
                        </div> }
                        <div className="todo-details">
                            <div  className="todo-priority mr-2" style={{background: color}}></div>
                            <div>{completed ? 'Completed' : 'Active'}</div>
                        </div>
               </div>
           </div>
        </div>
    )
}

export default Todo;