import React from 'react'
import { useState, useEffect } from 'react'
import './ToDo_bar.css'
const ToDo_bar = () => {
    const [newItem, setNewItem] = useState("");
    const [items, setItems] = useState([]);

    function addItem() {
        if (!newItem) {
            alert("Press enter an item.");
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




    return (
        <div className="main_todo"style={{textAlign: 'center'}}>
            <h1 className = 'title'>todos</h1>
            <input
                type="text"
                placeholder="What needs to be done?"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />

            <button onClick={() => addItem()}>Add</button>
            
            <ul>
                {items.map((item) => {
                    return (
                        <div className={item.status ? 'ongoing' : 'done'}>
                            <li key={item.id}>
                                {item.value}
                                <button
                                    className="delete-button"
                                    onClick={() => deleteItem(item.id)}
                                    style ={{margin:'20px'}}
                                >
                                    Delete
                                </button>
                                <button
                                    className="update-button"
                                    onClick={() => changeState(item.id)}
                                    style ={{margin:'20px'}}

                                >
                                    {item.status ? 'Finish' : 'Unfinish'}
                                </button>
                            </li>


                        </div>
                    );
                })}
            </ul>


            <footer className='info'>
                <ul>
                    <li>Double-click to edit a todo</li>
                    <li>Created by <a href='https://github.com/petehunt/'target="_blank" rel="noopener noreferrer"style={{display: 'inline', color:'grey'}}>Hannes Johansson</a> based on React example by<a href='https://github.com/petehunt/'target="_blank" rel="noopener noreferrer"style={{display: 'inline', color:'grey'}}>petehunt</a></li>
                    <li>Part of <a href='https://todomvc.com/'target="_blank" rel="noopener noreferrer"style={{display: 'inline', color:'grey'}}>TodoMVC</a></li>
                </ul>
            </footer>
            
        </div>
    )
}

export default ToDo_bar