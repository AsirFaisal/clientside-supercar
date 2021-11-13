import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home/Home/Home";
import Login from "./Login/Login/Login";
import Register from "./Login/Register/Register";
import "bootstrap/dist/css/bootstrap.min.css";
import Aboutpage from "./Aboutpage/Aboutpage";
import Showroom from "./Showroom/Showroom";
import Contact from "./Contact/Contact";
import Dashboardc from "./Dashboard/Dashboardc";
import AuthProvider from "./contexts/AuthProvider";
import PrivateRoute from "./Login/PrivateRoute/PrivateRoute";
import PlaceOrder from "./PlaceOrder/PlaceOrder";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route path="/register">
              <Register />
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboardc />
            </PrivateRoute>
            <PrivateRoute path="/cars/:serviceId">
              <PlaceOrder />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/about">
              <Aboutpage />
            </Route>
            <Route exact path="/showroom">
              <Showroom />
            </Route>
            <PrivateRoute exact path="/contact">
              <Contact />
            </PrivateRoute>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
