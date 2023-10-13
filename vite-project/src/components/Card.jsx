const Card = ({ description, pañalesuno, image}) => {
    return (
      <div className='card'>
        <div className='card-body'>
          <img src={image} className='card-img-top' alt={pañalesuno} />
          <p className='card-text'>{description}</p>
          <h3 className='card-desc'>{pañalesuno}</h3>
        </div>
      </div>
    )
  }
  
  export default Card