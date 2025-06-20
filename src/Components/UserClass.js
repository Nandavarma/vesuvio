import React from 'react';

class UserClass extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            contributions: "Web developer",
            skills: "React, Node, Express",
        }
    }
    render() {
        const { name } = this.props;
        const { contributions, skills } = this.state;
        return (
            <div className="user-card">
                <h1>{name}</h1>
                <h2>{contributions}</h2>
                <h2>{ skills}</h2>
                <h2>This is me</h2>
            </div>
        )
    }
}
export default UserClass;