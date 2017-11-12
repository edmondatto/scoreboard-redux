import React from 'react';

class StopWatch extends React.Component {

    constructor() {
        super();
        this.state = {
            running: false,
            elapsedTime: 0,
            previousTime: 0,
        };
        this.onTick = this.onTick.bind(this);
    }

    /**
     * This method is called before the component is mounted.
     * This enables us to set the interval(start calling the OnTick method)
     * when the component is mounted.
     */
    componentWillMount() {
        this.interval = setInterval(this.onTick, 100);
    }

    /**
     * This method is run every 100 milliseconds which is about 10 times a second.
     * If the clock is running, we update the elapsed time and also set the previous
     * time to now.
     */
    onTick() {
        if (this.state.running) {
            let now = Date.now();
            let elapsedTime = this.state.elapsedTime + (now - this.state.previousTime);
            this.setState({
                elapsedTime: elapsedTime,
                previousTime: Date.now()
            })
        }
    }

    /**
     * This method is called when the component is unmounted.
     * All the component cleanup is done here.
     * This enables us to clear the interval.
     */
    componentWillUnmount() {
        clearInterval(this.interval)
    }

    /**
     * Here we start counting our milliseconds since 1970 epoch
     * and also indicate that the clock is ticking.
     */
    onStart() {
        this.setState({
            running: true,
            previousTime: Date.now()
        })
    }

    /**
     * Here we pause the ticking of the clock(counting of milliseconds)
     */
    onStop() {
        this.setState({
            running: false
        })

    }

    /**
     * Here we reset the elapsed time to zero and also start counting the
     * milliseconds again from now.
     */
    onReset() {
        this.setState({
            elapsedTime: 0,
            previousTime: Date.now()
        })
    }

    render() {
        const seconds = Math.floor(this.state.elapsedTime / 1000);
        return (
            <div className="stopwatch">
                <h2>Stopwatch</h2>
                <div className="stopwatch-time">{seconds}</div>
                {this.state.running ? <button onClick={() => this.onStop()}>Stop</button> :
                    <button onClick={() => this.onStart()}>Start</button>}
                <button onClick={() => this.onReset()}>Reset</button>
            </div>
        );
    }
}

export default StopWatch