import React from 'react';

export default class Main extends React.Component {
    state = {
        darkMode: false,
        total: 0,
        list: [],
        item: ""
    }

    handleModeChange = () => {
        this.setState(prevState => ({
            darkMode: !prevState.darkMode
        }))
    }

    addToTotal = (e) => {
        this.setState(prevState => ({
            total: prevState.total + parseInt(e.target.dataset.add)
        }))
    }

    addToList = (e) => {
        e.preventDefault()
        if (this.state.item) {
            this.setState(prevState => ({
                list: [...prevState.list, prevState.item]
            }))
        }
    }

    handleChange = (e) => {
        this.setState({
            item: e.target.value
        })
    }

    render() {
        return (
            <div className={this.state.darkMode ? "main dark-mode" : "main light-mode"}>
                <button onClick={this.handleModeChange}>{this.state.darkMode ? "Light Mode" : "Dark Mode"}</button>
                <p>Your total is: {this.state.total}</p>
                <div>
                    <button onClick={this.addToTotal} data-add="1">Add 1</button>
                    <button onClick={this.addToTotal} data-add="3">Add 3</button>
                    <button onClick={this.addToTotal} data-add="5">Add 5</button>
                    <button onClick={this.addToTotal} data-add="7">Add 7</button>
                </div>
                <div className="left">
                    <h3>Your List</h3>
                    <ul>
                        {this.state.list.map(i => <li>{i}</li>)}
                    </ul>
                    <form onSubmit={this.addToList}>
                        <input type="text" value={this.state.item} onChange={this.handleChange}/>
                        <input type="submit" value="Add to List"/>
                    </form>
                </div>
            </div>
        )
    }
}