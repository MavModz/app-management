import React, { useState } from 'react';
import { Phone } from 'lucide-react';
import { toast, ToastContainer } from "react-toastify";
import Image from "../../assets/images/astronaut.jpg";
import { registerfunction } from "../../Services/api";
import "./register.css";

function Register() {
  const [name, setName] = useState('');
  const [health, setHealth] = useState('');
  const [phone, setPhone] = useState('');
  const [birth, setBirth] = useState('');
  const [gender, setGender] = useState('');
  const [mrn, setMrn] = useState('');
  const [isLoading, setIsLoading] = useState(false); 


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log("Clicked Successfully");
    try {
      const response = await registerfunction(name, health, phone, birth, gender, mrn);
      console.log(response);
      toast.success("Data saved successfully"); 
    }

    catch (error) {
      console.log(error);
      toast.error("Form not Submitted");
    }
  }


  return (
    <>
      <ToastContainer />
      <div className="register-container">
        <span className="register-centering">
          <form className="register-my-form">
            <span className="register-welcome-row">
              <img src={Image} className="register-welcome" alt="main logo img" />
              <h1>Register</h1>
            </span>

            {/* NAME FIELD */}
            <div className="text-field">
              <label htmlFor="text">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Name"
                autoComplete="off"
                required
              />
              <Phone color="#1D3A70" strokeWidth={1.5} />
            </div>

            {/* PHONE FIELD */}
            <div className="text-field">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter Phone"
                maxLength={10}
                autoComplete="off"
                required
              />
              <Phone color="#1D3A70" strokeWidth={1.5} />
            </div>

            {/* DATE OF BIRTH FIELD */}
            <div className="text-field">
              <label htmlFor="date">DOB</label>
              <input
                type="date"
                id="birth"
                name="birth"
                value={birth}
                onChange={(e) => setBirth(e.target.value)}
                placeholder="mm/dd/yyyy"
                autoComplete="off"
                required
              />
              <Phone color="#1D3A70" strokeWidth={1.5} />
            </div>

            {/* HEALTH CARD NUMBER */}
            <div className="text-field">
              <label htmlFor="text">Health Number</label>
              <input
                type="text"
                id="health"
                name="health"
                value={health}
                onChange={(e) => setHealth(e.target.value)}
                placeholder="Health Card No."
                autoComplete="off"
                required
              />
              <Phone color="#1D3A70" strokeWidth={1.5} />
            </div>

            {/* MRN NUMBER */}
            <div className="text-field">
              <label htmlFor="text">MRN Number</label>
              <input
                type="text"
                id="mrn"
                name="mrn"
                value={mrn}
                onChange={(e) => setMrn(e.target.value)}
                placeholder="Health Card No."
                autoComplete="off"
                required
              />
              <Phone color="#1D3A70" strokeWidth={1.5} />
            </div>
            <div className="text-field-register radio">
              <label className="radio-label">
                <input type="radio" name="gender" id="male" value="male" checked={gender === 'male'} onChange={(e) => setGender(e.target.value)} />
                <span className="radio-button"></span> Male
              </label>
              <label className="radio-label">
                <input type="radio" name="gender" id="female" value="female" checked={gender === 'female'} onChange={(e) => setGender(e.target.value)} />
                <span className="radio-button"></span> Female
              </label>
              <label className="radio-label">
                <input type="radio" name="gender" id="others" value="others" checked={gender === 'others'} onChange={(e) => setGender(e.target.value)} />
                <span className="radio-button"></span> Others
              </label>
            </div>
            <div className="Verify_Otp">
              <button
                type="submit"
                className="my-form__button"
                onClick={handleSubmit}
                disabled={isLoading} // Disable button while loading
              >
                {isLoading ? 'Loading...' : 'Register Patient'}
              </button>
            </div>
          </form>
          <div id="sign-in-button"></div>
        </span>
      </div>
    </>
  )
}

export default Register