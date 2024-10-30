import "./App.css";
import Accordion from "./Components/Accordian";
import Header from "./Components/Header";
import Intro from "./Components/Intro";

import SkillsSection from "./Components/SkillsSection";

function App() {
  return (
    <>
      <Header />
      <Intro />
      <SkillsSection />
      <Accordion />
    </>
  );
}

export default App;
