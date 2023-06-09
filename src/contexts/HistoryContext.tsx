import { ReactNode, useCallback, useEffect, useState } from 'react'
import { api } from '../lib/axios'
import { createContext } from 'use-context-selector'
interface PropsHistoryOperation {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

interface PropsNewHistoryOperation {
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
}

interface HistoryContextType {
  historico: PropsHistoryOperation[]
  fetchHistory: (query?: string) => Promise<void>
  createHistory: (data: PropsNewHistoryOperation) => Promise<void>
}

interface HistoryProviderProps {
  children: ReactNode
}
export const HistoryContext = createContext({} as HistoryContextType)

export function HistoryProvider({ children }: HistoryProviderProps) {
  const [historico, setHistoryOperation] = useState<PropsHistoryOperation[]>([])

  const fetchHistory = useCallback(async (query?: string) => {
    const response = await api.get('historico', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })
    setHistoryOperation(response.data)
  }, [])

  const createHistory = useCallback(async (data: PropsNewHistoryOperation) => {
    const { description, price, category, type } = data

    const respose = await api.post('historico', {
      description,
      price,
      category,
      type,
      createdAt: new Date(),
    })

    setHistoryOperation((state) => [respose.data, ...state])
  }, [])

  useEffect(() => {
    fetchHistory()
  }, [fetchHistory])

  return (
    <HistoryContext.Provider value={{ historico, fetchHistory, createHistory }}>
      {children}
    </HistoryContext.Provider>
  )
}
