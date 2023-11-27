import { LogoType, logoLevelMap } from '../../../constants/logo'
import { logoBackground } from '../../../res/img/logo-background'

export const LogoTag = ({ type, className }: { type: LogoType; className?: string }) => {
  return (
    <div className={(className || '') + ' absolute flex justify-center'}>
      <img src={logoBackground} className="rounded-b-[5px]"></img>
      <img
        style={{ maxWidth: 'none' }}
        src={logoLevelMap[type].url}
        className="absolute top-[-10px] w-[108px]"
      ></img>
    </div>
  )
}
