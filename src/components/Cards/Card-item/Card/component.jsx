import DivincludesSpan from '../../../Shared/Div-includes-span/component';
import Link from '../../../Shared/Link/component';


import './styles.css';

function Card({ name, username, email, phone , website}) {
  return (
    <div className="card">
        <DivincludesSpan 
          className = 'card__name' 
          spanText = 'Name:' 
          divText = {name}
        />
        <DivincludesSpan 
          className = 'card__username' 
          spanText = 'User Name:' 
          divText = {username}
        />
        <DivincludesSpan 
          className = 'card__email' 
          spanText = 'Email:' 
          divText = {email}
        />
        <Link 
          className='card__phone' 
          spanText='Phone:' 
          text={phone}
        />
        <Link 
          className='card__website' 
          spanText='Website:' 
          text={website}
        />
    </div>
  )
}

export default Card;