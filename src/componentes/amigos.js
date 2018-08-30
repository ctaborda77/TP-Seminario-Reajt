import React, {PureComponent} from 'react';

export default class Amigos extends PureComponent {

    render(){
        
        const {friends} = this.props;
        console.log(this.props);
        return(
            <p>Lista de Amigos: {friends.map((friend)=> <span>{friend.name} - </span>)}</p>
            
        );
    }
}
