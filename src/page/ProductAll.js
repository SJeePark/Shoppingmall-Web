import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../component/ProductCard'
import SlideBanner from '../component/SlideBanner'

const ProductAll = () => {

  const [productList, setProductList] =useState([])
  const [query, setQuery] = useSearchParams();

  const getProducts=async()=>{
    let searchQuery =query.get('q') || "";
    let url=`https://my-json-server.typicode.com/SJeePark/Shoppingmall-Web/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log('query', searchQuery)
    setProductList(data)
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
