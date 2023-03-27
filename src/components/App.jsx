import React from 'react';
import Card from './Card';
import emojipedia from '../emojipedia';

function createCard(singleEmoji) {
    return (
        <Card 
            key={singleEmoji.id}
            emojiRef={singleEmoji.emoji}
            nameRef={singleEmoji.name}
            meaningRef={singleEmoji.meaning}
        />
    );
}

function App() {

    // var newArray = emojipedia.map(function(emojiRef) {
    //   return emojiRef.meaning.substring(100);
    // });

    // console.log(newArray);

    return (
      <div>
        <h1>
          <span>emojipedia</span>
        </h1>
  
        <dl className="dictionary">
            {emojipedia.map(createCard)}
        </dl>

      </div>
    );
  }
  
  export default App;