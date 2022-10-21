import styles from "./App.module.css";
import NavBar from "./Components/Component-parts/NavBarComponents/NavBar";
import FirstPage from "./Components/Component-parts/FirstPageComponents/FirstPage";
import SecondPage from "./Components/Component-parts/SecondPageComponents/SecondPage";
import ThirdPage from "./Components/Component-parts/ThirdPageComponents/ThirdPage";
import FourthPage from "./Components/Component-parts/FourthPage/FourthPage";
import FifthPage from "./Components/Component-parts/FifthPage/FifthPage";
import SixthPage from "./Components/Component-parts/SixthPage/SixthPage";
import Footer from "./Components/Component-parts/Footer/Footer";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <FifthPage />
      <SixthPage />
      <Footer />
    </div>
  );
}

export default App;
