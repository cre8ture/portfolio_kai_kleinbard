import React, { useEffect, useRef } from 'react';
import styles from "./wordspace.module.css";
import { throttle } from 'lodash';

const ScrollableSpanContainer = ({ children }) => {
  const spanRefs = useRef([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const spans = document.querySelectorAll('.spanword');

      const handleScroll = throttle(() => {
        requestAnimationFrame(() => {
          spans.forEach((span, index) => {
            span.style.display = 'inline-block';

            const rect = span.getBoundingClientRect();
            if (rect.bottom > window.innerHeight - 50 && rect.bottom < window.innerHeight + 50) {
              const delta = Math.floor(Math.random() * (500 - (-500) + 1)) + (-1000);
              span.style.setProperty('--delta', `${delta}px`);
              span.style.transition = 'transform .2s';
            } else {
              span.style.setProperty('--delta', `${0}px`);
              span.style.transition = 'transform .2s';
            }
          });
        });
      }, 100);

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  const wrapChildInSpan = (child, index) => (
    <span
      key={index}
      className={`inline-block span spanword ${styles.spanword}`}
      ref={(el) => (spanRefs.current[index] = el)}
    >
      {child}
    </span>
  );
  const processChildren = (child, index) => {
    if (Array.isArray(child)) {
      return child.map((subChild, subIndex) =>
        processChildren(subChild, `${index}-${subIndex}`)
      );
    } else if (typeof child === 'string') {
      return (
        <>
          {child.split(' ').map((word, i) => (
            <span
              key={`${index}-${i}`}
              className={`inline-block spanword word ${styles.spanword}`} // Add 'word' class
              ref={(el) => (spanRefs.current[`${index}-${i}`] = el)}
            >
              {word}
              {i < child.split(' ').length - 1 && ' '}
            </span>
          ))}
        </>
      );
    } else if (React.isValidElement(child)) {
      return wrapChildInSpan(
        React.cloneElement(child, { key: index }, processChildren(child.props.children, index)),
        index
      );
    } else {
      return wrapChildInSpan(child, index);
    }
  };

  return (
    <div>
      {React.Children.map(children, (child, index) => {
        const component = processChildren(child, index);
        return component
      })}
    </div>
  );
};

export default ScrollableSpanContainer;
