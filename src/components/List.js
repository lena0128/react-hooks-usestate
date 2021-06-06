import React, {useState} from 'react';

function List() {
    // const [state, setState] = useState({
    //     list: [],
    //     item: ""
    // })
    const [list, setList] = useState([])
    const [item, setItem] = useState("")
    // state = {
    //     list: [],
    //     item: ""
    // }

    function addToList(e) {
        e.preventDefault()
        if (item) {
            // this.setState(prevState => ({
            //     list: [...prevState.list, prevState.item],
            //     item: ""
            // }))
            setList(prevList => [...prevList, item])
            setItem("")
        }
    }

    function handleChange(e) {
        // this.setState({
        //     item: e.target.value
        // })
        // setState(prevState => ({
        //     ...prevState,
        //     item: e.target.value
        // }))
        setItem(e.target.value)
    }

    // render() { 
        return (
            <div className="left">
                <h3>Your List</h3>
                <ul>
                    {list.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
                <form onSubmit={addToList}>
                    <input type="text" value={item} onChange={handleChange}/>
                    <input type="submit" value="Add to List"/>
                </form>
            </div>
        );
    // }
}
 
export default List;