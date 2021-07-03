import React from "react";
import image from "../assets/images/watch.png";
import carrefour from "../assets/images/carfour.png";
import Rating from "@material-ui/lab/Rating";
import "../assets/css/styles.css";
function card() {
  return (
    <div className="horizontal-container">
      <div className="images">
        <h2>فيتبت Versa سمارتفون واتش</h2>
        <div className="slider">
          <img id="big-image" src={image} alt />
        </div>
      </div>
      <div className="infos">
        <h1>فيتبت Versa سمارتفون واتش</h1>
        <Rating
          name="half-rating-read"
          defaultValue={2.5}
          precision={0.5}
          readOnly
        />

        <div className="price">
          <h3>2100$</h3>
          <h3>2350$</h3>
        </div>

        <div className="buttons">
          <div className="slider">
            <img id="big-image" src={carrefour} alt />
          </div>
          <button>اذهب للمتجر</button>
        </div>
        <div className="buttons">
          <div className="slider">
            <img id="big-image" src={carrefour} alt />
          </div>
          <button>اذهب للمتجر</button>
        </div>
        <div className="buttons">
          <div className="slider">
            <img id="big-image" src={carrefour} alt />
          </div>
          <button>اذهب للمتجر</button>
        </div>
      </div>
    </div>
  );
}

export default card;
