import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [data, setData] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [todo_item, setTodo_item] = useState("");
  const [editId, setEditId] = useState(null);
  const [headerUsername, setHeaderUsername] = useState(""); // faqat sarlavha uchun

  const [chekt, setChekt] = useState();
  const [id_Todo, setId_Todo] = useState(null);

  const total = data.length;
  const completed = data.filter((item) => item.checked).length;

  const percent = total === 0 ? 0 : (completed / total) * 100;

  // console.log(chekt);

  // reset

  const reset = () => {
    setEditId(null);
    setTodo_item("");
  };

  // get

  const getData = () => {
    fetch("http://localhost:4024/get_all_todo", {
      method: "GET",
      headers: {
        // chekts: chekt,
        authorization: "Bearer " + localStorage.getItem("token"),
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((info) => setData(info))
      .catch((error) => console.log(error.message));
  };

  // add

  const addData = (event) => {
    event.preventDefault();
    if (editId) {
      fetch("http://localhost:4024/update_todo/" + editId, {
        method: "PUT",
        headers: {
          authorization: "Bearer " + localStorage.getItem("token"),
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          todo_item,
        }),
      })
        .then((res) => res.json())
        .then((info) => {
          toast(info.message);
          getData();
          reset();
        })
        .catch((error) => console.log(error.message));
    } else {
      fetch("http://localhost:4024/add_todo", {
        method: "POST",
        headers: {
          authorization: "Bearer " + localStorage.getItem("token"),
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          todo_item,
        }),
      })
        .then((res) => res.json())
        .then((info) => {
          toast(info.message);
          getData();
          reset();
        })
        .catch((error) => console.log(error.message));
    }
  };

  // update

  const updateTodo = (item) => {
    setEditId(item.id);
    setTodo_item(item.todo_item);
  };

  // delete

  const deleteTodo = (id) => {
    fetch("http://localhost:4024/delete_todo/" + id, {
      method: "DELETE",
      headers: {
        authorization: "Bearer " + localStorage.getItem("token"),
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((info) => {
        toast(info.message);
        getData();
      })
      .catch((error) => console.log(error.message));
  };

  // register

  const register = (event) => {
    event.preventDefault();
    fetch("http://localhost:4024/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((info) => {
        toast(info.message);
        if (info.token) {
          localStorage.setItem("token", info.token);
          setUsername("");
          setEmail("");
          setPassword("");
          getData();
        }
      })
      .catch((error) => console.log(error.message));
  };

  useEffect(() => {
    getData();
    UsernameLogo()
  }, []);

  const UsernameLogo = () => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch("http://localhost:4024/get_username", {
        method: "GET",
        headers: {
          authorization: "Bearer " + token,
        },
      })
        .then(res => res.json())
        .then(data => {
          if (data.username) setHeaderUsername(data.username);
        })
        .catch(err => console.log(err.message));
    }
  }

  // cheket delete

  const toggleChecked = (todo) => {
    fetch("http://localhost:4024/update_checked/" + todo.id, {
      method: "PUT",
      headers: {
        authorization: "Bearer " + localStorage.getItem("token"),
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        checked: !todo.checked,
      }),
    })
      .then((res) => res.json())
      .then((info) => {
        toast(info.message);
        getData();
      })
      .catch((error) => console.log(error.message));
  };

  // remuchekeded

  const removeChecked = () => {
    fetch("http://localhost:4024/delete_checked", {
      method: "DELETE",
      headers: {
        authorization: "Bearer " + localStorage.getItem("token"),
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((info) => {
        toast(info.message);
        getData();
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div>
      <div className="glabal-objekt">
        <ToastContainer
          position="top-center"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {/* register  */}
        <div className="register-login">
          {/* <button className="btn-register">Register</button> */}

          <button className="btn-register">Register</button>
          
          <h1 className="person-name">{headerUsername ? headerUsername : "TODO"}</h1>
          <button className="btn-login">Login</button>

          {/* <button className="btn-login">Login</button> */}
        </div>
        <div className="bar-input">
          <form onSubmit={register}>
            <input
              className="input-bar"
              type="text"
              placeholder="Username..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className="input-bar-email"
              type="email"
              placeholder="Email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="input-bar"
              type="password"
              placeholder="Password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="btn-reg-log-sender">Send</button>
          </form>
        </div>
        {/* register  */}
        {/* todo list */}
        <div className="body-item">
          <h1 className="todo-list-h1">TODOLIST</h1>
          <div className="input-body">
            <form onSubmit={addData}>
              <button
                className="btn-reset-todo-list"
                type="button"
                onClick={() => reset()}
              >
                Reset
              </button>
              <input
                type="text"
                className="input-new-input"
                placeholder="what needs to be done?"
                value={todo_item}
                onChange={(e) => setTodo_item(e.target.value)}
              />
              <button type="submit" className="btn-new-input">
                {editId ? "✏️" : "+"}
              </button>
            </form>
          </div>

          {/* <div className="bottom-chekit-input-edit-delete"> */}
          {data.map((todo, index) => (
            <div key={index} className="bottom-chekit-input-edit-delete">
              <input
                type="checkbox"
                className="checkbox-input"
                checked={todo.checked}
                onChange={() => toggleChecked(todo)}
              />
              <h1 className="input-output-windov">
                {todo.todo_item.slice(0, 45) + "..."}
              </h1>
              <button className="btn-edit" onClick={() => updateTodo(todo)}>
                ✏️
              </button>
              <button
                className="btn-delete"
                onClick={() => deleteTodo(todo.id)}
              >
                x
              </button>
            </div>
          ))}

          {/* </div> */}
          <div className="output-remove-cheket">
            <div className="progress-box">
              <div
                className="progress-fill"
                style={{ width: `${percent}%` }}
              ></div>
              <span className="progress-text">
                {total} / {completed}
              </span>
            </div>
            {/* <output className="output-cheket">
              {data.length} / {data.filter((todo) => todo.checked).length}
            </output> */}
            <button className="remove-cheket" onClick={removeChecked}>
              Remove chacked x
            </button>
          </div>
        </div>
        {/* todo list */}
      </div>
    </div>
  );
}

export default App;
