import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./ProductList.css"; 

function ProductList() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3300/product")
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:3300/product/" + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <div className="header">
        <Link to="/create" className="AddButton">
          Add +
        </Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {product.map((data, i) => (
            <tr key={i}>
              <td>{data.name}</td>
              <td>{data.description}</td>
              <td>{data.price}</td>
              <td>
                <Link to={`update/${data.id}`} className="UpdButton">
                  Update
                </Link>
                <button
                  className="DelButton"
                  onClick={(e) => handleDelete(data.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;