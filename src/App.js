import React, { useState } from 'react';

//react component is just a javascript function that returns something to be rendered or "viewed/shown" on screen
//create a react component is create a js function
//render VIEW THE COMPONENT ON THE WEBPAGE

function App() {
  return <div>
  <Folder name="Desktop">
      <Folder name="Music">
       <File name="star.mp4"/>
       <File name="music_file.mp4"/>
      </Folder>
    <File name="dogs.jpeg"/>
    <File name="cats.png"/>
  </Folder>
  <Folder name="Applications"/>
  </div>
}
//props key concept in react 
const Folder = (props) => {
  //use state is a hook and all hooks in react potentially rerender components 
  const [ isOpen, setIsOpen ] = useState(true);
  const { name, children} = props;
  const direction = isOpen ? 'down' : 'right';

  const handleClick = () => setIsOpen(!isOpen);

  return <div>
    <span onClick={handleClick}><i className="blue folder icon"></i>
    <i className={`caret ${direction} icon`}></i>
    </span>
    {name}
    <div style={{ marginLeft: '17px'}}>
    {isOpen ? children: null}
    </div>
    </div>
}; 

const File = (props) => {
  const { name } = props;
  const fileExtension = name.split('.')[1]
  const fileIcons = {
  mp4: 'headphones',
  jpeg: 'file image',
  png: 'file image outline',
};

  return <div>
    <i className={`${fileIcons[fileExtension]} icon`}></i>
    {name}
    </div>
}

export default App;
 