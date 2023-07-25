import Slider from '../components/HomePage/Slider'
import Shop from '../components/HomePage/Shop'
import Saving from '../components/HomePage/Saving'
import WhyShop from '../components/HomePage/WhyShop'
import Gift from '../components/HomePage/Gift'
import ContactUs from '../components/HomePage/ContactUs'
import Client from '../components/HomePage/Client'
import Info from '../components/HomePage/Info'
import '../index.css'

export default function HomePage() {
  return (
    <div>
  {/* <!-- start hero area --> */}
  <div className="hero_area">
    {/* <Header/> */}
    <Slider/>
  </div>
  {/* <!-- end hero area --> */}

  {/* <!-- shop section --> */}

  <Shop/>

  {/* <!-- end shop section --> */}

  {/* <!-- saving section --> */}

  <Saving/>

  {/* <!-- end saving section --> */}

  {/* <!-- why section --> */}

  <WhyShop/>

  {/* <!-- end why section --> */}


  {/* <!-- gift section --> */}

  <Gift/>


  {/* <!-- end gift section --> */}


  {/* <!-- contact section --> */}

  <ContactUs/>

  {/* <!-- end contact section --> */}

  {/* <!-- client section --> */}
  <Client/>
  {/* <!-- end client section --> */}

  {/* <!-- info section --> */}

 <Info/>

  {/* <!-- end info section --> */}

  {/* <!-- footer section --> */}
{/* <Footer/> */}
    {/* <!-- footer section --> */}


  

</div>
  )
}
