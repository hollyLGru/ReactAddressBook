import React, { useState} from 'react';
import './ContactCard.css';

function ContactCard(props) {
const [isHidden, setIsHidden] = useState(true);
const { index, name, picture, email, phone, cell } = props; 



return(
<div>
    <ul>
        <li>
        <img src={picture.thumbnail} alt=""></img>
        <h2>{name.first} {name.last}</h2>

        {/* <button onClick={() => setLike(!like)} >
            {like ? '❤' : 'Like!'}
        </button> */}

        <p onClick={() => setIsHidden(!isHidden)}> 
            {isHidden ?  " Info " : `Email: ${email} Phone Number:  ${phone} Cell: ${cell} ` }

        </p>
        </li>
    </ul>
</div>
)
} 

export default ContactCard;