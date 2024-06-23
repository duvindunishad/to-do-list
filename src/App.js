import logo from './logo.svg';
import React,{useEffect, useState} from 'react';
import './App.css';
import { MdDelete } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

function App() {

  const [isCompleteScreen, setIsCompleteScreen] = useState (false);
  const [allTodos, setTodos] = useState ([]);
  const [newTitle, setNewTitle] = useState ('');
  const [newDescription, setNewDescription] = useState ('');
  const [completedTodos, setCompletedTodos] = useState ([]);
  const [currentEdit,setCurrentEdit] = useState("");
  const [currentEditedItem,setCurrentEditedItem] = useState("");

  const handleAddTodo = ()=>{
    let newTodoItem ={
      title:newTitle,
      description:newDescription
    }
    let updateTodoArr = [...allTodos];
    updateTodoArr.push(newTodoItem);
    setTodos(updateTodoArr);
    localStorage.setItem('todolist',JSON.stringify(updateTodoArr));
  }

  // delete
  const handleDeleteTodo = (index)=>{
    let reduceTodo = [...allTodos];
    reduceTodo.splice(index);

    localStorage.setItem('todolist',JSON.stringify(reduceTodo));
    setTodos(reduceTodo);
  }
// complete
const handleComplete =(index)=>{
  let now = new Date();
  let dd = now.getDate();
  let mm = now.getMonth() + 1;
  let yy = now.getFullYear();
  let hh = now.getHours();
  let mn = now.getMinutes();
  let ss = now.getSeconds();
  let completedOn = dd + '-' +mm + '-' +yy + '-' +hh + ':' + mn+':'+ss;

  let filteredItem={
    ...allTodos[index],
    completedOn:completedOn
  }
  let updatedCompletedArr = [...completedTodos];
  updatedCompletedArr.push(filteredItem);
  setCompletedTodos(updatedCompletedArr);
  handleDeleteTodo(index);
}
  useEffect(()=>{
    let saveTodo = JSON.parse(localStorage.getItem('todolist'));
    if(saveTodo){
      setTodos(saveTodo);
    }
  },[])
  return (
    <div className="App">
      <h1>My ToDo</h1>
      <div className='todo-wrapper'>
        <div className='todo-input'>
          <div className='todo-input-item'>
            <label>Title</label>
            <input type='text'value={newTitle} onChange={(e)=>setNewTitle(e.target.value)} placeholder='what is the task title?'/>
          </div>
          <div className='todo-input-item'>
            <label>Description</label>
            <input type='text' value={newDescription} onChange={(e)=>setNewDescription(e.target.value)} placeholder='what is the task description?'/>
          </div>
          <div className='todo-input-item'>
            <button type='button' onClick={handleAddTodo} className='primaryBtn'>Add</button>
          </div>
        </div>

        <div className='btn-area'>
          <button className={`secondaryBtn ${isCompleteScreen===false && 'active'}`} onClick={()=>setIsCompleteScreen(false)}>Todo</button>
          <button className={`secondaryBtn ${isCompleteScreen===true && 'active'}`} onClick={()=>setIsCompleteScreen(true)}>Completed</button>
        </div>
        <div className='todo-list'>
          {
           isCompleteScreen===false && allTodos.map((item, index)=>{
              return(
                <div className='todo-list-item' key={index}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <div>
            <MdDelete  className='icon' onClick={()=>handleDeleteTodo(index)} title='Delete?'/>
            <FaCheckCircle  className='check-icon' onClick={()=>handleComplete(index)} title='Completed?'/>
          </div>
          </div>
              )
            })
          }
          {
           isCompleteScreen===true && completedTodos.map((item, index)=>{
              return(
                <div className='todo-list-item' key={index}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p><small>Completed on: {item.completedOn}</small></p>
            <div>
            <MdDelete  className='icon' onClick={()=>handleDeleteTodo(index)} title='Delete?'/>
          </div>
          </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
