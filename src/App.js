import { AboutMe } from "./pages/AboutMe";
import { Courses } from "./pages/Courses";
//import Footer from "./pages/Footer";
import { Project } from "./pages/Projects";
import { MySkills } from "./pages/Skills";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <AboutMe/>
      <MySkills/>
      <Project/>
      <Courses/>
      <GlobalStyle/>
    </>
  );
}