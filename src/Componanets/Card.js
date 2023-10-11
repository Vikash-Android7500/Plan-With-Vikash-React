import { useState } from "react";
import '../Componanets/CardStyle.css'

function Card({ id, image, info, price, name, removeTour }) {
  const [readmore, setReadmore] = useState(false);

  const description = readmore ? info : `${info.substring(0, 150)}....`;
  function readmoreHandler() {
    setReadmore(!readmore);
  }

  return (
    <main className="card">
      <img src={image} className="image"></img>

      <section className="tour-info">
        <section className="tour-details">
          <span className="tour-price">₹ {price}</span>
          <h1 className="tour-name">{name}</h1>
        </section>

        <section className="description">
          {description}
          <span className="read-more" onClick={readmoreHandler}>
            {readmore ? `Show Less` : `Read \More`}
          </span>
        </section>
      </section>

      <button className="btn-red" onClick={() => removeTour(id)}>
        Not Interested
      </button>
    </main>
  );
}

export default Card;
