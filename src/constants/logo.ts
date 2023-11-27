import { district100 } from '../res/img/logo/district100'
import { municipal100 } from '../res/img/logo/municipal100'
import { province100 } from '../res/img/logo/province100'
import { state1 } from '../res/img/logo/state1'
import { state50 } from '../res/img/logo/state50'

export type LogoType = 'district100' | 'municipal100' | 'province100' | 'state1' | 'state50'

interface Item {
  name: string
  key: LogoType
  url: string
  power: number
  explain: string
  level: string
}
export const logoLevelMap: Record<LogoType, Item> = {
  district100: {
    name: '区标100',
    url: district100,
    key: 'district100',
    power: 100 * 10000,
    explain: '区一百强',
    level: '初级荣耀'
  },
  municipal100: {
    name: '市标100',
    url: municipal100,
    key: 'municipal100',
    power: 100 * 1000,
    explain: '市一百强',
    level: '中级荣耀'
  },
  province100: {
    name: '省标100',
    url: province100,
    key: 'province100',
    power: 100 * 100,
    explain: '省一百强',
    level: '高级荣耀'
  },
  state50: {
    name: '国标50',
    url: state50,
    key: 'state50',
    power: 50 * 1,
    explain: '全国五十强',
    level: '顶级荣耀'
  },
  state1: {
    name: '国标1',
    url: state1,
    key: 'state1',
    power: 1 * 1,
    explain: '国服最强',
    level: '国服最强'
  }
}
export const logoLevelItems = Object.values(logoLevelMap)
