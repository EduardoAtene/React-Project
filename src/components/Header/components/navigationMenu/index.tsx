import React from 'react'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import classNames from 'classnames'
import { CaretDownIcon } from '@radix-ui/react-icons'
import './styles.css'
import logoImage from '../../../../assets/logo_image.svg'
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

const NavigationMenuDemo = () => {
  return (
    <NavigationMenu.Root className="NavigationMenuRoot">
      <NavigationMenu.List className="NavigationMenuList">

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            Livros <CaretDownIcon className="CaretDown" aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            <ul className="List one">
              <li style={{ gridRow: 'span 3' }}>
                <NavigationMenu.Link asChild>
                  <div className="CalloutBooks">
                    <div className="CalloutBackgroud">
                      <div className="CalloutHeading">
                        Educação acessivel para todos!
                      </div>
                      <p className="CalloutText">Liberdade nas páginas, generosidade no coração.</p>
                    </div>
                  </div>
                </NavigationMenu.Link>
              </li>

              <ListItemNav href="/anuncios" title="Catálogo de Livros">
                Aqui você encontra todos os livros que foram doados pela população!
              </ListItemNav>
              <ListItemNav href="/receber" title="Como pegar um Livro">
                Aqui são os procedimentos para pegar o livro.
              </ListItemNav>
              <ListItemNav href="/" title="">

              </ListItemNav>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            Doe Já <CaretDownIcon className="CaretDown" aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            <ul className="List one">
              <li style={{ gridRow: 'span 3' }}>
                <NavigationMenu.Link asChild>
                  <a className="Callout" href="/">
                    <div className="CalloutBackgroud">
                      <div className="CalloutHeading">
                        Compartilhe a magia das palavras,<br/> doe um livro
                      </div>
                      <p className="CalloutText"> Uma forma de democratizar a educação!</p>
                    </div>
                  </a>
                </NavigationMenu.Link>
              </li>

              <ListItemNav href="/comodoar" title="Doar Livro">
              Liberte os livros que ocupam espaço nas suas prateleiras e dê a eles a oportunidade de encantar novos leitores.
               Sua doação pode ser o primeiro capítulo de uma jornada incrível!
              </ListItemNav>
              <ListItemNav href="/comodoar" title="Como doar Livros">
                Quais meios devo fazer para realizar a doação de livro.
              </ListItemNav>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link 
            className="NavigationMenuLink"
            href="/"
          >
            <AvatarModel src={logoImage} />
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            Sobre nós <CaretDownIcon className="CaretDown" aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            <ul className="List one">
              <li style={{ gridRow: 'span 3' }}>
                <NavigationMenu.Link asChild>
                  <a className="CalloutAbout" href="/">
                    <div className="CalloutBackgroud">
                      <div className="CalloutHeading">
                        Uma educação acessivel
                      </div>
                      <p className="CalloutText">Doe já seu livro</p>
                    </div>
                  </a>
                </NavigationMenu.Link>
              </li>

              <ListItemNav href="/quemsomos" title="Quem Somos">
                Samos uma entidade com o intuito de democratizar a Educação para
                todos.
              </ListItemNav>
              <ListItemNav href="/quemsomos" title="O que fazemos">
                Facilitamos a comunicação para o uso de Entidades.
              </ListItemNav>
              <ListItemNav href="/contato" title="Contato">
                Entre em contato com a gente!
              </ListItemNav>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link
            className="NavigationMenuLink"
            href="https://github.com/EduardoAtene/React-Project"
          >
            Github
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator className="NavigationMenuIndicator">
          <div className="Arrow" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="ViewportPosition">
        <NavigationMenu.Viewport className="NavigationMenuViewport" />
      </div>
    </NavigationMenu.Root>
  )
}

export default NavigationMenuDemo
