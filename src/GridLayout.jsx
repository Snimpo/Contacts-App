import React from "react";
import Card from "./Card";

//Decided to approach the exercise using a grid layout

const GridLayout = () => {
  return (
    <div className="grid-container">
      <div className="grid-item">
        <Card
          name="Beyonce"
          img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
          phone="+123 456 789"
          email="b@beyonce.com"
        />
      </div>
      <div className="grid-item">
        <Card
          name="Jack Bauer"
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Kiefer_Sutherland_at_24_Redemption_premiere_1_%28headshot%29.jpg/800px-Kiefer_Sutherland_at_24_Redemption_premiere_1_%28headshot%29.jpg"
          phone="+987 654 321"
          email="jack@nowhere.com"
        />
      </div>
      <div className="grid-item">
        <Card
          name="Chuck Norris"
          img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
          phone="+918 372 574"
          email="gmail@chucknorris.com"
        />
      </div>

      <div className="grid-item">
        <Card
          name="Scarlett Johansson"
          img="https://m.media-amazon.com/images/M/MV5BMTM3OTUwMDYwNl5BMl5BanBnXkFtZTcwNTUyNzc3Nw@@._V1_.jpg"
          phone="+123 456 789"
          email="scarlett@hollywood.com"
        />
      </div>

      <div className="grid-item">
        <Card
          name="Robert Downey Jr."
          img="https://media.gq.com/photos/6650a11403b00c78e4da949d/4:3/w_1024%2Cc_limit/RDJ.jpg"
          phone="+987 654 321"
          email="rdj@starkindustries.com"
        />
      </div>

      <div className="grid-item">
        <Card
          name="Emma Watson"
          img="https://upload.wikimedia.org/wikipedia/commons/7/7f/Emma_Watson_2013.jpg"
          phone="+456 789 123"
          email="emma@hogwarts.com"
        />
      </div>

      <div className="grid-item">
        <Card
          name="Chris Hemsworth"
          img="https://images.mubicdn.net/images/cast_member/24207/cache-62264-1615052248/image-w856.jpg"
          phone="+321 654 987"
          email="chris@asgard.com"
        />
      </div>
      <div className="grid-item">
        <Card
          name="Leonardo DiCaprio"
          img="https://cdn.britannica.com/65/227665-050-D74A477E/American-actor-Leonardo-DiCaprio-2016.jpg"
          phone="+654 321 987"
          email="leo@hollywood.com"
        />
      </div>

      <div className="grid-item">
        <Card
          name="Jennifer Lawrence"
          img="https://media.vogue.mx/photos/5cfe891727998c247198c76d/2:3/w_2560%2Cc_limit/GettyImages-1153799667.jpg"
          phone="+789 123 456"
          email="jlaw@hollywood.com"
        />
      </div>

      <div className="grid-item">
        <Card
          name="Tom Hanks"
          img="https://upload.wikimedia.org/wikipedia/commons/a/a9/Tom_Hanks_TIFF_2019.jpg"
          phone="+321 987 654"
          email="tom@hollywood.com"
        />
      </div>

      <div className="grid-item">
        <Card
          name="Natalie Portman"
          img="https://upload.wikimedia.org/wikipedia/commons/5/53/Natalie_Portman_2023.jpg"
          phone="+456 123 789"
          email="natalie@hollywood.com"
        />
      </div>

      <div className="grid-item">
        <Card
          name="Morgan Freeman"
          img="https://futureoflife.org/wp-content/uploads/2020/08/Morgan-Freeman-net-worth-1-e1597654595477.jpg"
          phone="+987 321 654"
          email="morgan@hollywood.com"
        />
      </div>
    </div>
  );
};

export default GridLayout;
