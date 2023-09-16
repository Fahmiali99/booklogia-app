import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../../redux/authSlice";
import heroImage from "../../assets/images/hero.png";

function Register() {
  const [email, setEmail] = useState("");
  const [nama, setNama] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");

  const dispatch = useDispatch();
  const history = useHistory();

  const isFormValid = nama !== "" && email !== "" && password !== "";

  const togglePassword = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const userData = {
      nama: nama,
      email: email,
      password: password,
    };

    if (isFormValid) {
      dispatch(login({ user: userData }));
      toast.success("Register berhasil");
      history.push("/");
    } else {
      toast.error("Lengkapi semua field");
    }
  };

  return (
    <div className="container mx-auto flex items-center max-w-7xl px-4 min-h-[calc(100vh-3rem)] lg:min-h-[calc(90vh-3rem)] pb-16 lg:pb-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <div className="lg:pr-10">
          <div className="py-10">
            <h1 className="text-dark  font-bold text-2xl  md:text-3xl lg:text-4xl xl:text-4xl ">
              Let's Join With Us and
            </h1>
            <h1 className="text-dark  font-bold text-2xl  md:text-3xl lg:text-4xl xl:text-4xl ">
              Make Your Own Reading Buddy !
            </h1>
          </div>
          <form className="form-login space-y-4">
            <div className="form-group">
              <label className="font-semibold" htmlFor="exampleInputusername1">
                Username <span className="text-red-500">*</span>{" "}
              </label>
              <input
                type="username"
                className="input input-bordered w-full rounded-lg"
                id="exampleInputusername1"
                aria-label="input-username"
                required
                onChange={(e) => setNama(e.target.value)}
              />
            </div>

            <div className="form-group my-4">
              <label className="font-semibold" htmlFor="exampleInputEmail1">
                Email <span className="text-red-500">*</span>{" "}
              </label>
              <input
                type="email"
                className="input input-bordered w-full rounded-lg"
                id="exampleInputEmail1"
                aria-label="input-email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group my-4">
              <label className="font-semibold" htmlFor="exampleInputPassword1">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                type={passwordType}
                className="input input-bordered w-full rounded-lg"
                id="exampleInputPassword1"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="flex items-center space-x-2 pt-2">
                <input
                  type="checkbox"
                  checked={passwordType === "text"}
                  onChange={togglePassword}
                />
                <label>Show Password</label>
              </div>
            </div>
            <button
              type="submit"
              className={`btn btn-danger px-10 py-2.5 ${
                isFormValid
                  ? "bg-danger text-white rounded-lg"
                  : "opacity-70 bg-danger text-white rounded-lg"
              }`}
              onClick={handleRegister}
              disabled={!isFormValid}
            >
              SIGN UP
            </button>
            <p className="mt-3 text-sm text-secondary">
              By signing up for BOOKLOGIA you agree to BOOKLOGIA’s Term’s of
              Service & Privacy Policy.
            </p>
          </form>
        </div>
        <div className="mx-auto md:mx-0">
          <img src={heroImage} className="img-fluid" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Register;
