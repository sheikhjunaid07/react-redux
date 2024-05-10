import React from "react";

export default function Home(props) {
  console.log("home", props);
  return (
    <div>
      <h1>Home Component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img
            src="https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iphone13_hero_09142021_inline.jpg.large.jpg"
            alt="Data Not Found"
          />
        </div>
        <div className="text-wrapper item">
          <span>IPhone</span>
          <span>Price: $1800.00</span>
        </div>
        <div className="btn-wrapper item">
          <button
            onClick={() => {
              props.addToCartHandler({ name: "Iphone 12", price: 1800 });
            }}>Add to Cart</button>
            <button className="remove-btn"
            onClick={()=>{
              props.removeToCartHandler()
            }}>Remove to cart</button>
        </div>
      </div>
    </div>
  );
}
