import React from 'react';
import './Cardpost.css';

const Cardpost = ({ postData }) => {
  return (
    <>
      <section className="card-post-main">
        {postData.map((curElp) => (
          <div className="card-post-container" key={curElp.id}>
            {/* Card Body */}
            <div className="card-post-body">
              {/* Image on the left */}
              <img
                className="image-post"
                src={curElp.postImage}
                alt="Product"
              />

              {/* Right side: Title, Price, and Button */}
              <div className="content-post">
                <span className="title-post">{curElp.prodTitle}</span>
                <span className="price">{curElp.prodPrice}</span>
                <button className="clickme">Rent Now</button>
              </div>
            </div>

            {/* Below content: Description and Location */}
            <div className="details-post">
              <span className="description">{curElp.prodDetails}</span>
              <span className="loc">{curElp.loc}</span>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Cardpost;
