import React from 'react'

export default function Header(props) {
    console.log("Header", props);
  return (
    <div>
      <div className="add-to-cart">
      <span className="cart-count">{props.data.length}</span>
        <img
          src="https://img.lovepik.com/element/45004/5446.png_860.png"
          alt="Data Not Found"
        />
      </div>
    </div>
  )
}
