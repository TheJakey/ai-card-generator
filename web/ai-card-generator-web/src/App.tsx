import "@/App.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MainContainer from "@/components/layout/MainContainer";

import MainPage from "@/pages/MainPage";

function App() {
  return (
    <>
      <Header />
      <MainContainer>
        <MainPage />
      </MainContainer>
      <Footer />
    </>
  );
}

export default App;
