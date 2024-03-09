import React from "react";
import "./ListPage.scss";
import { listData } from "../../Lib/dummyData";
import Filter from "../../components/Filter/Filter";
import Card from "../../components/Card/Card";
const ListPage = () => {
  const data = listData;
  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="mapContainer">Map</div>
    </div>
  );
};

export default ListPage;
