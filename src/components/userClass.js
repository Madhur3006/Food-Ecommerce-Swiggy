import React from 'react';

class UserClass extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0,
            count2: 0, 
            data: {
                name: 'name',
                company: 'company',
                location: 'location'
            }
        }

        console.log('constructor')
    }

    async componentDidMount() {
        const data = await fetch('https://api.github.com/users/Madhur3006')
        const json = await data.json()
        this.setState({
            data: json 
        })
        console.log('componentDidMount')
    }

    componentDidUpdate() {
        console.log('component dis update')
    }

    componentWillUnmount() {
      console.log('componentwillunmount')
    }

    render() {
        const {name, company, location} = this.state.data 
        const {count, count2} = this.state 
        return (
            <div>
                <h2>Count: {count}</h2>
                <h2>Count2: {count2}</h2>
                <button onClick = {() => {
                    this.setState({
                        count: this.state.count + 1,
                        count2: this.state.count2 + 1
                    })
                }}>Increase</button>
                <h2></h2>
                <h2>Name: {name}</h2>
                <h3>Company: {company}</h3>
                <h3>Location: {location}</h3>
                <h4>Contact: @madhurmangal5</h4>
            </div>
        )
        console.log('render')
    }
}

export default UserClass