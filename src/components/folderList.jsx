import React, { useState } from 'react';

const Folderlist = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div>
      <ul>
        <li
          className='ml-10'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ backgroundColor: isHovered ? 'grey' : 'white' }}
        >
          <button
            onClick={() => { props.onClick(props.name) }}
            style={{ width: '100%', border: 'none', padding: '10px', textAlign: 'left' }}
          >
            {props.name}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Folderlist;
