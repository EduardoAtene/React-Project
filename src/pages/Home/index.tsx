import { MainPropagandaContent, ImageContainerPropaganda, DivContainerPropaganda } from './style'
import { HistoryContext } from '../../contexts/HistoryContext'
import { dateFormatter, priceFormatter } from '../../utility/formatter'
import { useContextSelector } from 'use-context-selector'

import imgDesignCenter from '../../assets/download.png'
export function Home() {
  const historico = useContextSelector(HistoryContext, (v) => {
    return v.historico
  })
  return (
    <>
      <MainPropagandaContent>
        <ImageContainerPropaganda src={imgDesignCenter} />
        <DivContainerPropaganda>
          <h2>Livros que voam das estantes</h2>
          <h2>para os corações</h2>
          <h2>dos leitores.</h2>
          <span>Leia, doe, inspire - juntos, fazemos a diferença!</span>
        </DivContainerPropaganda>
      </MainPropagandaContent>
    </>
  )
}
