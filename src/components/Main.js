import React, { useState } from 'react';
import Counter from './Counter';
import List from './List';

function Main(){
// class Main extends React.Component { 

    const [darkMode, setMode] = useState(false)
    //     state = {
    //         darkMode: false
    //     }


    function handleModeChange(){
        setMode(prevMode => !prevMode)
    }
    //     handleModeChange = () => {
    //         this.setState(prevState => ({
    //             darkMode: !prevState.darkMode
    //         }))
    //     }

    return(
        <div className={darkMode ? "main dark-mode" : "main light-mode"}>
            <button onClick={handleModeChange}>{darkMode ? "Light Mode" : "Dark Mode"}</button>
            <Counter />
            <List />
        </div>
    )

}

export default Main


// 
//     render() {
//         return (
//             <div className={this.state.darkMode ? "main dark-mode" : "main light-mode"}>
//                 <button onClick={this.handleModeChange}>{this.state.darkMode ? "Light Mode" : "Dark Mode"}</button>
//                 <Counter />
//                 <List />
//             </div>
//         )
//     }
// }
// 
// export default Main;