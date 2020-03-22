import React from 'react';

function BuyButton({ btn }) {
  function teste() {}

  return (
    <a onClick={teste} href='#' class='btn btn-secondary  btn-lg btn-block'>
      {btn}
    </a>
  );
}
export default BuyButton;
