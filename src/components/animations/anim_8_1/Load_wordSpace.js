import React from 'react';
import ScrollableSpanContainer from './wordSpace';

const App = () => {
  const paragraphText = (
    <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt ex ac massa dapibus, eu
      ultrices tortor semper. Phasellus rhoncus, metus sit amet suscipit scelerisque, turpis nisi venenatis
      nulla, vel ultricies sapien dolor non urna. Fusce in libero in odio posuere vulputate. Aliquam erat
      volutpat. Integer id diam sem. Suspendisse at metus eget tortor vehicula viverra ac et justo. Sed auctor
      augue et laoreet. Praesent eget bibendum enim. Curabitur convallis scelerisque urna, vel varius tortor
      convallis quis.
    </div>
  );

  const paragraphText2 = (
    <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt ex ac massa dapibus, eu
      ultrices tortor semper. Phasellus rhoncus, metus sit amet suscipit scelerisque, turpis nisi venenatis
      nulla, vel ultricies sapien dolor non urna. Fusce in libero in odio posuere vulputate. Aliquam erat
      volutpat. Integer id diam sem. Suspendisse at metus eget tortor vehicula viverra ac et justo. Sed auctor
      augue et laoreet. Praesent eget bibendum enim. Curabitur convallis scelerisque urna, vel varius tortor
      convallis quis.
    </div>
  );

  const links = (
    <div>
      <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
        Example Website
      </a>
      <a href="https://www.example2.com" target="_blank" rel="noopener noreferrer">
        Another Example
      </a>
    </div>
  );

  const elements = [paragraphText, links, paragraphText2, links, paragraphText2, links, paragraphText2];

  return (
    <div>
      {elements.map((element, index) => (
        <ScrollableSpanContainer key={index}>{element}</ScrollableSpanContainer>
      ))}
    </div>
  );
};

export default App;
