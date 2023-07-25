import axios from "axios";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login() {
  const navigate = useNavigate()
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleLogin = async(e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const loginData = {email,password,}
    console.log(loginData)
    const res = await axios.post('http://localhost:5000/login',loginData )
    console.log(res);
    if(res.data.error){
      toast.error(res.data.error)
    }
    else{
      console.log(res.data)
      const successText = `Welcome back <strong> ${res.data.user.name} </strong>`
      localStorage.setItem("userData",JSON.stringify(res?.data.user))
      navigate("/")
      location.reload()
      toast.success(<div dangerouslySetInnerHTML={{ __html: successText }} />)
    }
    
  };

  return (
    <div>
      <section className="contact_section ">
        <div className="container px-0">
          <div className="heading_container ">
            <h2 className="">Login</h2>
          </div>
        </div>
        <div className="container container-bg">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-7 col-md-6 px-0">
              <div className="map_container">
                <div className="map-responsive">
                  <img
                    src="https://img.freepik.com/free-vector/sign-concept-illustration_114360-5425.jpg?w=2000"
                    alt=""
                    width={"100%"}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-5 px-0">
              <form onSubmit={handleLogin}>
                {/* <div>
              <input type="text" placeholder="Name" />
            </div> */}
                <div>
                  <input type="email" placeholder="Email" ref={emailRef} />
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="******"
                    ref={passwordRef}
                  />
                </div>
                {/* <div>
              <input type="text" className="message-box" placeholder="Message" />
            </div> */}
                <h6>
                  Do not have an account? please{" "}
                  <Link to={"/registration"} className="text-success">
                    Register
                  </Link>
                </h6>
                <div className="d-flex ">
                  <button type="submit">SEND</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
