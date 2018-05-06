import * as React from 'react'
import styled, { css } from 'react-emotion'
import { lighten } from 'polished'
import Link from 'gatsby-link'

import { colors } from '../styles/variables'
import Container from './Container'
import { MenuItem } from '../types/config'

interface StyledHeaderProps {
  homeTemplate?: boolean
  pageTemplate?: boolean
  errorTemplate?: boolean
}

const StyledHeader = styled<StyledHeaderProps, 'header'>('header')`
  position: relative;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background: ${lighten(0.05, colors.darkgrey)} no-repeat center center;
  background-size: cover;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10;
    display: block;
    background: rgba(0, 0, 0, 0.18);
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: auto;
    left: 0;
    z-index: 10;
    display: block;
    height: 80px;
    background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0));
  }

  ${props =>
    props.homeTemplate &&
    css`
      &:after {
        display: none;
      }
    `};
`

const HeaderContent = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10vw 4vw;
  min-height: 200px;
  max-height: 450px;
  text-align: center;

  .site-title {
    z-index: 10;
    margin: 0;
    padding: 0;
    font-size: 3.8rem;
    font-weight: 700;
  }

  .site-description {
    z-index: 10;
    margin: 0;
    padding: 5px 0;
    font-size: 2.2rem;
    font-weight: 300;
    letter-spacing: 0.5px;
    opacity: 0.8;
  }
`

interface HeaderNavProps {
  homeTemplate?: boolean
  centered?: boolean
}

const HeaderNav = styled<HeaderNavProps, 'nav'>('nav')`
  position: relative;
  z-index: 300;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  overflow-y: hidden;
  height: 40px;
  font-size: 1.2rem;

  ${props =>
    props.homeTemplate &&
    css`
      @media (min-width: 900px) {
        position: relative;
        top: -70px;
      }
    `};

  ${props =>
    props.centered &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
    `};
`

interface HeaderNavLogoProps {
  centered?: boolean
}

const HeaderNavLogo = styled<HeaderNavLogoProps, any>(Link)`
  flex-shrink: 0;
  display: block;
  margin-right: 24px;
  padding: 11px 0;
  color: #fff;
  font-size: 1.7rem;
  line-height: 1em;
  font-weight: bold;
  letter-spacing: -0.5px;

  &:hover {
    text-decoration: none;
  }

  img {
    display: block;
    width: auto;
    height: 21px;
  }

  ${props =>
    props.centered &&
    css`
      margin-right: 0;
    `};
`

const NavLinks = styled('ul')`
  display: flex;
  margin: 0 0 0 -12px;
  padding: 0;
  list-style: none;

  li {
    display: block;
    margin: 0;
    padding: 0;
    text-transform: uppercase;

    a {
      display: block;
      margin: 0;
      padding: 10px 12px;
      color: #fff;
      opacity: 0.8;

      &:hover {
        text-decoration: none;
        opacity: 1;
      }
    }
  }
`

interface HeaderProps {
  title: string
  description?: string
  homeTemplate?: boolean
  pageTemplate?: boolean
  errorTemplate?: boolean
  menuItems?: MenuItem[]
}

const Header: React.SFC<HeaderProps> = ({
  title,
  description,
  homeTemplate,
  pageTemplate,
  errorTemplate,
  menuItems
}) => (
  <StyledHeader homeTemplate={homeTemplate} errorTemplate={errorTemplate}>
    <Container>
      {!pageTemplate && (
        <HeaderContent>
          <h1 className="site-title">{title}</h1>
          {description && <h2 className="site-description">{description}</h2>}
        </HeaderContent>
      )}
      <HeaderNav homeTemplate={homeTemplate} centered={errorTemplate}>
        {pageTemplate && (
          <HeaderNavLogo to="/" href="/" centered={errorTemplate}>
            {title}
          </HeaderNavLogo>
        )}
        {!errorTemplate &&
          menuItems && (
            <NavLinks>
              {menuItems.map(item => (
                <li key={item.link}>
                  {item.linkType === 'internal' && <Link to={item.link}>{item.name}</Link>}
                  {item.linkType === 'external' && (
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      {item.name}
                    </a>
                  )}
                </li>
              ))}
            </NavLinks>
          )}
      </HeaderNav>
    </Container>
  </StyledHeader>
)

export default Header
