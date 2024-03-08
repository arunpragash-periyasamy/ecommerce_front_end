import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCapitalize, useIsValidEmail, useIsValidPassword, useValidateName } from "../../utils/customHooks";
import { alertMessage } from "../../utils/customHooks";
import axiosInstance from "../../utils/axiosInstance";
const SignupForm = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validUserName, setValidUserName] = useState(true);
  const [validEmail, setValidEmail] = useState(true);
  const [validPassword, setValidPassword] = useState(true);
  const [validConfirmPassword, setValidConfirmPassword] = useState(true);
  
  const validateConfirmPassword = () =>{
    return password === confirmPassword;
  }
  const validateForm = async () => {
    setValidEmail(useIsValidEmail(email));
    setValidPassword(useIsValidPassword(password));
    setValidConfirmPassword(validateConfirmPassword());
    setValidUserName(useValidateName(userName));
  };
  const handleForm = async (e) => {
    e.preventDefault();
    await validateForm();
    if (validUserName && validEmail && validPassword && validConfirmPassword) {
      try {
      const response = await axiosInstance.post("/authentication/signup", {userName:userName, email:email, password:password})
      alertMessage("Sign Up success", "success");
      navigate("/login");
      }catch(error){
        console.log(error)
        const message = error?.response?.data?.message;
        alertMessage(message, "error");
      }
    }
  };
  return (
    <form>
      <div className="d-flex align-items-center mb-3 pb-1">
        <i className="fas fa-cubes fa-2x me-3" style={{ color: "#ff6219" }}></i>
        <span className="h1 fw-bold mb-0">GUVI</span>
      </div>

      <h5
        className="fw-normal mb-3 pb-3"
        style={{ letterSpacing: "1px" }}
        id="headingContent"
      >
        Signup into your account
      </h5>

      <div className="form-outline mb-4">
        <label className="form-label" htmlFor="userName">
          Username
        </label>
        <input
          type="text"
          id="userName"
          className="form-control form-control-lg"
          value={userName}
          onChange={(e) => setUserName(useCapitalize(e.target.value))}
          onBlur={()=>{setValidUserName(useValidateName(userName))}}
        />
        <span
          id="userNameError"
          className={`error ${validUserName ? "d-none" : ""}`}
        >
          username should contains only alphabets
        </span>
      </div>
      <div className="form-outline mb-4">
        <label className="form-label" htmlFor="emailId">
          Email address
        </label>
        <input
          type="email"
          id="emailId"
          className="form-control form-control-lg"
          value={email}
          onChange={(e) => setEmail(e.target.value.toLowerCase())}
          onBlur={()=>{setValidEmail(useIsValidEmail(email))}}
        />
        <span id="emailError" className={`error ${validEmail ? "d-none" : ""}`}>
          Invalid Email Id
        </span>
      </div>

      <div className="form-outline mb-4">
        <label className="form-label" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="form-control form-control-lg"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={()=>{setValidPassword(useIsValidPassword(password))}}
        />
        <span
          id="passwordError"
          className={`error ${validPassword ? "d-none" : ""}`}
        >
          should contain one number, special character, capital letter, small
          letter,8 characters
        </span>
      </div>

      <div className={`form-outline mb-4 `}>
        <label className="form-label" htmlFor="confirmPassword">
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          className="form-control form-control-lg"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          onBlur={()=>{setValidConfirmPassword(validateConfirmPassword())}}
        />
        <span
          id="confirmPasswordError"
          className={`error ${validConfirmPassword ? "d-none" : ""}`}
        >
          Password did not match
        </span>
      </div>

      <div className="pt-1 mb-4">
        <button
          className="btn btn-dark btn-lg btn-block"
          type="button"
          id="buttonContent"
          onClick={handleForm}
        >
          Sign Up
        </button>
      </div>

      <p
        className="mb-5 pb-lg-2"
        style={{ color: "#393f81" }}
        id="accountContent"
      >
        Already have an account?{" "}
        <Link to="/login" style={{ color: "#393f81" }}>
          Loin here
        </Link>
      </p>

      <Link to="#!" className="small text-muted">
        Terms of use.
      </Link>
      <Link to="#!" className="small text-muted">
        Privacy policy
      </Link>
    </form>
  );
};

export default SignupForm;


// 72951