import Image from 'next/image'
import { ReactNode, } from 'react'

import icon from '../../lib/images/flash-icon.svg'

import styles from './ProjectType.module.scss'


interface Props {
  children: ReactNode
}


export const ProjectType = ({
  children,
}: Props): JSX.Element => {
  return (
    <p className={ styles.wrapper }>
      <Image alt={ '' } src={ icon } />
      { children }
    </p>
  )
}
