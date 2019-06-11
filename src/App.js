import React, { Component } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import Log from './components/Log';

const App = () => {
  console.log(chatMessages);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Chat Log</h1>
        <Log
          props={chatMessages}
        />

      </header>
      <main className="App-main">

      </main>
    </div>
  );
};

export default App;
