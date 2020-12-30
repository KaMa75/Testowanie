import React,{Component} from 'react';

class Counter extends Component {

    state = {
        count: this.props.start,
        inputValue: ''
    }

    handleAddCount = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    handleSubCount = () => {
        this.setState({
            count: this.state.count - 1
        });
    }

    handleResetCount = () => {
        this.setState({
            count: this.props.start
        });
    }

    handleSetCount = () => {
        const {inputValue} = this.state;
        this.setState({
            count: inputValue ? inputValue : this.props.start,
            inputValue: ''
        });
    }

    handleOnChange = (e) => {
        this.setState({
            inputValue: parseInt(e.target.value)
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        return(
            <div style={{padding: 50}}>
                <h3>Stan licznika:</h3>

                <div>
                    <button
                        className="button-add"
                        onClick={this.handleAddCount}
                    >
                        +
                    </button>
                    <button
                        className="button-sub"
                        onClick={this.handleSubCount}
                    >
                        -
                    </button>
                </div>

                <h2
                    className="counter-value"
                >
                    {this.state.count}
                </h2>

                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input
                            type="number"
                            value={this.state.inputValue}
                            onChange={this.handleOnChange}
                        />
                    </div>
                    <div>
                        <button
                            className="button-set"
                            onClick={this.handleSetCount}
                        >
                            Set
                        </button>
                        <button
                            className="button-reset"
                            onClick={this.handleResetCount}
                        >
                            Reset
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

Counter.defaultProps = {
    start: 0
}

export default Counter;
