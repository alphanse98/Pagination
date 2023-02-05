import React from "react";

export const Table = ({search,SilcedData}) => {

    console.log(search,SilcedData);
  return (
    <div>
    <table>
      <tr>
        <th>Name</th>
        <th>Phone</th>
        <th>website</th>
      </tr>
      {SilcedData.filter((e) =>
        e.name.toLowerCase().includes(search)
      ).map((e, i) => (
        <tr key={i}>
          <td>{e.name}</td>
          <td>{e.phone}</td>
          <td>{e.website}</td>
        </tr>
      ))}
    </table>
    </div>
  );
};
