import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.img``;

function Image({ img }) {
  return <img className='img-fluid' src={img} alt=''></img>;
}
export default Image;
