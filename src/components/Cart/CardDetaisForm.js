import { useState, useEffect } from "react";
import { alertMessage, useCapitalize } from "../../utils/customHooks";
import {  useSelector } from "react-redux";
import axiosInstance from "../../utils/axiosInstance";
import { useNavigate } from "react-router-dom";
const CardDetailsForm = ({ validate, setCardData }) => {
  const navigate = useNavigate();
  const userName = useSelector((store) => store.user.userName);
  const [cardHolderName, setCardHolderName] = useState(userName);
  const [cardNumber, setCardNumber] = useState("");
  const [expiration, setExpiration] = useState("");
  const [cvv, setcvv] = useState("");
  const [validCardHolderName, setValidCardHolderName] = useState(false);
  const [validCardNumber, setValidCardNumber] = useState(false);
  const [validExpiration, setValidExpiration] = useState(false);
  const [validCVV, setValidCVV] = useState(false);
  const data = { cardHolderName, cardNumber, expiration, cvv };
  const handleCardHolderName = (e) => {
    let input = useCapitalize(e.target.value);
    input = input.replace(/[^a-zA-Z\s]/g, "");
    setCardHolderName(input);
    setValidUserName(true);
  };
  const handleExpirationChange = (e) => {
    let input = e.target.value;
    input = input.replace(/[^0-9]/g, "").substring(0, 4);
    const firstTwoDigits = input.substring(0, 2);
    if (parseInt(firstTwoDigits, 10) > 12) {
      input = "12" + input.substring(2);
    }
    input = input.replace(/^(\d{2})/, "$1/");
    setExpiration(input);
  };
  const handleCardNumberChange = (e) => {
    let input = e.target.value;
    input = input.replace(/[^0-9]/g, "").substring(0, 16);
    input = input.replace(/(\d{4})(?=\d)/g, "$1 ");
    setCardNumber(input);
  };
  const handleCVV = (e) => {
    let input = e.target.value;
    input = input.replace(/[^0-9]/g, "");
    setcvv(input.substring(0, 3));
  };

  useEffect(() => {
    getCardDetails();
  }, []);

  const getCardDetails = async () => {
    try {
      const response = await axiosInstance.get("/cardDetails");
      details = response?.data?.cardDetails;
      if (details) {
        setCardHolderName(details.cardHolderName);
        setCardNumber(details.cardNumber);
        setExpiration(details.expiration);
        setcvv(details.cvv);
      }
    } catch (err) {
      if (err?.response?.status === 401) {
        alertMessage("Authentication expires", "error");
        navigate("/login");
      }
    }
  };

  useEffect(() => {
    const validateForm = () => {
      setValidCardHolderName(cardHolderName?.length === 0 ? false : true);
      setValidCVV(cvv?.length === 3);
      setValidCardNumber(cardNumber?.length === 19);
      setValidExpiration(expiration?.length === 5);
      setCardData(data);
      return (
        validCVV && validCardHolderName && validCardNumber && validExpiration
      );
    };
    console.log("Inside useeq");
    validate(validateForm);
  }, [
    cardHolderName,
    cardNumber,
    expiration,
    cvv,
    validCVV,
    validExpiration,
    validCardHolderName,
    validCardNumber,
  ]);
  return (
    <form className="mt-4">
      <div className="form-outline form-white mb-4">
        <label className="form-label" htmlFor="typeName">
          Cardholder's Name
        </label>
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="Cardholder's Name"
          value={cardHolderName}
          onChange={handleCardHolderName}
        />
      </div>

      <div className="form-outline form-white mb-4">
        <label className="form-label">Card Number</label>
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="1234 5678 9012 3457"
          value={cardNumber}
          onChange={handleCardNumberChange}
        />
      </div>

      <div className="row mb-4">
        <div className="col-md-6">
          <div className="form-outline form-white">
            <label className="form-label" htmlFor="typeExp">
              Expiration
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="MM/YY"
              value={expiration}
              onChange={handleExpirationChange}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-outline form-white">
            <label className="form-label">Cvv</label>
            <input
              type="password"
              className="form-control form-control-lg"
              placeholder="&#9679;&#9679;&#9679;"
              value={cvv}
              onChange={handleCVV}
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default CardDetailsForm;
