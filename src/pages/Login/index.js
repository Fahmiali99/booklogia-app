import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import userdata from "../../utils/users.json";
import { toast } from "react-toastify";
import { login } from "../../redux/authSlice";
import heroImage from "../../assets/images/hero.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");

  const dispatch = useDispatch();
  const history = useHistory();

  const isFormValid = email.length > 0 && password.length > 0;

  const tooglePassword = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const userData = userdata.find((user) => user.email === email);

    if (userData) {
      if (userData.password !== password) {
        toast.error("Login error: Check password");
      } else {
        dispatch(login({ user: userData }));
        toast.success("Login success");
        history.push("/");
      }
    } else {
      toast.error("Login error: Check email");
    }
  };

  return (
    <div className="container mx-auto flex items-center max-w-7xl px-4 min-h-[calc(80vh-3rem)]">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
        <div className="mx-auto md:mx-0">
          <h1 className="text-2xl font-bold mb-3">Let&apos;s Meet Up With</h1>
          <h1 className="text-2xl font-bold mb-3">Your Reading Buddy !</h1>
          <form className="space-y-4">
            <div>
              <label className="font-semibold" htmlFor="exampleInputEmail1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                autoFocus
                type="email"
                className="input input-bordered w-full rounded-lg"
                id="exampleInputEmail1"
                aria-label="input-email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <label className="font-semibold" htmlFor="exampleInputPassword1">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                type={passwordType}
                className="input input-bordered w-full rounded-lg"
                id="exampleInputPassword1"
                aria-label="input-password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={passwordType === "text"}
                  onChange={tooglePassword}
                />
                <label className="text-sm">Show Password</label>
              </div>
            </div>
            <input
              type="submit"
              className={`btn btn-danger px-10 py-2.5 ${
                isFormValid
                  ? "bg-danger text-white rounded-lg"
                  : "opacity-70 bg-danger text-white rounded-lg"
              }`}
              disabled={!isFormValid}
              value="SIGN IN"
              onClick={handleLogin}
            />
          </form>
        </div>
        <div className="mx-auto md:mx-0">
          <img src={heroImage} className="img-fluid" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Login;
