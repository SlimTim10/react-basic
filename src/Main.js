import React from 'react';

class Main extends React.Component {
  render() {
    const allData = [
      {
        title: 'JavaScript Truthiness',
        content: 'Falsy values: false, 0, null, undefined, NaN, empty string.\n\nTruthy values: everything else.',
        author: 'Tim'
      },
      {
        title: 'Useful functions',
        content: 'map, filter, reduce, forEach',
        author: 'Tim'
      }];

    const posts = allData.map(data => (
      <article className="post">
        <header>
          <p className="post-title">{data.title}</p>
          <p className="post-author">{data.author}</p>
        </header>
        <pre className="post-content">{data.content}</pre>
      </article>
    ));
    
    return (
      <main className="main-content">
        {posts}
      </main>
    );
  }
}

export default Main;
