import { ReactNode, } from 'react'

import styles from './ProjectTitle.module.scss'


interface Props {
  children: ReactNode
}


export const ProjectTitle = ({
  children,
}: Props): JSX.Element => {
  return (
    <h1 className={ styles.title }>
      { children }
    </h1>
  )
}
