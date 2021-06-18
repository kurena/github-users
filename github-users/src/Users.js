import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import "./Users.css";

function Users() {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(async () => {
    const result = await axios.get(`https://api.github.com/users/${id}`);
    setData(result.data);
  }, []);
  return (
    <div className="user-container">
      <div className="img-container">
        <img src={data.avatar_url} />
      </div>
      <div className="data">
        <span>{data.name}</span>
        <span>{data.location}</span>
      </div>
    </div>
  );
}

export default Users;
