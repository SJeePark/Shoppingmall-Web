import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성'];

const Navbar = () => {
  return (
    <div>
        <div>
          <div className='login-button'> 
            <FontAwesomeIcon icon={faUser} />
            <div className='log'>로그인</div>
          </div>
        </div>

        <div className='nav-section'>
          <img width={150} src='https://blog.kakaocdn.net/dn/Yt80C/btqDeJAYUBo/JQbTuukRladq2AUOeqgiEK/img.jpg'></img>
        </div>

        <div className='menu-area'>
            <ul className='menu-list'>
            {menuList.map((menu) => 
              (<li>{menu}</li>
              ))}
            </ul>
          <div className='search-box'>
              <FontAwesomeIcon icon={faSearch} />
              <input value={"제품 검색"}></input>
          </div>
        </div>
    </div>
  )
}

export default Navbar
