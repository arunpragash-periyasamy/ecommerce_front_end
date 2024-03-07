import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useIsValidEmail, useIsValidPassword } from "../../utils/customHooks";
import axiosInstance from "../../utils/axiosInstance";
import { setUser } from "../../utils/Redux/userSlice";
import { useDispatch } from "react-redux";
import { alertMessage, updateAxiosToken } from "../../utils/customHooks";
import { updateCart } from "../../utils/Redux/cartSlice";
const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const [vaildPassword, setValidPassword] = useState(true);
  const handleForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/authentication/login", {
        email: email,
        password: password,
      });
      updateAxiosToken(response?.data?.user?.token);
      dispatch(setUser(response?.data?.user));
      if (response.data.cart) {
        dispatch(updateCart(response.data.cart));
      }
      alertMessage("Login successful", "success");
      navigate("/");
    } catch (error) {
      console.log(error);
      const message = error?.response?.data?.message;
      console.log(message);
      if (message === "Invalid password") {
        setValidPassword(false);
      }
      alertMessage(message, "error");
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
        Login into your account
      </h5>

      <div className="form-outline mb-4">
        <label className="form-label" htmlFor="emailId">
          Email address
        </label>
        <input
          type="email"
          id="emailId"
          className="form-control form-control-lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => {
            setValidEmail(useIsValidEmail(email));
          }}
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
          onBlur={() => {
            setValidPassword(useIsValidPassword(password));
          }}
        />
        <span
          id="passwordError"
          className={`error ${vaildPassword ? "d-none" : ""}`}
        >
          Incorrect Password
        </span>
      </div>

      <div className="pt-1 mb-4">
        <button
          className="btn btn-dark btn-lg btn-block"
          type="button"
          id="buttonContent"
          onClick={handleForm}
        >
          Log In
        </button>
      </div>
      <p
        className="mb-5 pb-lg-2"
        style={{ color: "#393f81" }}
        id="accountContent"
      >
        Don't have an account?{" "}
        <Link to="/signup" style={{ color: "#393f81" }}>
          Register here
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

export default LoginForm;
