import React from 'react';

export default class Profile extends React.Component {
    render () {
        return (
            <div className="profile-component">
                <h1>Name: {this.props.name}</h1>
                <h2>Age: {this.props.age}</h2>
            </div>
        )
    }
}