import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Report from "./pages/Report";
import Login from "./components/auth/Login";
import Footer from "./components/footer/Footer";
import About from "./pages/About";
import Users from "./pages/Users";
import Register from "./components/auth/Register";
import ContactUs from "./pages/ContactUs";
import { ThemeProvider } from "./components/context/ThemeContext";
import ImageUpload from "./pages/ImageUpload";
import StudentRegister from "./pages/StudentRegister"
import Contenders from "./pages/Contenders";
import UserLocation from "./pages/UserLocation";

function App() {
  return (
    <>
      <ThemeProvider>
        <Router>
          <Navbar />
          <Switch>
          <Route path="/studentregister" exact component={StudentRegister} />
            <Route path="/" exact component={Home} />
            <Route path="/contenders" exact component={Contenders} />
            <Route path="/imageupload" exact component={ImageUpload} />
            <Route path="/userlocation" exact component={UserLocation}/>
            <Route path="/reports" component={Report} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/users" component={Users} />
            <Route path="/about" component={About} />
            <Route path="/contactus" component={ContactUs} />
          </Switch>
          <Footer />
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
