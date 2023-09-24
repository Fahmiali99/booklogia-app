import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Fragment, Suspense, lazy, useState } from "react";
const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const Navbar = lazy(() => import('./components/Common/navbar'));
const Footer = lazy(() => import('./components/Common/footer'));
const Tips = lazy(() => import('./pages/Tips'));
const Artikel = lazy(() => import('./pages/Tips/Detail'));
const Forum = lazy(() => import('./pages/Forum'));

function App() {
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState(false)
  
  return (
    <Fragment>
      <div className={show ? "bg-black opacity-20 h-screen fixed  w-full z-50" : ""}/>
      <div className={search ? "bg-black opacity-20 h-screen fixed  w-full z-50" : ""}/>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
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
          </Suspense>
      </Router>
    </Fragment>
  );
}

export default App;
