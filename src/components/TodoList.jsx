import React, { useState } from 'react';
import Todo from './Todo';
import PropTypes from 'prop-types';

const TodoList = props => {
    const [selected, setSelected] = useState([]);

    const handleTodoSelect = id => {
        setSelected([...selected, id])
    }

    const removeSelected = () => {
        props.removeSelected(selected);
        setSelected([])
    }

    const markCompleted = () => {
        props.markCompleted(selected);
        setSelected([])
    }

    const modifiedList = selected.length > 0 ? props.todoList.map(
        todo => {
            if(selected.includes(todo.id)) {
                return {
                    ...todo,
                    checked: true
                }
            }
            return todo
        }
    ) : props.todoList
    return(
        <>
            {selected.length > 0 && <div className='action-btn'>
                <button className="btn btn-links" onClick={() => removeSelected(selected)}>Remove</button>
                <button className="btn btn-links" onClick={() => markCompleted(selected)}>Mark as completed</button>
            </div>}
            <div className="todo-list">
                {
                    modifiedList.map(todo => (
                        <Todo key={todo.id} 
                            todo={todo} 
                            handleTodoSelect={handleTodoSelect}
                            { ...props }
                        />
                    ))
                }
            </div>
        </>
    )
}

TodoList.propTypes = {
    todoList: PropTypes.arrayOf(Object).isRequired
}

export default TodoList