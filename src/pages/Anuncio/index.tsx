import { ButtonCards, Cards, CardsContainer, TutorialContainer } from "./style";



export function Anuncios() {

  

  function Card({ item }:any) {
    return (
        <Cards>
          <h3>{item.title}</h3>
          <p>{item.description}</p><br></br>
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
        <h2>Livros que voam das estantes</h2>
        <h2>para os corações</h2>
        <h2>dos leitores.</h2>
        <span>Leia, doe, inspire - juntos, fazemos a diferença!</span>
      </TutorialContainer>

      <CardsContainer>
        {itemsFromDatabase.map(item => (
          <Card key={item.id} item={item} />
        ))}
      </CardsContainer>
    </>
  );
}

