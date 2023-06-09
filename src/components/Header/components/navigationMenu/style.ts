import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import styled from 'styled-components'

export const NavigationMenuRoot = styled(NavigationMenu.Root)`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100vw;
  z-index: 1;
`

export const NavigationMenuList = styled(NavigationMenu.List)`
  display: flex;
  justify-content: center;
  background-color: white;
  padding: 4px;
  border-radius: 6px;
  list-style: none;
  box-shadow: 0 2px 10px ${(props) => props.theme['gray-900']};
  margin: 0;
`

export const NavigationMenuItem = styled(NavigationMenu.Item)`
  padding: 8px 12px;
  outline: none;
  user-select: none;
  font-weight: 500;
  line-height: 1;
  border-radius: 4px;
  font-size: 15px;
  color: ${(props) => props.theme.black};
`

export const NavigationMenuLink = styled(NavigationMenu.Link)`
  display: block;
  outline: none;
  text-decoration: none;
  user-select: none;
  padding: 12px;
  border-radius: 6px;
  font-size: 15px;
  line-height: 1;
  display: block;
  text-decoration: none;
  font-size: 15px;
  line-height: 1;
  &:focus {
    box-shadow: 0 0 0 2px ${(props) => props.theme.primary};
  }

  &:hover {
    background-color: ${(props) => props.theme['yellow-ofusc']};
  }
`

export const NavigationMenuTrigger = styled(NavigationMenu.Trigger)`
  padding: 8px 12px;
  outline: none;
  user-select: none;
  font-weight: 500;
  line-height: 1;
  border-radius: 4px;
  font-size: 15px;
  color: ${(props) => props.theme.black};

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2px;

  &:focus {
    box-shadow: 0 0 0 2px ${(props) => props.theme.primary};
  }

  &:hover {
    background-color: ${(props) => props.theme['yellow-ofusc']};
  }
`

export const NavigationMenuContent = styled(NavigationMenu.Content)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  animation-duration: 250ms;
  animation-timing-function: ease;

  &[data-motion='from-start'] {
    animation-name: enterFromLeft;
  }
  &[data-motion='from-end'] {
    animation-name: enterFromRight;
  }
  &[data-motion='to-start'] {
    animation-name: exitToLeft;
  }
  &[data-motion='to-end'] {
    animation-name: exitToRight;
  }

  @media only screen and (min-width: 600px) {
    width: auto;
  }
`
export const NavigationMenuViewport = styled(NavigationMenu.Viewport)`
  position: relative;
  transform-origin: top center;
  margin-top: 10px;
  width: 100%;
  background-color: white;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  height: var(--radix-navigation-menu-viewport-height);
  transition: width, height, 300ms ease;

  &[data-state='open'] {
    animation: scaleIn 200ms ease;
  }

  &[data-state='closed'] {
    animation: scaleOut 200ms ease;
  }
`
