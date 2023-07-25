import { Route, Routes } from "react-router-dom";
import "./App.css";
import chatLogo from "../src/assets/images/gifts.png";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import WhyPage from "./pages/WhyPage";
import ContactPage from "./pages/ContactPage";
import TestimonialPage from "./pages/TestimonialPage";
import LoginPage from "./pages/LoginPage";
import Footer from "./components/Shared/Footer";
import ScrollToTop from "react-scroll-to-top";
import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";
import RegistrationPage from "./pages/RegistrationPage";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/Shared/Header";

function App() {
  return (
    <>
      <div className="hero_area">
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/why" element={<WhyPage />} />
        <Route path="/testimonial" element={<TestimonialPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cart" element={<HomePage />} />
        <Route path="/registration" element={<RegistrationPage />} />
      </Routes>
      <Footer />
      <ScrollToTop
        smooth
        color="#E12454"
        viewBox="0 0 250 250"
        style={{ right: 30, bottom: 100 }}
      />
      <WhatsAppWidget
        headerIcon={chatLogo}
        companyName="Giftos"
        chatMessage="Hello! 👋🏼 welcome to Giftos Support. How can we assist you?"
        phoneNo="8801643282147"
        autoOpen={false}
        autoOpenTimer={0}
        iconColor="#E12454"
      />
      <ToastContainer/>
    </>
  );
}

export default App;
