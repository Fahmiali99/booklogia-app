import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import Register from "./pages/Register";
import Navbar from "./components/Common/navbar";
import Footer from "./components/Common/footer";
import Tips from "./pages/Tips";
import Artikel from "./pages/Tips/Detail";
import Forum from "./pages/Forum";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState(false)
  return (
    <div className="App">
      <div className={show ? "bg-black opacity-20 h-screen fixed  w-full z-50" : ""}/>
      <div className={search ? "bg-black opacity-20 h-screen fixed  w-full z-50" : ""}/>
      <Router>
        <ToastContainer />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route exact path="/tips" component={Tips} />
          <Route path="/tips/:slug" component={Artikel} />
          <Route
            exact
            path="/forum"
            render={(props) => <Forum {...props} show={show} setShow={setShow} search={search} setSearch={setSearch} />}
          />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
