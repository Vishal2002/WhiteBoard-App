// App.jsx
import React, { useState } from 'react';
import DrawingTool from './component/Drawingtool';
import Penciltool from './component/Penciltool';
import Navbar from './ui/Navbar';

const App = () => {
  return (
   <div>
    <Navbar/>
    <DrawingTool/>
    </div>
  );
};

export default App;
