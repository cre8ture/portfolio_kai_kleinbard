import FadeOnScroll from './FadeOnScroll';

export default function MyComponent({ children }) {
 

  return (
    <FadeOnScroll>
      {children}
    </FadeOnScroll>
  );
}
