const SentetikEvent = () => {
  const handleClick = () => alert("hi");
  const handleReset = (text) => alert(text); 
  return (
    <div>
      <button onClick={() => handleClick}>Click</button>
      <button onClick={() => handleReset("Merhaba")}>Reset</button>
      <button onClick={(e) => alert("selam")}>Buton</button>
    </div>
  );
};

export default SentetikEvent;


