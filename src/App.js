import './App.css';
import { useState } from "react";

const App = () => {
    const [inputValue, setInputValue ] = useState('');
	const [list, setlist] = useState(['Clean bedroom', 'Take the dog out', 'Study Maths'])
	
	const handleRemoveItem = (index) => {
    setlist(e => e.filter((_, i)=> i !== index));
	}
	
	const Items = ({content}) => {
	const total = content.length
	const items = content.map((item, k)=>{
		return(<li key={k} >{item}<button onClick={()=>handleRemoveItem(k)}>X</button></li>)
	})
	
	return(
	<><ul>{items}</ul><aside>{total} item left</aside></>
	)
	}
	
    const keypress = (event) => {
		if (event.key === 'Enter') {
			if(inputValue !== '')setlist([...list, inputValue])
		}
	}
	
    return (
	<article className="paper">
	<input type="text" onKeyUp={keypress} onChange={e => setInputValue(e.target.value)} value={inputValue} placeholder="What needs to be done?" />
	<Items content={list} />
	</article>
	)
}


export default App;
