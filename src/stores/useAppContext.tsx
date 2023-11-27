import { createContext } from 'react'
import { LogoType } from '../constants/logo'

export interface ShowItem {
  name: string
  id: number
  logo: LogoType | undefined
  url: string
}
export const AppContext = createContext<{
  showItems: ShowItem[]
  setShowItems: (value: ShowItem[]) => void
}>({
  showItems: [],
  setShowItems: () => {}
})
