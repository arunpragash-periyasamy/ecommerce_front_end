import { useState, useEffect } from "react";
import {
  alertMessage,
  useCapitalizeFirstLetter,
} from "../../utils/customHooks";
import { UseSelector, useSelector } from "react-redux";
const CardDetailsForm = ({ validate }) => {
  const userName = useSelector((store) => store.user.userName);
  const [cardHolderName, setCardHolderName] = useState(userName);
  const [cardNumber, setCardNumber] = useState("");
  const [expiration, setExpiration] = useState("");
  const [cvv, setcvv] = useState("");
  const [validCardHolderName, setValidCardHolderName] = useState(false);
  const [validCardNumber, setValidCardNumber] = useState(false);
  const [validExpiration, setValidExpiration] = useState(false);
  const [validCVV, setValidCVV] = useState(false);
  const handleCardHolderName = (e) => {
    let input = useCapitalizeFirstLetter(e.target.value);
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

  const validateForm = () => {
    setValidCardHolderName(cardHolderName.length === 0 ? false : true);
    setValidCVV(cvv.length === 3);
    setValidCardNumber(cardNumber.length === 19);
    setValidExpiration(expiration.length === 5);
    return (validCVV && validCardHolderName && validCardNumber && validExpiration)
  };

  useEffect(() => {
    validate(validateForm);
  }, [validate, validateForm]);
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
