import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className='logo-container'>
        <p>Get more Information<br></br></p>
        <img height={'50px'} src='https://e7.pngegg.com/pngimages/14/594/png-clipart-computer-icons-logo-instagram-miscellaneous-thumbnail.png' onClick={() => window.open("https://www.instagram.com/hm/")}></img>
        <img src = 'https://w7.pngwing.com/pngs/597/716/png-transparent-youtube-computer-icons-safe-place-rape-crisis-center-sparcc-youtube-angle-logo-black.png' onClick={()=> window.open("https://www.youtube.com/user/hennesandmauritz")}></img>
        <img src='https://cdn.imweb.me/thumbnail/20211130/33278f814663e.png' onClick={()=>window.open('https://pf.kakao.com/_mmfQZ')}></img>
        <img  src='https://e7.pngegg.com/pngimages/583/653/png-clipart-computer-icons-facebook-like-us-on-facebook-rectangle-logo.png' onClick={()=>window.open('https://www.facebook.com/hm')}></img>
        </div>

        <div className='address'> 서울특별시 강남구 영동대로 421, 9층 삼탄빌딩 (대치동) 06182 | 대표번호 080-822-0220 | info.kr@hm.com</div>
    </footer>
  )
}

export default Footer
