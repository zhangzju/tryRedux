import React, {PropTypes} from 'react';
import Hobby from "./Hobby"

const propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
};

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            liked: 0,
            hobbies: ['music', 'rugby']
        };
        this.likedCallback = this.likedCallback.bind(this);
        this.addHobbyCallback = this.addHobbyCallback.bind(this);
    }
    
    componentDidMount () {
        setTimeout( ()=> {
            this.likedCallback();
        }, 1000)
    }

    likedCallback () {
        let liked = this.state.liked;
        liked++;
        this.setState({
            liked
        });
    }

    addHobbyCallback(){
        let hobbyInput = this.refs.hobby;
        let val = hobbyInput.value;
        if(val) {
            let hobbies = this.state.hobbies;
            hobbies = [...hobbies, val];

            this.setState({
                hobbies
            }, () => {
                hobbyInput.value = '';
            });
        }
    }

    render () {
        return (
            <div className="profile-component">
                <h1>Name: {this.props.name}</h1>
                <h2>Age: {this.props.age}</h2>
                <button onClick={this.likedCallback}>like!</button>
                <h2>Total liked: {this.state.liked}</h2>
                <h2>Hobbies:</h2>
                <ul>
                    {this.state.hobbies.map((hobby, i)=> <Hobby key={i} hobby={hobby}/>)}
                </ul>
                <input type="text" ref="hobby"/>
                <button onClick={this.addHobbyCallback}>add hobby</button>
            </div>
        )
    }
}

Profile.propTypes = propTypes;

export default Profile;