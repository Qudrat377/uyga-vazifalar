import { useState, useEffect } from "react";
import "./index.css";
function App() {
  const [todo, setTodo] = useState([]);
  const [yugurish, setYugurish] = useState("");
  const [dars, setDars] = useState("");
  const [ishlar, setIshlar] = useState("");
  const [hobby, setHobby] = useState("");
  const [tomorrow, setTomorrow] = useState("");
  // const [editId, setEditId] = useState(null)

  const verify = (func, ...arr) => {
    if (yugurish === "") {
      alert("Iltimos add todoga yugurish vaqtini kiriting");
    } else if (dars === "") {
      alert("Iltimos add todoga dars vaqtini kiriting");
    } else if (ishlar === "") {
      alert("Iltimos add todoga bajariladigan ishlarni kiriting");
    } else if (tomorrow === "") {
      alert("Iltimos add todoga ertangi ish rejasini kiriting");
    } else {
      console.log(yugurish, dars, ishlar, hobby, tomorrow);

      updateTodo(func);
    }
  };

  // get

  const getTodo = () => {
    fetch("http://localhost:4021/get_all_todo")
      .then((res) => res.json())
      .then((inside) => setTodo(inside))
      .catch((error) => console.log(error.message));
  };

  // add

  const addTodo = (event) => {
    event.preventDefault();
    fetch("http://localhost:4021/add_todo", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        yugurish,
        dars,
        ishlar,
        hobby,
        tomorrow,
      }),
    })
      .then((res) => res.json())
      .then((inside) => {
        alert(inside.message);
        getTodo();
      })
      .catch((error) => console.log(error.message));
  };

  // update

  const updateTodo = (id) =>
    fetch("http://localhost:4021/update_todo/" + id, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        yugurish,
        dars,
        ishlar,
        hobby,
        tomorrow,
      }),
    })
      .then((res) => res.json())
      .then((inside) => {
        alert(inside.message);
        getTodo();
      });

  // delete

  const deleteTodo = (id) =>
    fetch("http://localhost:4021/delete_todo/" + id, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        yugurish,
        dars,
        ishlar,
        hobby,
        tomorrow,
      }),
    })
      .then((res) => res.json())
      .then((inside) => {
        alert(inside.message);
        getTodo();
      })
      .catch((error) => console.log(error.message));

  useEffect(() => {
    getTodo();
  }, []);

  return (
    <div className="container">
      {/* <!-- header --> */}
      <header className="header">
        <div className="container">
          <div className="header-inner">
            <a href="#" className="header-logo-link">
              <img src="/react.svg" alt="Logo" width="150" height="80" />
            </a>

            <div className="header-box">
              <nav>
                <ul className="header-list">
                  <li className="header-item">
                    <a href="#" className="header-item-link">
                      {" "}
                      Bosh sahifa{" "}
                    </a>
                  </li>
                  <li className="header-item">
                    <button className="header-btn">Register</button>
                  </li>
                  <li className="header-item">
                    <button className="header-btn">LOGIN</button>
                  </li>
                  <li className="header-item">
                    <a href="#" className="header-item-link">
                      {" "}
                      Biz bilan aloqa -
                    </a>
                  </li>
                </ul>
              </nav>
              <button className="header-btn">+998 88 790 0677</button>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- header --> */}
      <h1 className="todo-list">Add Todo</h1>
      <form className="add-todo-form" onSubmit={addTodo}>
        <input
          type="time"
          className="form-control"
          placeholder="Time..."
          value={yugurish}
          onChange={(e) => setYugurish(e.target.value)}
        />
        <input
          type="time"
          className="form-control"
          placeholder="Time..."
          value={dars}
          onChange={(e) => setDars(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Ishlar..."
          value={ishlar}
          onChange={(e) => setIshlar(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Hobby..."
          value={hobby}
          onChange={(e) => setHobby(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Tomorrow..."
          value={tomorrow}
          onChange={(e) => setTomorrow(e.target.value)}
        />
        <button className="btn-add-todo-form" type="submit">
          Send
        </button>
      </form>
      {/* todo hero */}
      <h1 className="todo-list">TODO list</h1>
      <table>
        <thead>
          <tr>
            <th className="hashtag">#</th>
            <th>Yugurish</th>
            <th>Dars</th>
            <th>Ishlar</th>
            <th>Hobby</th>
            <th>Tomorrow</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todo.map((item, index) => (
            <tr key={index}>
              <th className="hashtag">{index + 1}</th>
              <td>{item.yugurish}</td>
              <td>{item.dars}</td>
              <td>{item.ishlar}</td>
              <td>{item.hobby}</td>
              <td>{item.tomorrow}</td>
              <td>
                <button className="btn-edit" onClick={() => verify(item.id)}>
                  edit
                </button>
              </td>
              <td>
                <button
                  className="btn-delete"
                  onClick={() => deleteTodo(item.id)}
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
