import { Route, Routes } from "react-router-dom";
import Signup from "../components/pages/Signup";
import { useAuth } from "../context/AuthContext";
import "../styles/App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";

function App() {
  const user = useAuth();
  console.log(user.currentUser);
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
          <Route
            path={user.currentUser ? `/:me` : "/login"}
            element={<Profile user={user.currentUser} />}
          />
          <Route path="*" element={<h4>Page Not Found</h4>} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
