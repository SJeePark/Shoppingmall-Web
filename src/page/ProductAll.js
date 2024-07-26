import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../component/ProductCard';
import SlideBanner from '../component/SlideBanner';
import { productAction } from '../redux/actions/productAction';

const ProductAll = () => {
  const productList = useSelector(state=>state.product.productList);
  const [query, setQuery] = useSearchParams();
  const dispatch = useDispatch()

  const getProducts=()=>{
    let searchQuery =query.get('q') || "";
    dispatch(productAction.getProducts(searchQuery))
  }

  useEffect(() => {
    getProducts()
  }, [query])

  return (
    <div>
      <SlideBanner />
      <div>
        <p className='mini-title'>▼ Watch some items</p>
      </div>
      <Container>   {/*Container(부트스트랩):아이템이 가운데로 모이게 해주는 역할*/}
        <Row>
        {productList.map((menu, index)=><Col key={index} lg={3}><ProductCard item={menu}/></Col>)}
        </Row>
      </Container>
    </div>
  )
}

export default ProductAll
