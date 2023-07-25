

// import shopImg from '../../assets/images/p1.png'

export default function ShopItem(props) {
  const { name, img, price } = props.singleShopItem || {};
  return (
    <>
   
    <div className="col-sm-6 col-md-4 col-lg-3">
      <div className="box">
        <a href="">
          <div className="img-box">
            <img src={img} alt="" />
          </div>
          <div className="detail-box">
            <h6>{name}</h6>
            <h6>
              Price
              <span className="mx-3">${price}</span>
            </h6>
          </div>
          <div className="new">
            <span>New</span>
          </div>
        </a>
      </div>
    </div>
    </>
  );
}
