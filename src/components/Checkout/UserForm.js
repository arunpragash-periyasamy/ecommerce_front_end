import { useEffect, useState } from "react";
import { useCapitalize, useIsValidEmail, useValidateName, useValidatePhoneNumber } from "../../utils/customHooks";
const UserForm = ({validUserForm, formData, userData}) => {
  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  useEffect(() => {
    const data= {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber
    }
    const validateForm = () =>{
      formData(data);
      return useValidateName(firstName) && lastName.length > 0 && useIsValidEmail(email) && useValidatePhoneNumber(phoneNumber)
    }
    validUserForm(validateForm);
  }, [firstName, lastName, email, phoneNumber]);
  useEffect(()=>{
    if(userData){
      setFirstName(userData.firstName);
      setLastName(userData.lastName)
      setEmail(userData.email);
      setPhoneNumber(userData.phoneNumber);
    }
  },[userData])
  return (
    <div className="row">
      <div className="col-6 mb-3">
        <p className="mb-0">First name</p>
        <div className="form-outline">
          <input
            placeholder="Muthupandi"
            className="form-control"
            value={firstName}
            onChange={(e) => setFirstName(useCapitalize(e.target.value))}
          />
        </div>
      </div>

      <div className="col-6">
        <p className="mb-0">Last name</p>
        <div className="form-outline">
          <input
            placeholder="Kottai di"
            className="form-control"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </div>

      <div className="col-6 mb-3">
        <p className="mb-0">Phone</p>
        <div className="form-outline">
          <input
            placeholder="9876543210"
            className="form-control"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value.substring(0,10))}
          />
        </div>
      </div>

      <div className="col-6 mb-3">
        <p className="mb-0">Email</p>
        <div className="form-outline">
          <input
            placeholder="dhanalakshmi@muthupandi.com"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value.toLowerCase())}
          />
        </div>
      </div>
    </div>
  );
};

export default UserForm;
