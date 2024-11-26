import { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import './App.css';
import { ChildComponent } from './ChildComponent';

function App() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const fetchData = async () => {
    let ele = await fetch('https://dummyjson.com/products');
    if (ele.ok) {
      ele = await ele.json();
      setData(ele.products);
    }
  };
  useEffect(() => {
    fetchData();
    if (ref.current) {
      ref.current.focus();
      if (ref.curr) {
        ref.current.style = 'color: red';
      }
    }
  }, []);

  // if (ref) {
  //   ref?.current.addEventListener('mouseover', () => {});
  // }

  //currently it is called for every change render happens in our application
  let fun2 = heavy();

  return (
    <div id="mainId">
      <div
        ref={ref}
        id="backBtn"
        onClick={() => {
          setCount(() => {
            let newCount = count;
            newCount++;
            return newCount;
          });
        }}
      >
        {'->'}
      </div>
      {data.map((item) => {
        return (
          <div
            id={item.id}
            className="card"
            onClick={() => {
              let newData = [...data, { id: 2, title: 'asd' }];
              setData(newData);
              fun2();
            }}
          >
            {item.title}
          </div>
        );
      })}
      <ChildComponent count={count} setCount= {setCount}/>
      {count}
    </div>
  );
}

export default App;

//defined outside so that will execute for each change on the page.
function heavy() {
  console.log('heavy');
}
