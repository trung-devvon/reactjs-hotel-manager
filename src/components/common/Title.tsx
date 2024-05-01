import clsx from 'clsx'
import { ReactNode, memo } from 'react'

interface Props extends React.HTMLAttributes<HTMLTitleElement> {
  children: ReactNode
  line?: boolean
  px?: boolean
}
function Title({ children, className, line = true, px = true }: Props) {
  return (
    <h2
      className={clsx(
        'max-h-[70px] font-bold text-3xl tracking-tight text-main-500 h-[70px] flex items-center',
        line && 'border-b border-main-200',
        px && 'px-5',
        className
      )}
    >
      {children}
    </h2>
  )
}
export default memo(Title)
