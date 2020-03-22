import React from 'react';
import Image from '../atoms/Image';
import BuyButton from '../atoms/BuyButton';

function Card({ keyname, src, price, name, currency }) {
  return (
    <div class='card shadow p-3  bg-white rounded col-md-3 m-4 ' key={keyname}>
      <Image img={src}></Image>
      <div class='card-body'>
        <h5 class='card-title'>
          {currency}
          {price}
        </h5>
        <p class='card-text'>{name}</p>
      </div>
      <div className='container align-items-end'>
        <BuyButton btn='Add to cart' />
      </div>
    </div>
  );
}
export default Card;
