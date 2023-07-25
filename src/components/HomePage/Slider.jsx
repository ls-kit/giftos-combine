import "../../index.css";
import carouselImage from "../../assets/images/slider-img.png";

export default function Slider() {
  // const carouseItems = [
  //   {
  //     titleOne:"Welcome To Our",
  //     titleTwo:"Gift Shop",
  //     text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quisquam esse tempora voluptates, aspernatur voluptatibus deserunt eum unde accusamus facilis quasi accusantium omnis autem ab repellat obcaecati laboriosam dignissimos error?",
  //     img:carouselImage
  //   },
  //   {
  //     titleOne:"Welcome To Our",
  //     titleTwo:"Gift Shop",
  //     text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quisquam esse tempora voluptates, aspernatur voluptatibus deserunt eum unde accusamus facilis quasi accusantium omnis autem ab repellat obcaecati laboriosam dignissimos error?",
  //     img:carouselImage
  //   },
  //   {
  //     titleOne:"Welcome To Our",
  //     titleTwo:"Gift Shop",
  //     text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quisquam esse tempora voluptates, aspernatur voluptatibus deserunt eum unde accusamus facilis quasi accusantium omnis autem ab repellat obcaecati laboriosam dignissimos error?",
  //     img:carouselImage
  //   },
  // ]

  return (
    <div>
      <section className="slider_section">
        <div className="slider_container">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-7">
                <div className="detail-box">
                  <h1>
                    Welcome to our <br />
                    Gift Shop
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Porro quisquam esse tempora voluptates, aspernatur
                    voluptatibus deserunt eum unde accusamus facilis quasi
                    accusantium omnis autem ab repellat obcaecati laboriosam
                    dignissimos error?
                  </p>
                  <a href="">Contact Us</a>
                </div>
              </div>
              <div className="col-md-5 ">
                <div className="img-box">
                  <img src={carouselImage} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
