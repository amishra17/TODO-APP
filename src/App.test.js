import React from 'react';
import Enzyme,{shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
Enzyme.configure({ adapter: new Adapter() })

describe('App', () => {
  test('should render AddTodo', () => {
    const container = shallow(<App />);
    expect(container.find(AddTodo)).toHaveLength(1)
  })
  test('should render TodoList', () => {
    const container = shallow(<App />);
    expect(container.find(TodoList)).toHaveLength(1)
  })
  test('should be initialized with empty todoList', () => {
    const container = shallow(<App />);
    expect(container.find(TodoList).prop('todoList')).toEqual([]);
  })
})
