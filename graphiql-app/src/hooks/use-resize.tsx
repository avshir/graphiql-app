import { useEffect, useState } from 'react';

const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (event: Event) => {
      const target = event.target as Window;
      setWidth(target.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return width > 900;
};

export default useResize;
