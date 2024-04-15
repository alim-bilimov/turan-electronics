import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/header";
import MainRoutes from "./routes/MainRoutes";

function App() {
  return (
    <body>
      <div className="App">
        <Header />
        <MainRoutes />
        <Footer />
      </div>
    </body>
  );
}

export default App;
