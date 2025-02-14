import "./App.css";
import Footer from "./layout/footer/Footer";
import Header from "./layout/header/Header";
import HomePage from "./pages/homepage/Homepage";

function App() {
  return (
    <div className="grid grid-cols-5">
      {/* <Header /> */}
      <HomePage/>
 
      {/* <Footer /> */}
    </div>
  );
}

export default App;
