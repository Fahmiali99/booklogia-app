import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";

// import Forum from "./pages/Forum";

import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import Register from "./pages/Register";
import Navbar from "./components/Common/navbar";
import Footer from "./components/Common/footer";
import Tips from "./pages/Tips";
import Artikel from "./pages/Tips/Detail";

// import Thread from "./pages/Forum/Detail";
function App() {
  return (
    <div className="App">
      <Router>
        <ToastContainer />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route exact path="/tips" component={Tips} />
          <Route path="/tips/:slug" component={Artikel} />
          {/* <Route exact path="/thread" component={Forum} />
          
          <Route path="/thread/:slug" component={Thread} /> */}
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
