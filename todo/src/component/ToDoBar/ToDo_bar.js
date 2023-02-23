import React from 'react'
import { useState, useEffect } from 'react'
import './ToDo_bar.css'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

const ToDo_bar = () => {
    const [newItem, setNewItem] = useState("");
    const [items, setItems] = useState([]);
    const test = items.length
    function addItem() {
        if (!newItem) {
            alert("Please enter an item.");
            return;
        }

        const item = {
            id: Math.floor(Math.random() * 1000),
            value: newItem,
            status: true
        };

        setItems((oldList) => [...oldList, item]);
        
        setNewItem("");
        console.log(test)
    }

    function deleteItem(id) {
        const newArray = items.filter((item) => item.id !== id);
        setItems(newArray);
    }

    function changeState(id) {
        let ChangeTask = items.map(task => {
            if (task.id === id) {
                return ({ ...task, status: !task.status })
            }
            return task;
        })
        setItems(ChangeTask);
    }


    
    useEffect(() => {
        const LSitems = JSON.parse(localStorage.getItem('items'));
        if (LSitems) {
            setItems(LSitems);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items));
    }, [items]);

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            addItem();
        }
      };


    return (
        <div className="main_todo"style={{textAlign: 'center'}}>
            <h1 className = 'title'>todos</h1>
            <div class = 'search-bar'>
            <label className='Toggle-all'>{items.length ? '❯' : ''}</label>
            <input
                className='search-bar-input'
                type="text"
                placeholder="What needs to be done?"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                onKeyDown={handleKeyDown}
            />
           
            </div>
            <ul>
                {items.map((item) => {
                    return (
                        <div className='task_list'> 
                            <li key={item.id}  className={item.status ? 'ongoing' : 'done'}>
                            <label
                                    className="update-button"
                                    onClick={() => changeState(item.id)}
                                    style ={{marginRight:'20px'}}
                                >
                                    {item.status ? 'Finish' : 'Unfinish'}
                                </label>
                                {item.value}
                                <div className='btn-grp'style ={{display:'inline-block'}}>
                                <label
                                    className="delete-button"
                                    onClick={() => deleteItem(item.id)}
                                >
                                    X
                                </label>
                                
                                </div>
                            </li>


                        </div>
                    );
                })}
            </ul>


            <footer className='info'>
                <ul>
                    <li>Double-click to edit a todo</li>
                    <li>Created by <a href='https://github.com/petehunt/'target="_blank" rel="noopener noreferrer"style={{display: 'inline', color:'grey'}}>petehunt</a></li>
                    <li>Part of <a href='https://todomvc.com/'target="_blank" rel="noopener noreferrer"style={{display: 'inline', color:'grey'}}>TodoMVC</a></li>
                </ul>
            </footer>
            
        </div>
    )
}

export default ToDo_bar