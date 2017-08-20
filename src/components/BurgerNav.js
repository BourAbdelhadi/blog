import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Flex } from 'grid-styled'

import { activeNavClassName, NavItem } from '@/styled/NavItem'
import hamburgerIcon from '@/assets/images/hamburger.svg'
import closeIcon from '@/assets/images/close.svg'

const Burber = styled.img`
  width: 16px;
  height: 16px;
  position: absolute;
  top: 10px;
  left: 10px;

  ${Aside} [data-toggle=true] & {
    display: none;
  }
`
const CloseBtn = styled.img`
  width: 16px;
  height: 16px;
  position: absolute;
  top: 10px;
  right: 10px;
`

const NavList = styled(Flex)`
  overflow: scroll;
  transition: all .5s ease-in-out;
  background: #fff;
  padding: 10px;
  padding-top: 30px;
  position: relative;
  transition: all .5s ease-in-out;
  min-width: 160px;
  display: none;

  ${Aside}[data-toggle=true] & {
    flex: 1;
    display: flex;
  }

  & a {
    padding: 10px;
    padding-bottom: 0;
  }
`

const Overlay = styled.div`
  background: rgb(0, 0, 0);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  display: none;

  ${Aside} [data-toggle=true] & {
    display: block;
  }
`

const Aside = styled(Flex)`
  // position: absolute;
  // top: 0;
  // left: 0;
  // height: 100%;
`

export default class BurgerNav extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isToggleOn: false }
  }

  render() {
    return (
      <Aside direction="column" data-toggle={this.state.isToggleOn}>
        <Burber src={hamburgerIcon} alt="菜单" onClick={() => this.toggle()} />

        <Overlay onClick={() => this.toggle()} />

        <NavList direction="column">
          <CloseBtn src={closeIcon} alt="关闭按钮" onClick={() => this.toggle()} />

          {this.props.sidebar.map((item, i) =>
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
  sidebar: PropTypes.array.isRequired,
}
