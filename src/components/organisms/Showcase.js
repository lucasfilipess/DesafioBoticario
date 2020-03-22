import React from 'react';
import data from '../../data.json';
import Card from '../molecules/Card';

function Showcase() {
  return (
    <div className='container '>
      <div className='row justify-content-center '>
        {data.map(detail => {
          return (
            <Card
              keyname={detail.name}
              src={detail.images[0].imageUrl}
              price={detail.Value}
              name={detail.name}
              currency='R$ '
            />
          );
        })}
      </div>
    </div>
  );
}
export default Showcase;
