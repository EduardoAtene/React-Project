import React from 'react'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import classNames from 'classnames'
import { CaretDownIcon } from '@radix-ui/react-icons'
import './styles.css'
import { AvatarModel } from '../../../AvatarModel'

const ListItemNav = React.forwardRef(({ className, children, title, ...props }: any, forwardedRef) => (
    <li>
      <NavigationMenu.Link asChild>
        <a
          className={classNames('ListItemLink', className)}
          {...props}
          ref={forwardedRef}
        >
          <div className="ListItemHeading">{title}</div>
          <p className="ListItemText">{children}</p>
        </a>
      </NavigationMenu.Link>
    </li>
));

const NavigationPerfilMenu = () => {
  return (
    <NavigationMenu.Root className="NavigationMenuRootPerfil">
      <NavigationMenu.List className="NavigationMenuListPerfil">
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="NavigationMenuTriggerPerfil">
        <AvatarModel
          src='https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80'
        />
            <CaretDownIcon className="CaretDownPerfil" aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContentPerfil">
            <ul className="List">

              <ListItemNav href="/colors" title="Meu Perfil">
                Entre aqui e gerencie suas informações!
              </ListItemNav>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
  
        <NavigationMenu.Indicator className="NavigationMenuIndicatorPerfil">
          <div className="ArrowPerfil" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="ViewportPositionPerfil">
        <NavigationMenu.Viewport className="NavigationMenuViewportPerfil" />
      </div>
    </NavigationMenu.Root>
  )
}

export default NavigationPerfilMenu
