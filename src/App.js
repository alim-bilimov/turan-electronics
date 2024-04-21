import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/header";
import MainRoutes from "./routes/MainRoutes";

function App() {
  return (
    <div className="App">
      <Header />
      <MainRoutes />
      <Footer />
    </div>
  );
}

export default App;
