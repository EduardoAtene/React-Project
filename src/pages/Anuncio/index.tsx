import { ButtonCards, Cards, CardsContainer, ImagenCard, TituloTexto, TutorialContainer } from "./style";



export function Anuncios() {

  

  function Card({ item }:any) {
    return (
        <Cards>
          <TituloTexto>
            <h3>{item.title}</h3>
          </TituloTexto>
          <p> *Img* </p>
          <ImagenCard>            
          </ImagenCard>
          <p>{item.description}</p>
          <ButtonCards>
            <button onClick={() => navigateToItemPage(item.id)}>Ver detalhes</button>
          </ButtonCards>
        </Cards>
    );
  }

  
  function navigateToItemPage(_itemId:any) {
    // Implemente a lógica para navegar para a página do item com base no ID
    // Por exemplo, você pode usar um roteador ou atualizar a URL com o ID do item
  }
  

  const itemsFromDatabase = [
    { id: 1, title: 'Item 1', description: 'Descrição do Item 1' },
    { id: 2, title: 'Item 2', description: 'Descrição do Item 2' },
    { id: 3, title: 'Item 3', description: 'Descrição do Item 3' },
    { id: 4, title: 'Item 2', description: 'Loremsa an ajdnjasn' },
    { id: 5, title: 'Item 3', description: 'Descrição do Item 3' },
    // Adicione mais itens conforme necessário
  ];

  return (
    <>
      <TutorialContainer>
        <h2>Anuncios</h2>
        <CardsContainer>
        {itemsFromDatabase.map(item => (
          <Card key={item.id} item={item} />
        ))}
      </CardsContainer>
      </TutorialContainer>

      
    </>
  );
}

