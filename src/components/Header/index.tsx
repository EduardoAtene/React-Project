import { HeaderContainer, HeaderContent, LogoImageContent } from './style'

import logoImage from '../../assets/logo_image.svg'
import NavigationMenuDemo from './components/navigationMenu'
import NavigationPerfilMenu from './components/NavigationPerfilMenu'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoImageContent>
          <img src={logoImage} />
          <h2> BookShare</h2>
        </LogoImageContent>
        <NavigationMenuDemo />
        <NavigationPerfilMenu />
        {/* <NavButtonHeader>
                <ListDashes size={26}/>
            </NavButtonHeader> */}
      </HeaderContent>
    </HeaderContainer>
  )
}
