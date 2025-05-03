import {useState, useEffect, useCallback} from 'react';

const useTimer = (initialSeconds: number) => {
  const [seconds, setSeconds] = useState<number>(initialSeconds);

  useEffect(() => {
    if (seconds > 0) {
      const timer = setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [seconds]);

  const resetTimer = useCallback(() => {
    setSeconds(initialSeconds);
  }, [initialSeconds]);

  return {seconds, resetTimer};
};

export default useTimer;
