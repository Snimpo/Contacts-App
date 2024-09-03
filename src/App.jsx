import "./App.css";
import Card from "./Card";


function App() {
  return (
    <>
    
      <Card
        name="Beyonce"
        img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
        phone="+123 456 789"
        email="b@beyonce.com"
      />
      <Card
        name="Jack Bauer"
        img="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Kiefer_Sutherland_at_24_Redemption_premiere_1_%28headshot%29.jpg/800px-Kiefer_Sutherland_at_24_Redemption_premiere_1_%28headshot%29.jpg"
        phone="+987 654 321"
        email="jack@nowhere.com"
      />
      <Card
        name="Chuck Norris"
        img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
        phone="+918 372 574"
        email="gmail@chucknorris.com"
      />
    </>
  );
}

export default App;
