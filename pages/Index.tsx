import { useState, useEffect } from 'react';

const Index = () => {
  const [fruit, setFruit] = useState("");

  const priradOvoce = () => {
      setFruit("banana");
  }

  useEffect(() => {
      document.title = `${fruit}`;
  }) 
  

  return (
    <div>
      <button onClick={priradOvoce}>Jaké ovoce mám nejraději?</button>
      <h1>{fruit}</h1>
    </div>
  );
};

export default Index;
