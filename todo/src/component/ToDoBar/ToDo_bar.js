import React from "react";
import { useState, useEffect, useRef } from "react";
import "./ToDo_bar.css";

const ToDo_bar = () => {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);
  const [Filtered, setFiltered] = useState(null);
  const [Editing, setEditing] = useState(null);
  const [EditingText, setEditingText] = useState("");
  const [toggle, setToggle] = useState(false);
  const [FilterAll, setFilterAll] = useState(true);
  const [Ongoing, setOngoing] = useState(false);
  const [Completed, setCompleted] = useState(false);

  const active_task = items.filter((todo) => todo.status == true);
  const inactive_task = items.filter((todo) => todo.status == false);
  const renderedTodoList = items.filter(
    (todo) => Filtered === null || todo.status == Filtered
  );
//   const inputRef = useRef();

  function addItem() {
    if (!newItem) {
      alert("Please enter an item.");
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
      status: true,
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
    let ChangeTask = items.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setItems(ChangeTask);
  }

  function changeAll() {
    let ChangeTask = items.map((task) => {
      return { ...task, status: toggle };
    });
    setToggle(!toggle);
    setItems(ChangeTask);
  }

  //edit todo functions

  const handleKeyDownEdit = (event) => {
    if (event.key === "Enter") {
      const newTask = [...items].map((task) => {
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

  //Footer functions
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
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    const CancelInput = (e) => {
      console.log(e.target.id);
      if (e.target.id !== Editing) {
        setEditing(null);
      }
    };
    document.body.addEventListener("click", CancelInput);

    return () => document.body.removeEventListener("click", CancelInput);
  }, []);

  return (
    <div className="main_todo" style={{ textAlign: "center" }}>
      <h1 className="title">todos</h1>
      <div className="main_functions">
        <div class="search-bar">
          {active_task.length === 0 ? (
            <label className="Toggle-all-active" onClick={changeAll}>
              {items.length ? "❯" : ""}
            </label>
          ) : (
            <label className="Toggle-all" onClick={changeAll}>
              {items.length ? "❯" : ""}
            </label>
          )}{" "}
          <input
            type="text"
            className="Add_task"
            placeholder="What needs to be done?"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
        <div className="task_list">
          <ul
            style={{
              margin: "0",
              padding: "0",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {renderedTodoList.map((item) => {
              return (
                <li
                  key={item.id}
                  className="items"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
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
                          />
                        ) : (
                          <img
                            src={
                              "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E"
                            }
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
                        // ref={inputRef}
                        style={{ fontSize: "22px" }}
                      />
                    ) : (
                      <div
                        className={item.status ? "ongoing" : "done"}
                        style={{
                          marginRight: "auto",
                          marginTop: "15px",
                          fontSize: "22px",
                          color: "#4D4D4D",
                        }}
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

        {items.length ? (
          <div
            style={{ textAlign: "left", color: "#777" }}
            className="refine_options"
          >
            {active_task.length > 1 ? (
              <span className="task_left">{active_task.length} items left</span>
            ) : (
              <span className="task_left">{active_task.length} item left</span>
            )}
            <div style={{ position: "absolute", marginLeft: "169px" }}>
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
              <label
                onClick={ClearComplete}
                style={{ float: "right", marginRight: "15px" }}
                class="clear_complete"
              >
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
          <li style={{ fontSize: "10px" , fontWeight:'300'}}>Double-click to edit a todo</li>
          <li style={{ fontSize: "10px" , fontWeight:'300'}}>
            Created by{" "}
            <a
              href="https://github.com/petehunt/"
              target="_blank"
              rel="noopener noreferrer"
            >
              petehunt
            </a>
          </li>
          <li style={{ fontSize: "10px" , fontWeight:'300'}}>
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

export default ToDo_bar;
