import { useEffect, useState } from "react";
import ShopItem from "./ShopItem";
import { Link } from "react-router-dom";

export default function Shop() {


  const [shopItems, setShopItems] = useState([])

  useEffect(() => {
    fetch("./shopItems.json")
    .then(res=>res.json())
    .then(data=> setShopItems(data))
  }, [])
  
  // console.log(shopItems)
  return (
    <div>
      <section className="shop_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Latest Products</h2>
          </div>
          <div className="row">
            {
              shopItems?.map(singleShopItem=>{
                console.log(singleShopItem);
                return (
                  <ShopItem singleShopItem={singleShopItem} key={singleShopItem?.id}/>
                )
              })
            }
            
            
          </div>
          <div className="btn-box">
            <Link to={'/shop'}>View All Products</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
