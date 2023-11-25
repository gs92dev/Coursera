import { useState } from "react";
import { validateEmail } from "./utils";

const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};

export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");

  const getIsFormValid = () => {
    // Implement this function
    return false;
  };

  const clearForm = () => {
    setFirstName(" ")
    setLastName(" ")
    setPassword(" ")
    setRole(" ")
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Account created!");
    clearForm();
  };
  const handleName = (e) => {
    setFirstName(e.target.firstName)
  }

  const handleLastName = (e) => {
    setLastName(e.target.lastName)
  }
  const handleEmail = (e) => {
    setEmail(e.target.email)
  }


  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>
          <div className="Field">
            <label>
              First name <sup>*</sup>
            </label>
            <input value={firstName} onChange={handleName} placeholder="First name" />
          </div>
          <div className="Field">
            <label>Last name</label>
            <input value={lastName} onChange={handleLastName} placeholder="Last name" />
          </div>
          <div className="Field">
            <label>
              Email address <sup>*</sup>
            </label>
            <input value={email} onChange={handleEmail} placeholder="Email address" />
          </div>
          <div className="Field">
            <label>
              Password <sup>*</sup>
            </label>
            <input placeholder="Password" />
          </div>
          <div className="Field">
            <label>
              Role <sup>*</sup>
            </label>
            <select>
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <button type="submit" disabled={!getIsFormValid()}>
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  );
}


