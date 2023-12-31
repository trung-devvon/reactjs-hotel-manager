import clsx from 'clsx'
import { ReactNode, memo } from 'react'

interface Props extends React.HTMLAttributes<HTMLTitleElement> {
  children: ReactNode
}
function Title({ children, className }: Props) {
  return (
    <h2
      className={clsx(
        'max-h-[70px] font-bold text-3xl tracking-tight text-main-500 px-5 h-[70px] flex items-center border-b border-main-200',
        className
      )}
    >
      {children}
    </h2>
  )
}
export default memo(Title)
