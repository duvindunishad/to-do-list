import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My ToDo</h1>
      <div className='todo-wrapper'>
        <div className='todo-input'>
          <div className='todo-input-item'>
            <label>Title</label>
            <input type='text' placeholder='what is the task title?'/>
          </div>
          <div className='todo-input-item'>
            <label>Description</label>
            <input type='text' placeholder='what is the task description?'/>
          </div>
          <div className='todo-input-item'>
            <button type='button' className='primaryBtn'>Add</button>
          </div>
        </div>

        <div className='btn-area'>
          <button>Todo</button>
          <button>Completed</button>
        </div>
        <div className='todo-list'>
          <div className='todo-list-item'>
            <h1>task 1</h1>
            <p>description task 1</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
