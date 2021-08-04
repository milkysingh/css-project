import React from "react";
import styled from "styled-components";
export default function Header() {
  return (
    <MainHeader>
      <HeaderWrapper>
        <Logo>
          <Img
            src="http://webpage.pace.edu/kp31080n/omnifood/resources/img/logo-white.png"
            alt=""
          />
        </Logo>
        <Nav>
          <NavLink href="/">FOOD DELIVERY </NavLink>
          <NavLink href="/">HOW IT WORKS </NavLink>
          <NavLink href="/">OUR CITIES </NavLink>
          <NavLink href="/">SIGN UP</NavLink>
        </Nav>
      </HeaderWrapper>
      <Hero>
        <HeroHeading>
          GOODBYE JUNK FOOD. <br />
          HELLO SUPER HEALTHY MEALS.
        </HeroHeading>
        <Button>I'm Hungry</Button>
        <Button>Show me more</Button>
      </Hero>
    </MainHeader>
  );
}
const MainHeader = styled.section`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("http://webpage.pace.edu/kp31080n/omnifood/resources/css/img/hero.jpg");
  background-size: cover;
  background-position: center;
  height: 100vh;
  background-attachment: fixed;
  position: relative;
  padding: 16px;
`;
const Logo = styled.div`
  width: 100px;
  height: 100px;
`;

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: ${18 / 16}rem;
  font-weight: 600;
  padding: 10px;
`;
const Nav = styled.nav`
  display: flex;
  gap: 28px;
`;
const NavLink = styled.a`
  color: white;
  text-decoration: none;
  padding-bottom: 4px;
  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom: 2px solid hsl(28deg 80% 52%);
  }
`;
const Hero = styled.main`
  position: absolute;
  left: 18vw;
  top: 42vh;
`;
const HeroHeading = styled.h1`
  color: white;
  font-size: ${50 / 16}rem;
  letter-spacing: 0.5px;
  line-height: ${54 / 16}rem;
  margin-bottom: 16px;
  font-weight: 500;
`;
const Button = styled.button`
  background-color: hsl(28deg 80% 52%);
  color: white;
  min-width: 170px;
  min-height: 45px;
  padding: 8px 30px;
  font-size: ${19 / 16}rem;
  font-weight: 700;
  border-radius: 20px;
  border: none;
  margin-right: 25px;
  border: 1px solid hsl(28deg 80% 52%);
  cursor: pointer;
  line-height: ${20 / 16}rem;
  &:hover {
    background-color: transparent;
    border: 1px solid hsl(28deg 80% 52%);
    color: hsl(28deg 80% 52%);
  }
`;
const Img = styled.img`
  width: 100%;
`;
