import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navigation from "./components/shared/Navigation/Navigation";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Authenticate from "./Pages/Authenticate/Authenticate";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" exact element={<Home />} />

        {/* <Route path="/authenticate"  element={<Authenticate/>} /> */}


        <GuestRoute path="/authenticate" >
        <Authenticate/>

        </GuestRoute>
        
        {/* <Route path="/register" element={<Register />} />

          <Route path="/login" element={<Login></Login>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

// create componetnt
const GuestRoute = ({ children, ...rest }) => {
  const { isAuth } = useSelector((state) => state.auth);
  return (
      <Route
          {...rest}
          render={({ location }) => {
              return isAuth ? (
                  <Redirect
                      to={{
                          pathname: '/rooms',
                          state: { from: location },
                      }}
                  />
              ) : (
                  children
              );
          }}
      ></Route>
  );
};


export default App;
