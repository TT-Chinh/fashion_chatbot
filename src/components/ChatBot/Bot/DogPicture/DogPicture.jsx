// new file called DogPicture.jsx
import React, { useEffect, useState } from 'react';
import './DogPicture.css';

const DogPicture = () => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((res) => res.json())
      .then((data) => {
        setImageUrl(data.message);
      });
  }, []);

  return (
    <div className='react-chatbot-kit-chat-bot-message-img'>
      <img width={180} src={imageUrl} alt='a dog' />
    </div>
  );
};

export default DogPicture;