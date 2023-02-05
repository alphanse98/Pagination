import React, { useEffect, useState } from "react";
import axios from "axios";
import { InPut } from "./InPut";
import { Table } from "./Table";
import { Pagination } from "./Pagination";

export const ApiTask = () => {
  const [data, setdata] = useState([]);
  const [search, setsearch] = useState(" ");
  const [SelectedPage, setSelectedPage] = useState(1);
  const [dataPerPage] = useState(5);

  useEffect(() => {
    ApiCall();
  }, []);
  const ApiCall = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    data.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    setdata(res.data);
  };

  // index value calculation
  const LastIndex = SelectedPage * dataPerPage;
  const FirstIndex = LastIndex - dataPerPage;
  let SilcedData = data.slice(FirstIndex, LastIndex);

  // Page Number calculation
  const NumOfPage = Math.ceil(data.length / dataPerPage);
  const pages = [...Array(NumOfPage + 1).keys()].slice(1);

  return (
    <div className="ApiTask">
      <InPut setsearch={setsearch} />
      <Table SilcedData={SilcedData} search={search} />
      <Pagination
        NumOfPage={NumOfPage}
        pages={pages}
        setSelectedPage={setSelectedPage}
        SelectedPage={SelectedPage}
      />
    </div>
  );
};
