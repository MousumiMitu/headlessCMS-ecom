import React from "react";
import "./Cart.scss";

const Cart = () => {
  const data = [
    {
      id: 1,
      title: "Temp",
      img: "https://images.pexels.com/photos/2789817/pexels-photo-2789817.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/3489376/pexels-photo-3489376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      isNew: true,
      oldPrice: 36,
      price: 38,
      desc: "lorem",
    },
    {
      id: 2,
      title: "asfgg",
      img: "https://images.pexels.com/photos/2859371/pexels-photo-2859371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/3221848/pexels-photo-3221848.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      isNew: false,
      oldPrice: 33,
      price: 88,
      desc: "lorem",
    },
  ];
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {data.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">1 * ${item.price}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
