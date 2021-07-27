import '../assets/css/Card.css';

const Card = ({ card }) => {
  const { id, email, body } = card;

  return (
    <li className='card'>
      <div className='card__title'>
        <h2>Comment Id</h2>
        <p>{id}</p>
      </div>
      <div className='card__title'>
        <h2>Email</h2>
        <p>{email}</p>
      </div>
      <div>
        <h2 className='card--comment'>Comment</h2>
        <p>{body}</p>
      </div>
    </li>
  );
};

export default Card;
