import { Button, } from '@/shared/ui/Button'

import { ProjectDescription, } from '../ProjectDescription'
import { ProjectTitle, } from '../ProjectTitle'
import { ProjectType, } from '../ProjectType'

import styles from './ProjectCard.module.scss'


interface Props {
  name: string
  type: string
  description: string
}


export const ProjectCard = ({
  type,
  name,
  description,
}: Props): JSX.Element => {
  return (
    <div className={ styles.wrapper }>
      <ProjectType>{ type }</ProjectType>

      <ProjectTitle>{ name }</ProjectTitle>

      <ProjectDescription>{ description }</ProjectDescription>

      <Button>Подробнее</Button>
    </div>
  )
}
