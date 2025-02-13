import "./App.css";
import Footer from "./layout/footer/Footer";
import Header from "./layout/header/Header";
import SignUp from "./components/signup/SignUp";
import SignIn  from "./components/signin/SignIn";

function App() {
  return (
    <div className="grid grid-cols-5">
      <Header />
      <SignIn />
      <SignUp />
      <Footer />
    </div>
  );
}

export default App;
