import '@arco-design/web-react/dist/css/arco.css'
import { useContext, useEffect, useMemo, useRef } from 'react'
import { logoLevelItems } from '../../constants/logo'
import { background } from '../../res/img/background'
import { AppContext, ShowItem } from '../../stores/useAppContext'
import { HeroCard } from './components/HeroCard'
import { Message } from '@arco-design/web-react'

export const Show = () => {
  const { showItems } = useContext(AppContext)
  const isMax = showItems.length >= 6

  const levelText = useRef<Record<string, number>>({} as any)
  const sortShowItems = useMemo(() => {
    const powerList = logoLevelItems.sort((item1, item2) => item1.power - item2.power)
    const result: ShowItem[] = []
    powerList.forEach((item) => {
      let i = 0
      showItems.forEach((_item) => {
        if (_item.logo === item.key) {
          result.push(_item)
          i++
        }
      })
      levelText.current[item.level] = i
    })
    return result
  }, [showItems])

  useEffect(() => {
    Message.info('请打开手机的旋转方向并横置手机来获得最佳效果')
    enterFullscreen()
  }, [])

  function enterFullscreen() {
    const element = document.documentElement as any
    if (element.requestFullscreen) {
      element.requestFullscreen()
    } else if (element.mozRequestFullScreen) {
      // Firefox
      element.mozRequestFullScreen()
    } else if (element.webkitRequestFullscreen) {
      // Chrome, Safari and Opera
      element.webkitRequestFullscreen()
    } else if (element.msRequestFullscreen) {
      // IE/Edge
      element.msRequestFullscreen()
    }
  }
  return (
    <div className="h-full px-[100px] pt-[80px]">
      <img src={background} className="absolute top-0 bottom-0 left-0 right-0 z-[-1]" />
      <div
        className="flex items-center space-x-[20px] overflow-x-auto"
        style={{ justifyContent: isMax ? '' : 'center' }}
      >
        {sortShowItems.map((item, index) => (
          <HeroCard key={index} name={item.name} src={item.url} logo={item.logo!}></HeroCard>
        ))}
      </div>
      <div
        className="flex space-x-[40px]"
        style={{ justifyContent: isMax ? 'space-between' : 'center' }}
      >
        {Object.entries(levelText.current)
          .filter(([_, value]) => value > 0)
          .map(([key, value]) => (
            <div className="flex" key={key}>
              <div className="text-[#c5ced4] text-[13px]">{key}</div>
              <div className="text-[#cdb764] text-[13px] ml-[8px]">
                <span className="text-[12px]">{value}</span>
                <span>个</span>
              </div>
            </div>
          ))}
        {isMax && (
          <div className="text-[#789bd3] text-[12px]">
            <span>仅显示排名最高的</span>
            <span className="">6</span>
            <span>名英雄</span>
          </div>
        )}
      </div>
    </div>
  )
}
