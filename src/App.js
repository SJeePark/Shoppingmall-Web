import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import Login from './page/Login';
import ProductAll from './page/ProductAll';
import PrivateRoute from './route/PrivateRoute';


// 1. 전체상품페이지, 로그인, 상품상세페이지
// 2. 전체 상품페이지 - 전체 상품
// 3. 로그인 버튼을 누르면 로그인 페이지 
// 4. 상품디테일을 눌렀으나, 로그인이 안되있을 경우에는 로그인페이지가 먼저 나온다. 
// 5. 로그인이 되어 있을 경우에는 상품 디테일 볼 수 있다. 
// 6. 로그아웃 버튼을 클릭하면 로그아웃
// 7. 아웃되면 상품 디테일페이지를 볼수 없음, 다시 로그인 페이지로그인을 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보인다. 
// 8. 상품 검색할 수 있다. 


function App() {
  const [authenticate,setAuthenticate]=useState(false)  //true면 로그인, false면 로그인X
  
  useEffect(()=>{
    console.log('app.js authenticate', authenticate)
  }, [authenticate])

  return (
    <div>
    <Navbar />
    <Routes>
      <Route path='/' element={<ProductAll/>} />
      <Route path='/login' element={<Login setAuthenticate={setAuthenticate}/>}/>
      <Route path='/product/:id' element={<PrivateRoute authenticate={authenticate}/>}/>
    </Routes>
    </div>
  );
}

export default App;
