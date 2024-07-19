import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useMediaQuery } from "react-responsive";
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';

const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성'];

const Navbar = ({ authenticate, setAuthenticate }) => {
  const navigate = useNavigate();

  const goToLogin = () => {
    if (!authenticate) {
      navigate('/login');
    } else {
      setAuthenticate(false);
      navigate('/');
    }
  };

  const goToHome = () => {
    navigate('/');
  };

  const logState = () => {
    return authenticate ? '로그아웃' : '로그인';
  };

  const search = (event) => {
    if (event.key === 'Enter') {
      const keyword = event.target.value;
      navigate(`/?q=${keyword}`);
    }
  };

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isPc = useMediaQuery({ query: '(min-width: 768px)' });

  return (
    <div>
      <div>
        <div className='login-button' onClick={goToLogin}>
          <FontAwesomeIcon icon={faUser} />
          <div className='log'>{logState()}</div>
        </div>
      </div>

      <div className='nav-section'>
        <img
          width={150}
          src='https://blog.kakaocdn.net/dn/Yt80C/btqDeJAYUBo/JQbTuukRladq2AUOeqgiEK/img.jpg'
          onClick={goToHome}
          alt='Logo'
        />
      </div>

      <div className='menu-area'>
        {isPc && (
          <div className='menu-container'>
          <ul className='menu-list'>
            {menuList.map((menu, index) => (
              <li key={index}>{menu}</li>
            ))}
          </ul>
          <div className='search-box'>
          <FontAwesomeIcon icon={faSearch} />
          <input onKeyPress={search} placeholder='Search' aria-label='Search'/>
        </div>
        </div>
        )}
      </div>

      {isMobile && <Sidebar />}

    </div>
  );
};


export default Navbar;


// 로그아웃 시스템
// authenticate: true -> 로그아웃, false - 로그인
// 로그인 버튼 -> goToLogin
// 로그아웃 버튼 -> authenticate false로 전환
// false로 전환 후 메인페이지로 이동