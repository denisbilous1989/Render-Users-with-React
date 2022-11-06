import users from './moc-data';
import Card from '../Card-item/Card/component';

import './styles.css';


function CardItem() {
  return (
    <>
    {users.map((user) => (
      <li className="cards-item" key={user.id}>
         <Card {...user}/>
      </li>
    ))}
    </>
  )
}

export default CardItem;