import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
import { MdAutoDelete } from "react-icons/md";
import { CiCircleCheck } from "react-icons/ci";

function App() {

  const [isCompleteScreen,setIsCompleateScreen] = useState(false);
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
          <button className={`secondaryBtn ${isCompleteScreen===false && 'active'}`} onClick={()=>setIsCompleateScreen(false)}>Todo</button>
          <button className={`secondaryBtn ${isCompleteScreen===true && 'active'}`} onClick={()=>setIsCompleateScreen(true)}>Completed</button>
        </div>
        <div className='todo-list'>
          <div className='todo-list-item'>
            <h1>task 1</h1>
            <p>description task 1</p>
          </div>

          <div>
            <MdAutoDelete className='icon'/>
          <CiCircleCheck className='check-icon'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
