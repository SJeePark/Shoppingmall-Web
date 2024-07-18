import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성'];

const Navbar = () => {
  const navigate = useNavigate()
  const [searching, setSearching] = useState("");
  const getValue = (e) => {
    setSearching(e.target.value.toLowerCase())};

  const goToLogin=()=>{
      navigate("/login")
  }
  return (
    <div>
        <div>
          <div className='login-button' onClick={goToLogin}> 
            <FontAwesomeIcon icon={faUser} />
            <div className='log'>로그인</div>
          </div>
        </div>

        <div className='nav-section'>
          <img width={150} src='https://blog.kakaocdn.net/dn/Yt80C/btqDeJAYUBo/JQbTuukRladq2AUOeqgiEK/img.jpg'></img>
        </div>

        <div className='menu-area'>
            <ul className='menu-list'>
            {menuList.map((menu, index) => 
              (<li key={index}>{menu}</li>
              ))}
            </ul>
          <div className='search-box'>
              <FontAwesomeIcon icon={faSearch}/>
              <input placeholder="Search" onKeyPress={setSearching}></input>
          </div>
        </div>
    </div>
  )
}

export default Navbar
