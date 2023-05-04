
import {Header, Hero, Services, Portfolio, Contact} from "./components"
import { Footer } from "./components/Footer";

function App() {
 


  return (
    <div className= "darkMode" >
      <Header  />

      <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Hero />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
