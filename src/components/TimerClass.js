import React from 'react';

class TimerClass extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
        console.log('constructor')
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            console.log('Namastey React')
            this.setState({
                count: count + 1
            })
        }, 1000)
    }

    componentDidUpdate(prevProps, prevState) {
            if(this.state.count !== prevState.count) {
                console.log('componentdidupdate')
            }
    }

    componentWillUnmount() {
        clearInterval(this.timer)
        console.log('componentwillunmount')
    }

    render() {
        const {count} = this.state 
        return(
            <div>{count}</div>
        )
        console.log('render')
    }
}