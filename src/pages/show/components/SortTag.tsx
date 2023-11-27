const HEIGHT = 25
const ANGLE_NUMBER = 1.4
const BORDER_HEIGHT = HEIGHT / ANGLE_NUMBER
const COLOR = '#1c3d66'
const BORDER_COLOR = '#45629a'

const style: React.CSSProperties = {
  height: BORDER_HEIGHT,
  width: BORDER_HEIGHT,
  backgroundColor: COLOR,
  transform: 'rotate(45deg)',
  borderColor: BORDER_COLOR
}
export const SortTag = ({ name, className = '' }: { name: string; className?: string }) => {
  return (
    <div className={className + ' flex'}>
      <div className="flex items-center relative">
        <div
          className="absolute border-l-[2px] border-b-[2px] border-solid"
          style={{ ...style, left: -BORDER_HEIGHT / 2 }}
        ></div>
        <div
          className="flex-1 z-10 border-y-[2px] border-solid flex items-center justify-center text-[#9b9e7f] text-[15px] px-[2px]"
          style={{ background: COLOR, height: HEIGHT, borderColor: BORDER_COLOR }}
        >
          {name}
        </div>
        <div
          className="absolute border-r-[2px] border-t-[2px] border-solid"
          style={{ ...style, right: -BORDER_HEIGHT / 2 }}
        ></div>
      </div>
    </div>
  )
}
