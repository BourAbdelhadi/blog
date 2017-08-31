import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Flex } from 'grid-styled'

import { activeNavClassName, NavItem } from '@/styled/navItem'
import hamburgerIcon from '@/assets/images/hamburger.svg'
import closeIcon from '@/assets/images/close.svg'

const BurberIcon = styled.img`
  width: 1em;
  height: 1em;
  opacity: 1;
  transition: all .2s ease-in-out;

  ${Aside} [data-toggle=true] & {
    opacity: 0;
  }
`
const Title = styled.h2`
  font-size: 1.3em;
  margin: 0;
  margin-left: 10px;
`

const Header = styled(Flex)`
  background: ${props => props.theme.color.bgDark};
  padding: ${props => props.theme.gutterLarge} ${props => props.theme.gutter};
`

const CloseBtn = styled.img`
  width: 1em;
  height: 1em;
  transform: scale(1.2);
  margin-right: 10px;
  margin-left: auto;
`

const NavList = styled(Flex)`
  background: #fff;
  padding: 10px 0;
  overflow: scroll;

  position: fixed;
  height: 100%;
  transform: translate(-100%);

  opacity: 0;
  transition: all .2s ease-in-out;

  ${Aside}[data-toggle=true] & {
    width: 80%;
    transform: translate(0);
    opacity: 1;
  }
`

const Overlay = styled.div`
  background: rgba(0, 0, 0, .3);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  display: none;

  ${Aside} [data-toggle=true] & {
    opacity: 1;
    display: block;
  }
`

const Aside = styled(Flex)``

export default class BurgerNav extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    routes: PropTypes.array,
  }

  constructor(props) {
    super(props)
    this.state = { isToggleOn: false }
  }

  render() {
    const { location, routes } = this.props
    const matchedRoute = routes.find(r => r.path === location.pathname)

    return (
      <Aside direction="column" data-toggle={this.state.isToggleOn}>
        <Header align="center">
          <BurberIcon
            src={hamburgerIcon}
            alt="菜单"
            onClick={() => this.toggle()}
          />
          <Title>
            {matchedRoute ? matchedRoute.text : ''}
          </Title>
        </Header>

        <Overlay onClick={() => this.toggle()} />

        <NavList direction="column">
          <CloseBtn
            src={closeIcon}
            alt="点击关闭按钮"
            onClick={() => this.toggle()}
          />

          {this.props.routes.map((item, i) =>
            <NavItem
              onClick={() => this.toggle()}
              exact={true}
              key={i}
              to={item.path}
              activeClassName={activeNavClassName}>
              {item.text}
            </NavItem>
          )}
        </NavList>
      </Aside>
    )
  }

  toggle() {
    this.setState(prevState => ({ isToggleOn: !prevState.isToggleOn }))
  }
}

BurgerNav.propTypes = {
  routes: PropTypes.array.isRequired,
}
