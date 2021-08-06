import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import StudentManagement from "./pages/StudentManagement";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Register from "./pages/Register";
import Header from "./components/Header";
import Home from "./pages/Home";
import Profile from "./pages/Profile/Profile";
import NoFound from "./pages/NoFound";
export const path = {
  home: "/",
  register: "/register",
  student: "/student",
  profile :"/profile",
  profileInfo : "/profile/info/:profileId",
  profilePurchase: "/profile/purchase"
};
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
            <Redirect from="/studenthung/:studentID" to={path.student}></Redirect>
            <Route path={path.home} exact>
              <Home></Home>
            </Route>
            <Route path={path.register}>
              <Register ></Register>
            </Route>
            <Route
              path={path.student}
              component={() => <StudentManagement islogged={true}></StudentManagement>}
            />
            <Route path={path.profile}>
              <Profile></Profile>
            </Route>
            <Route>
              <NoFound></NoFound>
            </Route>
        </Switch>
      </BrowserRouter>

      {/* <Register></Register> */}
    </div>
  );
}

export default App;
