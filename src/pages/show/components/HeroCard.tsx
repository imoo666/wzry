import { useMemo } from 'react'
import { LogoType, logoLevelMap } from '../../../constants/logo'
import { LogoTag } from './LogoTag'
import { SortTag } from './SortTag'

export const HeroCard = ({ name, src, logo }: { name: string; src: string; logo: LogoType }) => {
  const label = useMemo(() => {
    const logoDetail = logoLevelMap[logo]
    const local = JSON.parse(localStorage.getItem('local')!)[logoDetail.key.slice(0, -3)]
    const result = (logoDetail.key.includes('state') ? '' : local) + logoDetail.explain
    return result
  }, [])

  return (
    <div className="h-[200px]">
      <div className="bg-[#28466c] rounded-b-[5px] w-[100px] shrink-0 mt-[10px]">
        <div className="relative">
          {/* 标签 */}
          <SortTag
            name={label}
            className="absolute flex justify-center w-full scale-75 mt-[-12px]"
          />

          {/* 名字 */}
          <div
            className="absolute bottom-0 h-[40px] w-full text-[12px] text-[#cdd4dc] flex flex-col-reverse"
            style={{ background: 'linear-gradient(to top, #222, transparent)' }}
          >
            <div className="ml-[2px] mb-[4px] scale-[90%] origin-bottom-left">{name}</div>
          </div>

          {/* 图片 */}
          <img className="h-[150px] w-full" src={src}></img>
        </div>

        {/* 标 */}
        <div className="relative">
          <LogoTag type={logo}></LogoTag>
        </div>
      </div>
    </div>
  )
}
