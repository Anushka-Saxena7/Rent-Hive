import React from 'react';
import { Link } from 'react-router-dom';
import './Rentcard.css';

const Rentcard = ({ rentData }) => {
  return (
    <section className="main">
      {rentData.map((curEl) => (
        <Link to={`/postpage/${curEl.id}`} key={curEl.id} className="card-link">
          <div className="card-container">
            <div className="card-body">
              <img src={curEl.image} alt="images" className="card-image" />
            </div>
            <span>{curEl.desc}</span>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default Rentcard;
