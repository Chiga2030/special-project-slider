import { clsx, } from 'clsx'
import { ReactNode, } from 'react'

import styles from './Button.module.scss'


interface Props {
  children: ReactNode
  className?: string
}


export const Button = ({
  children,
  className,
}: Props): JSX.Element => {
  return (
    <button
      className={ clsx(styles.button, className) }
      type={ 'button' }
    >
      { children }
    </button>
  )
}
