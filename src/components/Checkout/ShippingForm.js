import { useEffect, useState } from "react";

const ShippingForm = ({ validShippingForm, formData, shippingData }) => {
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [house, setHouse] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [message, setMessage] = useState("");
  const data = {
    address,
    city,
    house,
    postalCode,
    message,
  };
  useEffect(() => {
    const validateForm = () => {
      formData(data);
      return (
        address.length > 0 &&
        city.length > 0 &&
        house.length > 0 &&
        postalCode.length === 6
      );
    };
    validShippingForm(validateForm);
  }, [address, city, house, postalCode, message]);
  useEffect(()=>{
    if(shippingData){
      setAddress(shippingData.address);
      setCity(shippingData.city);
      setHouse(shippingData.house);
      setPostalCode(shippingData.postalCode);
    }
  },[shippingData])
  return (
    <div className="row">
      <div className="col-sm-8 mb-3">
        <p className="mb-0">Address</p>
        <div className="form-outline">
          <input
            placeholder="Address"
            className="form-control"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
      </div>

      <div className="col-sm-4 mb-3">
        <p className="mb-0">City</p>
        <input
          placeholder="City"
          className="form-control"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>

      <div className="col-sm-4 col-6 mb-3">
        <p className="mb-0">House</p>
        <div className="form-outline">
          <input
            placeholder="Type here"
            className="form-control"
            value={house}
            onChange={(e) => setHouse(e.target.value)}
          />
        </div>
      </div>

      <div className="col-sm-4 col-6 mb-3">
        <p className="mb-0">Postal code</p>
        <div className="form-outline">
          <input
            className="form-control"
            placeholder="636122"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value.substring(0,6))}
          />
        </div>
      </div>
      <div className="mb-3">
        <p className="mb-0">Message to seller</p>
        <div className="form-outline">
          <textarea
            className="form-control"
            value={message}
            onChange={(e)=> setMessage(e.target.value)}
            rows="2"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default ShippingForm;
