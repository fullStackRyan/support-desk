import { useState } from "react";
import { FaSignInAlt } from "react-icons/fa";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleOnChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Please Login</p>
      </section>
      <section className="form">
        <form onSubmit={handleOnSubmit}>
          <div className="form-group">
            <input
              className="form-control"
              type="email"
              required
              id="email"
              name="email"
              value={email}
              onChange={handleOnChange}
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="password"
              id="password"
              required
              name="password"
              value={password}
              onChange={handleOnChange}
              placeholder="Enter password"
            />
          </div>
          <div className="form-group">
            <button className="btn btn-block">Submit</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;
