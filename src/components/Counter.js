import React from 'react';

class Counter extends React.Component {
    state = {
        total: 0
    }

    addToTotal = (e) => {
        this.setState(prevState => ({
            total: prevState.total + parseInt(e.target.dataset.add)
        }))
    }

    render() { 
        return (
            <>
                <p>Your total is: {this.state.total}</p>
                <div>
                    <button onClick={this.addToTotal} data-add="1">Add 1</button>
                    <button onClick={this.addToTotal} data-add="3">Add 3</button>
                    <button onClick={this.addToTotal} data-add="5">Add 5</button>
                    <button onClick={this.addToTotal} data-add="7">Add 7</button>
                </div>
            </>
        );
    }
}
 
export default Counter;