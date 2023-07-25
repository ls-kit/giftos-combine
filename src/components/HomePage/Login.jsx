import { useRef } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    // const loginData = {email,password}
    // console.log(loginData)
    const existingData = JSON.parse(localStorage.getItem("registrationData"));
    if (
      existingData &&
      existingData.email === email &&
      existingData.password === password
    ) {
      // Login success
      // Show a success toast or alert
      const welcomeMessage = `Login success! Welcome back <strong>${existingData.name}</strong>!`;
      toast.success(
        <div dangerouslySetInnerHTML={{ __html: welcomeMessage }} />
      );
    } else {
      // Login failed, show an alert
      toast.error("Invalid email or password. Please register first.");
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
