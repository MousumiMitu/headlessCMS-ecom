import React from "react";
import "./List.scss";
import Card from "../Card/Card";

const List = () => {
  const data = [
    {
      id: 1,
      title: "Temp",
      img: "https://images.pexels.com/photos/2789817/pexels-photo-2789817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/3489376/pexels-photo-3489376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      isNew: true,
      oldPrice: 36,
      price: 38,
    },
    {
      id: 2,
      title: "asfgg",
      img: "https://images.pexels.com/photos/2859371/pexels-photo-2859371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/3221848/pexels-photo-3221848.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      isNew: false,
      oldPrice: 33,
      price: 88,
    },
    {
      id: 3,
      title: "Konklab",
      img: "https://images.pexels.com/photos/3489376/pexels-photo-3489376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/2789817/pexels-photo-2789817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      isNew: true,
      oldPrice: 85,
      price: 32,
    },
    {
      id: 4,
      title: "Zontrax",
      img: "https://images.pexels.com/photos/3221848/pexels-photo-3221848.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/2859371/pexels-photo-2859371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      isNew: false,
      oldPrice: 45,
      price: 95,
    },
    {
      id: 5,
      title: "Zontrax",
      img: "https://images.pexels.com/photos/3221848/pexels-photo-3221848.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/2859371/pexels-photo-2859371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      isNew: false,
      oldPrice: 45,
      price: 95,
    },
    {
      id: 6,
      title: "Zontrax",
      img: "https://images.pexels.com/photos/3221848/pexels-photo-3221848.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/2859371/pexels-photo-2859371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      isNew: false,
      oldPrice: 45,
      price: 95,
    },
    {
      id: 7,
      title: "Zontrax",
      img: "https://images.pexels.com/photos/3221848/pexels-photo-3221848.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/2859371/pexels-photo-2859371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      isNew: false,
      oldPrice: 45,
      price: 95,
    },
  ];
  return (
    <div className="list">
      {data.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default List;
