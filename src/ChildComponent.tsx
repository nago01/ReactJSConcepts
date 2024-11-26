export function ChildComponent(props) {
    const {count,setCount} = props;
    const handleClick = (count2: number) => {
        setCount(count2+1);
    }
   return <div>
      <button onClick={()=>{
        handleClick(count);
        
      }}>Child Me To Update the Child Component</button>
   </div>
}