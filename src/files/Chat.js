import React, { useState } from 'react';
import Navbar from './Navbar';
import backgroundImage from './b.jpg';
import "./Chat.css";

function Chat() {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');

  //sending a message
  const sendMessage = () => {
    let message = messageInput.trim();
    if (message !== '') {
      const newMessage = {
        sender: 'You',
        text: message,
        time: getCurrentTime(),
      };
      setMessages([...messages, newMessage]);
      setMessageInput('');

      //bot responses
      if (message.toLowerCase() === 'hi') {
        addBotResponse('Hello fellow local, Pitbull here! How may I help you?');
      } else if (message.toLowerCase() === 'How do I make a recommendation?') {
        addBotResponse('Here is how to make a recommendation: In your profile, click "Recommend a Place" in the dropdown menu. Fill out all the input fields at each step. The tooltips will help you know what to input in the fields. Click the "Submit" button. Voilà! You have made a recommendation!');
      } else if (
        message.toLowerCase() ===
        'recommendation'
      ) {
        addBotResponse(
          'Here is how to make a recommendation: In your profile, click "Recommend a Place" in the dropdown menu. Fill out all the input fields at each step. The tooltips will help you know what to input in the fields. Click the "Submit" button. Voilà! You have made a recommendation!'
        );
      } else if (message.toLowerCase() === 'Can I change my city?') {
        addBotResponse('If you have become a local to a different city, it is very simple to change your city! In your profile, go to the Account tab. Click the "Change Description and/or City button". Click the "Save" button. Voilà! You have changed your city!');

      } else if (message.toLowerCase() === 'city') {
        addBotResponse('If you have become a local to a different city, it is very simple to change your city! In your profile, go to the Account tab. Click the "Change Description and/or City button". Click the "Save" button. Voilà! You have changed your city!');

      } else if (message.toLowerCase() === 'bye') {
        addBotResponse('Goodbye! Have a great day!');
        
      } else {
        //default response when anything is typed
        addBotResponse('Sorry, I do not have your answer. Email locals@gmail.com with your concerns.');
      }
    }
  };

  //add bot's response
  const addBotResponse = (response) => {
    const newBotResponse = {
      sender: 'Pitbull',
      text: response,
      time: getCurrentTime(),
    };
    setMessages([...messages, newBotResponse]);
  };

  //get the current time for message
  const getCurrentTime = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  return (
    <div style={{ background: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '100vh' }}>
      <Navbar showMainLink={false} showDropdown={false} />
      <h1 className="my-5">Chat with Pitbull, our Virtual Assistant!</h1>
      <div
        id="chatbox"
        className="chatbox"
        aria-live="polite" //gives chat updates when user is idle
        aria-relevant="additions" //notifies screen readers when new messages are added
      >
        {messages.map((message, index) => (
          <div
            key={index}
            className="message-container"
            role="listitem" //each chat message is treated as a list item
          >
            <div className="message">
              <span className="sender">{message.sender}:</span> {message.text}
              <div className="time">{message.time}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          id="messageInput"
          type="text"
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          aria-label="Type your message here" //label for input field
        />
        <button
          className="btn btn-primary"
          style={{ backgroundColor: '#f1356d', border: 'none' }}
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default Chat;



