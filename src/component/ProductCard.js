import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ item, authenticate}) => {
  const navigate = useNavigate();

  const goToDetail = () => {
    console.log('Authenticate value:', authenticate);
    if (authenticate) {
      navigate(`/product/${item?.id}`);
    } else {
      navigate('/login');
    }
  }

  return (
    <div className='card' onClick={goToDetail}>
      <img src={item?.img} width={'100%'} alt={item?.title} />
      <div>{item?.choice === true ? "Choice Conscious" : ""}</div>
      <div>{item?.title}</div>
      <div>{item?.price}</div>
      <div>{item?.new === true ? "신제품" : ""}</div>
    </div>
  )
}

export default ProductCard;
