import React, { useState } from 'react';

//react component is just a javascript function that returns something to be rendered or "viewed/shown" on screen
//create a react component is create a js function
//render VIEW THE COMPONENT ON THE WEBPAGE

function App() {
  return <div>
  <Folder name="Desktop">
      <Folder name="Music">
       <File name="star.mp4"/>
       <File name="music.file.mp4"/>
      </Folder>
    <File name="dogs.jpeg"/>
    <File name="cats.png"/>
  </Folder>
  <Folder name="Applications"/>
  </div>
}
//props key concept in react 
const Folder = (props) => {
  const [ isOpen, setIsOpen ] = useState(true);
  const { name, children} = props;

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return <div>
    <span onClick={handleClick}>{name}</span>
    
    <div style={{ marginLeft: '17px'}}>
    {isOpen ? children: null}
    </div>
    </div>
};

const File = (props) => {
  return <div>{props.name}</div>
}

export default App;
