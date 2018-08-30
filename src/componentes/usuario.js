import React, {PureComponent} from 'react';
import Tags from './tags'
import Friends from './amigos'
import Picture from './photo'

class Usuario extends PureComponent {

    render(){
        
        const {name, gender, age, email, phone, company, friends, tags, eyeColor, picture} = this.props.datos;

        return(
            <article>
                <h3>{name}</h3><aside>
                    <Picture picture={picture}/>
                    email: <a href={email}>{email}</a>
                    <p>Empresa: <b>{company}</b></p>
                </aside>
                <p>Genero: {gender}</p>
                <p>Edad: {age}</p>
                <p>Tel: {phone}</p>
                
                <Friends friends={friends}/>
                <Tags tags={tags}/>
                <p>Color de Ojos:  <span style={{color: eyeColor}}> 👁 </span></p>
                <hr />
            </article>
            

        );
    }

}

export default Usuario;