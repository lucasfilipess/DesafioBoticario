import React from 'react';
const url =
  'https://mediacdns3.ulife.com.br/PAT/Upload/2737247/product_20200318173735.json';

function GetData() {
  fetch(url, { method: 'GET' })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.log(error);
    });
  return <div></div>;
}
export default GetData;
