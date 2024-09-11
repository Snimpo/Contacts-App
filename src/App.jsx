import "./App.css";
import GridLayout from "./GridLayout";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Header />
      <GridLayout />
      <Footer />
    </>
  );
}

export default App;

//for future changes I plan on importing the props into the Card component directly from the contacts.js file
