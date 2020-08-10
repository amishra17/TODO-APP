import React,{ useState } from 'react';

const AddTodo = props => {
    const [task, setTask] = useState('');
    const [priority, setPriority] = useState('');
    const [formEditable, setFormEditable] = useState(false);

    const handleChange = event => {
        const { name, value } = event.target;
        switch(name) {
            case 'task':
                setTask(value);
                break;
            case 'priority':
                setPriority(value);
                break;
        }
    }

    const addTodo = event => {
        event.preventDefault();
        props.addTodo({task, priority});
        setFormEditable(false)
        setTask('');
        setPriority('');
    }

    const handleAddTaskClick = () => {
        setFormEditable(true);
    }

    return (
        <div className="add-todo mb-3 mt-3">
            { formEditable ? 
                <form className="form-inline" onSubmit={addTodo}>
                    <label className="sr-only" htmlFor="Task">Task</label>
                    <input type="text" className="form-control mb-2 mr-sm-2" id="task" name="task" value={task} placeholder={'Task...'} onChange={handleChange} required/>
                    <label className="sr-only" htmlFor="priority">Priority</label>
                    <select className="form-control mb-2 mr-sm-2" id="priority" name="priority" value={priority} onChange={handleChange} placeholder={'Priority...'} required>
                        <option value='' disabled>Select Priority...</option>
                        <option value='1'>High</option>
                        <option value='2'>Medium</option>
                        <option value='3'>Low</option>
                    </select>
                    <button type="submit" className="btn btn-primary mb-2">Add Todo</button>
                </form> :
                <div className="card text-white bg-secondary">
                    <div className="card-body add-todo-task" onClick={handleAddTaskClick}>
                        <span><i className="fa fa-plus"></i> Add new task </span>
                    </div>
                </div>
            }
        </div>
    )
}

export default AddTodo;