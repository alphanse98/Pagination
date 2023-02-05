import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Apicss.css";

function Api() {
  let [apiData, setapiData] = useState([]),
    [userOPtion, setuserOPtion] = useState({});

  useEffect(() => {
    let fun = async () => {
      let res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setapiData(res.data);
      setuserOPtion(res.data[0]);
    };
    fun();
  }, []);

  return (
    <div>
      {apiData.map((ele, index) => (
        <div key={index}>
          <span
            className={userOPtion.id === ele.id ? "active" : "no-color"}
            onClick={() => {
              setuserOPtion(ele);
            }}
          >
            {ele.name}
          </span>
        </div>
      ))}

      <h3>
        <span>Name =</span>
        {userOPtion.name}
      </h3>
      <h3>
        <span>Phone =</span>
        {userOPtion.phone}
      </h3>
      <h3>
        <span>website =</span>
        {userOPtion.website}
      </h3>
      <h3>
        <span>username =</span>
        {userOPtion.username}
      </h3>
      <h3>
        <span>username =</span>
        {userOPtion.id}
      </h3>
    </div>
  );
}

export default Api;
