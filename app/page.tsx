import Navbar from "./components/NavBar/navbar";
import Page1 from "./components/Page1/page1";
import Page2 from "./components/Page2/page2";
import FadeInSection from "./components/FadeInSection";
import Page3 from "./components/Page3/page3";
import Page4 from "./components/Page4/page4";
import Footer from "./components/Footer/Footer";
import Page5 from "./components/Page5/page5"
import Page6 from "./components/Page6/page6"
export default function Home() {
  return (
    <div>
      <Navbar />
      <FadeInSection>
        <div><Page1 /></div>
      </FadeInSection>
      <FadeInSection>
        <div id="skills"><Page2 /></div>
      </FadeInSection>
      <FadeInSection>
        <div id="education"><Page3 /></div>
      </FadeInSection>
      <FadeInSection>
        <div id="experience"><Page4 /></div>
      </FadeInSection>
      <FadeInSection>
        <div id = "project">
          <Page5/>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div id = "contact">
          <Page6/>
        </div>
      </FadeInSection>
      <Footer/>
    </div>
  );
}
