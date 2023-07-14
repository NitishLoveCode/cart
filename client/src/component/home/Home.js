import React, { useState } from "react";
import { useContext } from "react";
import { All_products } from "../../App";
import "./home.css";

export default function Home() {
  const {data} = useContext(All_products);
  const [cart,setcart]=useState([])
  const add_to_cart=(e)=>{
    const product=data.find((curEle)=>{
        return(
            curEle.id===e
        )
    })
    setcart([...cart,product])
    localStorage.setItem("cart",JSON.stringify(cart))
  }
  return (
    <>
      <div className="product_info">
        {data?.map((Ele) => {
          return (
            <>
              <div className="single_product">
                <div className="product_img">
                  <div className="align_product">
                    <img src={Ele.image} alt="" />
                    <div className="img_info">
                      <h3>{Ele.title}</h3>
                      <p>Price: {Ele.price}</p>
                      <p>
                        Rating: {Ele.rating.count} star {Ele.rating.rate}
                      </p>
                      <p>Catorery: {Ele.category}</p>
                    </div>
                  </div>
                  <div className="add_to_cart">
                  <button onClick={()=>add_to_cart(Ele.id)}>Add to Cart</button>
                  <button>By now</button>
                </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
