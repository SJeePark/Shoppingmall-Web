import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';


const ProductDetail = () => {
  let {id} = useParams(); 
  const [product, setProduct] = useState(null);

  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/SJeePark/Shoppingmall-Web/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <Container>
      <Row>
      <Col className='product-img'><img src={product?.img}/></Col>
      <Col className='detail-section'>
        <div className='title-detail'>{product?.title}</div>
        <div className='price-detail'>￦{product?.price}</div>
        <div className='conscious-detail'><div>{product?.choice === true ? "Choice Conscious" : ""}</div></div>
      
        <Col>
        <Form.Select aria-label="Default select example" className='size-option'>
        <option >사이즈 선택</option>
        {product?.size && product.size.map((size) => (<option value={size}>{size}</option>))}
        </Form.Select>
        </Col>

        <div>
        <Button className='add-button' variant="dark" type="submit">추가</Button>
        </div>
        </Col>
      </Row>
    </Container>
    
  );
};

export default ProductDetail;
