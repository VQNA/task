import React from 'react'
import { useState, useEffect } from 'react'
import './ToDo_bar.css'
// import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

const ToDo_bar = () => {
    const [newItem, setNewItem] = useState("");
    const [items, setItems] = useState([]);
    const [Filtered, setFiltered] = useState(null)
    const [Editing, setEditing] = useState(null)
    const [EditingText, setEditingText] = useState("")

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
    }

    function deleteItem(id) {
        const newArray = items.filter((item) => item.id !== id);
        setItems(newArray);
        

    }

    function ClearComplete() {
        const newArray = items.filter((item) => item.status !== false);
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

    function changeAll() {
        let ChangeTask = items.map(task => {
            return ({ ...task, status: false });
        })
        setItems(ChangeTask)

    }

//edit todo functions
    function handleDoubleClick(e, id) {
        switch (e.detail) {
            case 1: {
                console.log('1')
                break;
            }
            case 2: {
                console.log(id)
                setEditing(id)
                break;
            }
        }
    }

    const handleKeyDownEdit = (event) => {
        if (event.key === 'Enter') {
            const newTask = [...items].map((task) =>{
                if(task.id === Editing){
                    task.value = EditingText
                }
                return task
            });
            setItems(newTask)
            setEditing(null);
        }
    };



//Footer functions
    function showAll() {
        setFiltered(null)
        console.log(Filtered)

    }

    function showActive() {

        setFiltered(true)
        console.log(Filtered)

    }
    function showComplete() {
        setFiltered(false)
        console.log(Filtered)


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

    const active_task = items.filter(todo => todo.status == true)
    const renderedTodoList = items.filter(todo => Filtered === null || todo.status == Filtered)
    console.log(renderedTodoList)
    return (
        <div className="main_todo" style={{ textAlign: 'center' }}>
            <h1 className='title'>todos</h1>
            <div class='search-bar'>
                <label className='Toggle-all' onClick={changeAll}>{items.length ? '❯' : ''}</label>
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
                {renderedTodoList.map((item) => {
                    return (
                        <div className='task_list'>
                            <li key={item.id}   style={{ display: 'flex', alignItems: "center", justifyContent: 'space-between' }}>
                                <label
                                    className="update-button"
                                    onClick={() => changeState(item.id)}
                                    style={{ marginRight: '20px' }}
                                >
                                    {item.status ? (<img src={'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E'}/>) 
                                    : (<img src={'data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E'}/>)
                                    }
                                </label>
                                
                                {item.id === Editing 
                                ?
                                (<input type='text' onChange={(e) => setEditingText(e.target.value)} onKeyDown = {handleKeyDownEdit}/>) 
                                : 
                                (<div className={item.status ? 'ongoing' : 'done'} onDoubleClick={() => setEditing(item.id)}>{item.value}</div>)}
                                


                                <label
                                    className="delete-button"
                                    onClick={() => deleteItem(item.id)}
                                >
                                    X
                                </label>


                            </li>


                        </div>
                    );
                })}
            </ul>
            {items.length ? <div style={{ display: 'flex', justifyContent:'space-around', textAlign:'justify'}} className = 'refine_options'>
                <span >{active_task.length} item(s) left</span>
                <label  onClick={showAll}>All</label>
                <label  onClick={showActive}>Active</label>
                <label  onClick={showComplete}>Complete</label>
                <label  onClick={ClearComplete}>Clear completed</label>
            </div> : ''}

            <footer className='info'>
                <ul>
                    <li>Double-click to edit a todo</li>
                    <li>Created by <a href='https://github.com/petehunt/' target="_blank" rel="noopener noreferrer" style={{ display: 'inline', color: 'grey' }}>petehunt</a></li>
                    <li>Part of <a href='https://todomvc.com/' target="_blank" rel="noopener noreferrer" style={{ display: 'inline', color: 'grey' }}>TodoMVC</a></li>
                </ul>
            </footer>

        </div>
    )
}

export default ToDo_bar