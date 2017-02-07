import React, {PropTypes} from 'react';

const propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
};

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            liked: 0
        };
        this.likedCallback = this.likedCallback.bind(this);
    }

    likedCallback () {
        let liked = this.state.liked;
        liked++;
        this.setState({
            liked
        });
    }

    render () {
        return (
            <div className="profile-component">
                <h1>Name: {this.props.name}</h1>
                <h2>Age: {this.props.age}</h2>
                <button onClick={this.likedCallback}>like!</button>
                <h2>Total liked: {this.state.liked}</h2>
            </div>
        )
    }
}

Profile.propTypes = propTypes;

export default Profile;