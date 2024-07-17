import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ProductCard from '../component/ProductCard'

const ProductAll = () => {

  const [productList, setProductList] =useState([])

  const getProducts=async()=>{
    let url=`http://my-json-server.typicode.com/SJeePark/Shoppingmall-Web/products`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data)
  }

  useEffect(()=>{
    getProducts()
  })

  return (
    <div>
      <Container>   {/*Container(부트스트랩):아이템이 가운데로 모이게 해주는 역할*/}
        <Row>
        {productList.map((menu, index)=><Col key={index} lg={3}><ProductCard item={menu}/></Col>)}
        </Row>
      </Container>
    </div>
  )
}

export default ProductAll
