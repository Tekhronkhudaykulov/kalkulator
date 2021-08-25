import React  from "react";
import {connect} from "react-redux";
import {decrement, increment, reset} from "./store/actions/counter";

const  Counter = (props) => {
    return (
        <div>
            <div>{props.counter.value}</div>
            <div>
                <button onClick={props.increment}>+ increment</button>
                <button onClick={props.reset}>reset</button>
                <button onClick={props.decrement}>- decrement</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    counter: state.counter
});

const mapDispatchToProps =  ({
    increment,
    reset,
    decrement,
});
export default connect(mapStateToProps,mapDispatchToProps)(Counter);