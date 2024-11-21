export default function CustomButton({func, data1, data2, name, desc}) {
  function func2() {
      func(data1, data2);
  }

  return(
    <div className="grid-item">
      <h4 onClick={func2}>
          <h3 dangerouslySetInnerHTML={{ __html: name }} />
    
          <p dangerouslySetInnerHTML={{ __html: desc }} />
      </h4>
      </div>

      
  );
}