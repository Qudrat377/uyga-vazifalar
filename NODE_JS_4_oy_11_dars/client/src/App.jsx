import { useState, useEffect } from "react";
import "./index.css";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [data, setData] = useState([]);
  // console.log(data)
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [count, setCount] = useState("");
  const [editId, setEditId] = useState(null);

  const reset = () => {
    setEditId(null);
    setTitle("");
    setPrice("");
    setCount("");
  };

  // get

  const getData = () => {
    fetch("http://localhost:4020/get_all_data")
      .then((res) => res.json())
      .then((info) => setData(info))
      .catch((error) => console.log(error.message));
  };

  // delete

  const deleteData = (id) => {
    // console.log(id);

    fetch("http://localhost:4020/delete_data/" + id, {
      method: "DELETE",
      headers: {
        authorization: "Bearer " + localStorage.getItem("token"),
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((info) => {
        toast.error(info.message);
        getData();
      })
      .catch((error) => console.log(error.message));
  };

  // add

  const addData = (event) => {
    event.preventDefault();
    if (editId) {
      fetch("http://localhost:4020/update_data/" + editId, {
        method: "PUT",
        headers: {
          authorization: "Bearer " + localStorage.getItem("token"),
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          title,
          price,
          count,
        }),
      })
        .then((res) => res.json())
        .then((info) => {
          toast.success(info.message);
          getData();
          reset();
        })
        .catch((error) => console.log(error.message));
    } else {
      fetch("http://localhost:4020/add_data", {
        method: "POST",
        headers: {
          authorization: "Bearer " + localStorage.getItem("token"),
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          title,
          price,
          count,
        }),
      })
        .then((res) => res.json())
        .then((info) => {
          toast.info(info.message);
          getData();
          reset();
        })
        .catch((error) => console.log(error.message));
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // edit

  const handlEdit = (item) => {
    setEditId(item.id);
    setTitle(item.title);
    setPrice(item.price);
    setCount(item.count);
  };

  return (
    <div className="container">
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <h1 className="mt-5 mb-5">Add Data</h1>
      <form className="mt-5 py-5" onSubmit={addData}>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          // onChange={(e) => console.log(e.target.value)}
        />
        <input
          type="number"
          className="form-control mb-3"
          placeholder="price..."
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="number"
          className="form-control mb-3"
          placeholder="count..."
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="btn btn-primary" type="submit">
          {editId ? "Update" : "Send"}
        </button>
        <button
          className="btn btn-success ms-3"
          type="button"
          onClick={() => reset()}
        >
          Reset
        </button>
      </form>
      <h1>Data list</h1>
      <table className="table mt-5 pb-5">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Count</th>
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item, index) => (
              <tr scope="row" key={index} className="tr">
                <th>{index + 1}</th>
                <td>title: {item.title}</td>
                <td>price: {item.price}</td>
                <td>count: {item.count}</td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => handlEdit(item)}
                  >
                    edit
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteData(item.id)}
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))
          ) :
            <tr>
              <td>
                <Box sx={{ display: "flex", justifyContent: "center",marginTop: "50px", marginLeft: "400px"}}>
             <CircularProgress className="progress"/>
            </Box>
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
