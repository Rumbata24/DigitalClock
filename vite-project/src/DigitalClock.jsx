import { useEffect, useState } from "react";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000); // Update time every 1 second

    // Clear interval when component unmounts
    return () => clearInterval(intervalID);
  }, []);

  return (
    <section>
      <h1 className="clock">{time.toLocaleTimeString()}</h1>
    </section>
  );
};

export default DigitalClock;
