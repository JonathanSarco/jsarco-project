import styled from 'styled-components'
import NavBar from 'react-bootstrap/Navbar'

export const CustomNavBar = styled(NavBar)`
    position: fixed;
    z-index: 999;
    height: 100%;
    top: 50%;
    left: 50px;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);

  @media (max-width: 767.98px) {
    left: 10px;
  }

  .nav-menu {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  .nav-menu .nav-item {
    position: relative;
    min-width: 150px;
    text-align: left;
    padding-left: 20px;
  }

  .nav-menu .nav-item .dot {
    display: block;
    color: white;
    padding: 5px 0;
  }

  .nav-menu .nav-item .dot::before,
  .nav-menu .nav-item .dot::after {
    display: block;
    position: absolute;
    content: "";
    border-radius: 50%;
    top: 50%;
    -webkit-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }
  
  .nav-menu .nav-item .dot::before {
    width: 6px;
    height: 6px;
    left: 0;
    border: 1px solid rgba(255, 255, 255, 0.5);
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }
  
  .nav-menu .nav-item .dot::after {
      width: 16px;
      height: 16px;
      border: 2px solid #9d8f8f;
      left: -5px;
      -webkit-transform: translateY(-50%) scale(0);
      -ms-transform: translateY(-50%) scale(0);
      transform: translateY(-50%) scale(0);
  }

  .nav-menu .nav-item .dot.active::before,
  .nav-menu .nav-item:hover .dot::before {
    background: #9d8f8f;
    border-color: #9d8f8f;
  }

  .nav-menu .nav-item .dot.active::after,
  .nav-menu nav-item:hover .dot::after {
    -webkit-transform: translateY(-50%) scale(1);
    -ms-transform: translateY(-50%) scale(1);
    transform: translateY(-50%) scale(1);
  }
  
  .nav-menu .nav-item .dot span {
    display: inline-block;
    opacity: 0;
    font-weight: 500;
    letter-spacing: 0.5px;
    text-transform: capitalize;
    border-bottom: 4px solid #9d8f8f;
    padding: 5px 10px;
    border-radius: 1px;
    margin-right: 30px;
    -webkit-transform: translateX(20px);
    -ms-transform: translateX(20px);
    transform: translateX(20px);
    -webkit-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    transition: all 0.5s ease;
    font-size: 15px;
  }
  .nav-menu .nav-item .dot span::before {
    display: block;
    position: absolute;
    content: "";
    top: 50%;
    -webkit-transform: translate(-7px, -50%);
    -ms-transform: translate(-7px, -50%);
    transform: translate(-7px, -50%);
    left: 0;
    -webkit-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    transition: all 0.5s ease;
}

.nav-menu .nav-item .dot.active span,
.nav-menu .nav-item:hover .dot span {
  -webkit-transform: translateX(0px);
  -ms-transform: translateX(0px);
  transform: translateX(0px);
  opacity: 1;
}
`;
