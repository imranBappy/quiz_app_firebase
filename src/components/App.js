import Signup from "../components/pages/Signup";
import "../styles/App.css";
import Layout from "./Layout";
// import Home from "./pages/Home";
function App() {
  return (
    <>
      <Layout>
        {/* <Home /> */}
        <Signup />
      </Layout>
    </>
  );
}

export default App;
