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

  const validateForm = () => {
    return email.length > 0 && password.length > 0;
  };

  const tooglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const dataparse = userdata.map((item) => {
      return item;
    });

    const userData = dataparse.find((user) => user.email === email);

    if (userData) {
      if (userData.password !== password) {
        toast.error("login error periksa Password");
      } else {
        dispatch(login({ user: userData }));
        toast.success("login success");
        history.push("/");
      }
    } else {
      toast.error("login error periksa Email");
    }
  };

  return (
    <div className="container mx-auto flex items-center max-w-7xl px-4 min-h-[calc(100vh-3rem)] lg:min-h-[calc(80vh-3rem)]">
      <div className="  grid grid-cols-1 md:grid-cols-2 items-center gap-4">
        <div className="">
          <div className="py-10 ">
            <h1 className="text-dark  font-bold text-2xl  md:text-3xl lg:text-4xl xl:text-4xl ">
              Let&apos;s Meet Up With
            </h1>
            <h1 className="text-dark  font-bold text-2xl  md:text-3xl lg:text-4xl xl:text-4xl ">
              Your Reading Buddy !
            </h1>
          </div>
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
                  checked={passwordType === "text" ? "checked" : ""}
                  onChange={tooglePassword}
                />
                <label className="text-sm">Show Password</label>
              </div>
            </div>
            <input
              type="submit"
              className={`btn btn-danger px-10 py-2.5 ${
                validateForm() // Call validateForm() to check form validation
                  ? "bg-danger text-white rounded-lg"
                  : "opacity-70 bg-danger text-white rounded-lg"
              }`}
              disabled={!validateForm()}
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
