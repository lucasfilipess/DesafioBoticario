import React from 'react';
import Navbar from '../organisms/Navbar';
import Showcase from '../organisms/Showcase';
import Zoom from 'react-reveal/Zoom';
function Main() {
  return (
    <div>
      <Zoom>
        <Navbar />
        <Showcase />
      </Zoom>
    </div>
  );
}
export default Main;
