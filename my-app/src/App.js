import React, { Component } from 'react';
import {render} from 'react-dom';

import Conditional from './Conditional';
import BlankSpace from './BlankSpace';
import Comments from './Comments';
import CommentForm from './CommentForm';

// Parent Component
class App extends Component {
  render() {
    return (
      <div>
        <h1>JSX Quirks</h1>
        <h2>Conditionals</h2>
        <Conditional />
        <h2>Blank Space</h2>
        <BlankSpace />
        <h2>Comments in JSX</h2>
        <Comments />
        <h2>React Without JSX</h2>
        <CommentForm />

      </div>
    );
  }
}


render(<App />, document.getElementById('root'));
