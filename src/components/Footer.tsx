import * as React from 'react'
import styled from 'react-emotion'
import Link from 'gatsby-link'
import { darken } from 'polished'
import { colors } from '../styles/variables'
import { OuterWrapper, InnerWrapper } from './Container'
import { MenuItem } from '../types/config'

const Wrapper = styled(OuterWrapper.withComponent('footer'))`
  position: relative;
  padding-top: 20px;
  padding-bottom: 60px;
  color: #fff;
  background: ${darken(0.15, colors.darkgrey)};
`

const Inner = styled(InnerWrapper)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.3rem;

  a {
    color: rgba(255, 255, 255, 0.7);

    &:hover {
      color: rgba(255, 255, 255, 1);
      text-decoration: none;
    }
  }

  @media (max-width: 650px) {
    flex-direction: column;
  }
`

const FooterNav = styled('nav')`
  display: flex;

  a {
    position: relative;
    margin-left: 20px;

    &:before {
      content: '';
      position: absolute;
      top: 11px;
      left: -11px;
      display: block;
      width: 2px;
      height: 2px;
      background: #fff;
      border-radius: 100%;
    }

    &:first-of-type:before {
      display: none;
    }
  }

  @media (max-width: 650px) {
    a:first-child {
      margin-left: 0;
    }
  }
`

interface FooterProps {
  className?: string
  title: string
  menuItems?: MenuItem[]
}

const Footer: React.SFC<FooterProps> = ({ title, menuItems, className }) => (
  <Wrapper className={className}>
    <Inner>
      <section className="copyright">
        <Link to="/">{title}</Link> &copy; 2018
      </section>

      {menuItems && (
        <FooterNav>
          {menuItems.map(item => {
            if (item.linkType === 'internal') {
              return <Link to={item.link}>{item.name}</Link>
            } else {
              return (
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.name}
                </a>
              )
            }
          })}
        </FooterNav>
      )}
    </Inner>
  </Wrapper>
)

export default Footer
