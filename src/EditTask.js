import React, { useState } from "react";

function EditTask() {
  let [data, setdata] = useState([
    { id: 1, name: "Alphanse" },
    { id: 2, name: "Mari" },
    { id: 3, name: "Leo" },
  ]);
  let [et, setet] = useState("");
  console.log(et);

  let fuc = (param, index) => {
    setet(param);
  };

  const change = (e) => {
    setet(e.target.value);
    console.log(et);
  };

  let sub = (index) => {
    data.splice(index, 1, et);
  };

  return (
    <div>
      <input type="text" value={et.name} onChange={change}></input>

      {data.map((ele, index) => (
        <div key={index}>
          <h3>{ele.name}</h3>
          <button onClick={() => fuc(ele, index)}>Edit</button>
          <button onClick={sub(index)}>submit</button>
        </div>
      ))}
    </div>
  );
}

export default EditTask;
