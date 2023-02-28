import React from "react";
import { useState, useEffect } from "react";
import "./ToDoBar.css";

const ToDoBar = () => {
  const [NewItem, setNewItem] = useState("");
  const [Items, setItems] = useState([]);
  const [Filtered, setFiltered] = useState(null);
  const [Editing, setEditing] = useState(null);
  const [EditingText, setEditingText] = useState("");
  const [Toggle, setToggle] = useState(false);
  const [FilterAll, setFilterAll] = useState(true);
  const [Ongoing, setOngoing] = useState(false);
  const [Completed, setCompleted] = useState(false);

  const active_task = Items.filter((todo) => todo.status === true);
  const inactive_task = Items.filter((todo) => todo.status === false);
  const renderedTodoList = Items.filter(
    (todo) => Filtered === null || todo.status === Filtered
  );

  function addItem() {
    if (!NewItem) {
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: NewItem,
      status: true,
    };

    setItems((oldList) => [...oldList, item]);
    setNewItem("");
  }

  function deleteItem(id) {
    const newArray = Items.filter((item) => item.id !== id);
    setItems(newArray);
  }

  function clearComplete() {
    const newArray = Items.filter((item) => item.status !== false);
    setItems(newArray);
  }

  function changeState(id) {
    let ChangeTask = Items.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setItems(ChangeTask);
  }

  function changeAll() {
    let ChangeTask = Items.map((task) => {
      return { ...task, status: Toggle };
    });
    setToggle(!Toggle);
    setItems(ChangeTask);
  }

  const handleKeyDownEdit = (event) => {
    if (event.key === "Enter") {
      const newTask = [...Items].map((task) => {
        if (task.id === Editing) {
          task.value = EditingText;
        }
        return task;
      });
      setItems(newTask);
      setEditing(null);
    } else if (event.key === "Escape") {
      setEditing(null);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setEditingText(e.target.value);
  };

  function showAll() {
    setFiltered(null);
    setFilterAll(true);
    setOngoing(false);
    setCompleted(false);
  }

  function showActive() {
    setFiltered(true);
    setFilterAll(false);
    setOngoing(true);
    setCompleted(false);
  }

  function showComplete() {
    setFiltered(false);
    setFilterAll(false);
    setOngoing(false);
    setCompleted(true);
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addItem();
    }
  };

  useEffect(() => {
    const LSitems = JSON.parse(localStorage.getItem("items"));
    if (LSitems.length > 0) {
      setItems(LSitems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(Items));
  }, [Items]);

  useEffect(() => {
    const CancelInput = (e) => {
      if (e.target.id !== Editing) {
        setEditing(null);
      }
    };
    document.body.addEventListener("click", CancelInput);

    return () => document.body.removeEventListener("click", CancelInput);
  }, []);

  return (
    <div className="main_todo">
      <h1 className="title">todos</h1>
      <div className="main_functions">
        <div className="search-bar">
          {active_task.length === 0 ? (
            <label className="Toggle-all-active" onClick={changeAll}>
              {Items.length ? "❯" : ""}
            </label>
          ) : (
            <label className="Toggle-all" onClick={changeAll}>
              {Items.length ? "❯" : ""}
            </label>
          )}{" "}
          <input
            type="text"
            className="Add_task"
            placeholder="What needs to be done?"
            value={NewItem}
            onChange={(e) => setNewItem(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
        <div className="task_list">
          <ul>
            {renderedTodoList.map((item) => {
              return (
                <li key={item.id} className="items">
                  <>
                    {item.id !== Editing ? (
                      <label
                        className="update-button"
                        onClick={() => changeState(item.id)}
                      >

                        
                        {item.status ? (
                          <img
                            src={
                              "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E"
                            }
                            alt="empty_circle"
                          />
                        ) : (
                          <img
                            src={
                              "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E"
                            }
                            alt="checked_circle"
                          />
                        )}
                      </label>
                    ) : (
                      ""
                    )}

                    {item.id === Editing ? (
                      <input
                        id={item.id}
                        type="text"
                        defaultValue={item.value}
                        onChange={handleChange}
                        onKeyDown={handleKeyDownEdit}
                        className="edit_input"
                      />
                    ) : (
                      <div
                        className={item.status ? "ongoing" : "done"}
                        onDoubleClick={() => {
                          setEditing(item.id);
                        }}
                      >
                        {item.value}
                      </div>
                    )}

                    {item.id !== Editing ? (
                      <label
                        className="delete-button"
                        onClick={() => deleteItem(item.id)}
                      >
                        X
                      </label>
                    ) : (
                      ""
                    )}
                  </>
                </li>
              );
            })}
          </ul>
        </div>

        {Items.length ? (
          <div className="refine_options">
            <span className="task_left">
              {active_task.length}{" "}
              {active_task.length > 1 ? "items left" : "item left"}
            </span>

            <div className="filter_box">
              <li
                onClick={showAll}
                className={
                  FilterAll ? "filter_options_selected" : "filter_options"
                }
              >
                All
              </li>
              <li
                onClick={showActive}
                className={
                  Ongoing ? "filter_options_selected" : "filter_options"
                }
              >
                Active
              </li>
              <li
                onClick={showComplete}
                className={
                  Completed ? "filter_options_selected" : "filter_options"
                }
              >
                Completed
              </li>
            </div>
            {inactive_task.length ? (
              <label onClick={clearComplete} className="clear_complete">
                Clear completed
              </label>
            ) : (
              ""
            )}
          </div>
        ) : (
          ""
        )}
      </div>

      <footer className="info">
        <ul>
          <li>Double-click to edit a todo</li>
          <li>
            Created by{" "}
            <a
              href="https://github.com/petehunt/"
              target="_blank"
              rel="noopener noreferrer"
            >
              petehunt
            </a>
          </li>
          <li>
            Part of{" "}
            <a
              href="https://todomvc.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              TodoMVC
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default ToDoBar;
