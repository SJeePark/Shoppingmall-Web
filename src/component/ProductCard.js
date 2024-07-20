import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ item }) => {
  const navigate = useNavigate();

  const showDetail = () => {
    navigate(`/product/${item.id}`);
  };

  return (
    <div>
      <div className='card' onClick={showDetail}>
        <img src={item?.img} width={'100%'} alt='Product' />
        <div className='product-title'>{item?.title}</div>
        <div>￦{item?.price}</div>
        <div className='new'>{item?.new ? '신제품' : ''}</div>
        <div className='choice'>{item?.choice ? 'Choice Conscious' : ''}</div>
      </div>  
      </div>
      
    );
};

export default ProductCard;
