import React, {useState, useEffect} from 'react'

export default function ListInterval({list:propsList=[]}) {
    const [list, setList] = useState(propsList);
    const [intervalId, setIntervalId] = useState();

    useEffect(() => {
        const interval = setInterval(() => {
            setList(prevState => prevState.slice(0, -1));
        }, 1000);

        setIntervalId(interval);

        return () => {
            console.log(`in first useEffect – componentWillUnmount`);
            clearInterval(interval);
        }
    }, [])

    useEffect(() => {
        console.log(`in useEffect for list`, list);
        !list.length && clearInterval(intervalId);
    }, [list])

    return list.length ? (
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    ) : null;
}