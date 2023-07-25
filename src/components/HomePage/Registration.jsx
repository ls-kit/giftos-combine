import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Registration() {
  const navigate = useNavigate()
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleRegistration = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const registrationData = { name, email, password };
    // console.log(registrationData);

    // Save registration data to local storage
    const existingData = JSON.parse(localStorage.getItem("registrationData"));
    if (
      existingData &&
      existingData.email === email &&
      existingData.password === password
    ) {
      // Login success
      // Show a success toast or alert
     toast.error("You already registered. Please login");
     nameRef.current.value =''
     emailRef.current.value =''
     passwordRef.current.value =''
     navigate("/login")
    } else {
      // User is not registered, save registration data to local storage
     localStorage.setItem(
        "registrationData",
        JSON.stringify(registrationData)
      );
    toast.success("Successfully registered!. please login now!")
     nameRef.current.value =''
     emailRef.current.value =''
     passwordRef.current.value =''
    navigate("/login")
      // Optionally, you can redirect to another page after saving the data.
      // For example, after successful registration, redirect to a "success" page:
      // window.location.href = "/success";
    }
  };

  return (
    <div>
      <section className="contact_section ">
        <div className="container px-0">
          <div className="heading_container ">
            <h2 className="">Registration</h2>
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
              <form onSubmit={handleRegistration}>
                <div>
                  <input type="text" placeholder="Name" ref={nameRef} />
                </div>
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
                  Already have an account? please{" "}
                  <Link to={"/login"} className="text-success">
                    Login
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
