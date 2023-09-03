// import React, { useState, useEffect } from 'react';

// const FadeOnScroll = ({ children, id_from_parent }) => {
//   const [lines, setLines] = useState([]);
//   useEffect(() => {
//     const lines = [];

//     React.Children.toArray(children).forEach((child) => {
//       if (child.type !== 'a' && child.type !== 'div' && child.type !== 'img') {
//         if (child.props && child.props.children) {
//           var text = child.props.children;
//         } else {
//           var text = '';
//         }
//         if (Array.isArray(text)) {
//           text = text.join(' ');
//         }
//         const words = text.split(' ');
//         let line = '';
//         words.forEach((word, i) => {
//           if (line === '') {
//             line = word;
//           } else {
//             const newLine = `${line} ${word}`;
//             if (newLine.length > 50) {
//               lines.push(line);
//               line = word;
//             } else {
//               line = newLine;
//             }
//           }
//           if (i === words.length - 1) {
//             lines.push(line);
//           }
//         });
//       } else {
//         lines.push(child);
//       }
//     });

//     setLines(lines);
//   }, [children]);

//   return (
//     <div className='"moooooo'>
//       {lines.map((line, i) => (
//         <FadeLine
//           key={i + `_` + id_from_parent}
//           lineText={line}
//           id_from_parent={id_from_parent}
//           id={`fade-line-${i}-${id_from_parent}`}
//         />
//       ))}
//     </div>
//   );
// };

// const FadeLine = ({ lineText, id }) => {
//   const [isFaded, setIsFaded] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (typeof window !== 'undefined') {
//         const bottom = window.innerHeight - 200;
//         const rect = document.getElementById(id).getBoundingClientRect();

//         if (rect.top > bottom) {
//           setIsFaded(true);
//         } else {
//           setIsFaded(false);
//         }
//       }
//     };

//     if (typeof window !== 'undefined') {
//       window.addEventListener('scroll', handleScroll);
//       return () => window.removeEventListener('scroll', handleScroll);
//     }
//   }, [id]);

//   return (
//     <span
//       id={id}
//       className="inline-block"
//       style={{
//         opacity: isFaded ? 0 : 1,
//         wordSpacing: isFaded ? '200px' : 'normal',
//         transition: 'opacity 1s, word-spacing 0.3s',
//       }}
//     >
//       {lineText}
//     </span>
//   );
// };

// export default FadeOnScroll;


import React, { useState, useEffect } from 'react';

const FadeOnScroll = ({ children, id_from_parent }) => {
  const [lines, setLines] = useState([]);
  useEffect(() => {
    const lines = [];

    React.Children.toArray(children).forEach((child) => {
      if (child.type !== 'a' && child.type !== 'div' && child.type !== 'img') {
        if (child.props && child.props.children) {
          var text = child.props.children;
        } else {
          var text = '';
        }
        if (Array.isArray(text)) {
          text = text.join(' ');
        }
        const words = text.split(' ');
        let line = '';
        words.forEach((word, i) => {
          if (line === '') {
            line = word;
          } else {
            const newLine = `${line} ${word}`;
            // console.log(" window.innerWidth",  window.innerWidth)
            if (window.innerHeight != undefined && getTextWidth(newLine) <= window.innerWidth -280) { //} 200 + window.innerWidth/10) {
              // Adjust the threshold (- 40) as needed to account for padding or marginsgit
              line = newLine;
            } else {
              lines.push(line);
              line = word;
            }
          }
          if (i === words.length - 1) {
            lines.push(line);
          }
        });
      } else {
        lines.push(child);
      }
    });

    setLines(lines);
  }, [children]);

  const getTextWidth = (text) => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    context.font = '16px Arial'; // Adjust the font size and style as needed
    const width = context.measureText(text).width;
    return width;
  };

  return (
    <div className='"moooooo' style={{ maxWidth: 'calc(100% - 40px)' }}>
      {lines.map((line, i) => (
        <FadeLine
          key={i + `_` + id_from_parent}
          lineText={line}
          id_from_parent={id_from_parent}
          id={`fade-line-${i}-${id_from_parent}`}
        />
      ))}
    </div>
  );
};

const FadeLine = ({ lineText, id }) => {
  const [isFaded, setIsFaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        const bottom = window.innerHeight - 200;
        const rect = document.getElementById(id).getBoundingClientRect();

        if (rect.top > bottom) {
          setIsFaded(true);
        } else {
          setIsFaded(false);
        }
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [id]);

  return (
    <span
      id={id}
      className="inline-block"
      style={{
        opacity: isFaded ? 0 : 1,
        wordSpacing: isFaded ? '200px' : 'normal',
        transition: 'opacity 1s, word-spacing 0.3s',
      }}
    >
      {lineText}{" "}
    </span>
  );
};

export default FadeOnScroll;
