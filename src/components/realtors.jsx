/* eslint-disable linebreak-style */
/* eslint-disable no-tabs */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/button-has-type */
/* eslint-disable react/display-name */
/* eslint-disable import/prefer-default-export */
import React from 'react';

export default () => (
  <div className="realtors">
    <h3 className="heading-3">Top 3 Realtors</h3>
    <div className="realtors__list">
      <img src="https://i.ibb.co/3CfK1tf/realtor-1.jpg" alt="Realtor 1" className="realtors__img" />
      <div className="realtors_details">
        <h4 className="heading-4 heading-4--light">Okeowo Samson</h4>
        <p className="realtors__sold">345 houses sold</p>
      </div>
      <img src="https://i.ibb.co/M91qdpr/realtor-2.jpg" alt="Realtor 2" className="realtors__img" />
      <div className="realtors_details">
        <h4 className="heading-4 heading-4--light">Dantata Aisha</h4>
        <p className="realtors__sold">280 houses sold</p>
      </div>
      <img src="https://i.ibb.co/G7QQ0Wr/realtor-3.jpg" alt="Realtor 3" className="realtors__img" />
      <div className="realtors_details">
        <h4 className="heading-4 heading-4--light">Tade Williams</h4>
        <p className="realtors__sold">197 houses sold</p>
      </div>
    </div>
  </div>

);
