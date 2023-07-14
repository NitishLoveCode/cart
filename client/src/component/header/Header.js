import React, { useState } from "react";
import "./header.css";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Header() {
    const [hide,sethide]=useState("hide")
    const open_cart=()=>{
        if(hide==="hide"){
            sethide("")
        }else{
            sethide("hide")
        }
    }

  return (
    <>
      <header>
        <nav>
          <div className="logo">Shopping Cart</div>
          <div className="menu">
            <div className="cart_info">
              <p>No of items:</p>
              <p>Sub Totle:</p>
            </div>
            <AiOutlineShoppingCart onClick={open_cart} className="cart_icon"/>
          </div>
        </nav>
      </header>

      <div className={`shopping_items ${hide}`}>
        <p>this is shoppin items</p>
      </div>
    </>
  );
}
