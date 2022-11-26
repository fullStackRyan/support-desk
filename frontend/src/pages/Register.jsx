import { useState } from "react";
import { toast } from "react-toastify";
import { FaUser } from "react-icons/fa";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const handleOnChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    if (password !== password2) {
      toast.error("Passwords do not match");
    }
  };

  return (
    <>
      <section className="heading">
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>
      <section className="form">
        <form onSubmit={handleOnSubmit}>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              id="name"
              name="name"
              required
              value={name}
              onChange={handleOnChange}
              placeholder="Enter your name"
            />
          </div>
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
            <input
              className="form-control"
              type="password"
              id="password2"
              required
              name="password2"
              value={password2}
              onChange={handleOnChange}
              placeholder="Confirm password"
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

export default Register;
