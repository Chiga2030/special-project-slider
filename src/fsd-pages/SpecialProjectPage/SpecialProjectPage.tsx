import { ProjectCard, } from '@/entities/special-project'
import { END_POINTS, } from '@/shared/constants/endPoints'

import styles from './SpecialProjectPage.module.scss'


interface Project {
  id: number
  name: string
  type: string
  description: string
  image_link: string
}

const getProject: () => Promise<Project> = () => {
  return fetch(END_POINTS.getProject).then(response => {
    return response.json()
  })
}


export const SpecialProjectPage = async (): Promise<JSX.Element> => {
  const projectData = await getProject()

  return (
    <div
      className={ styles.page }
      style={ {
        backgroundImage: `url("${projectData.image_link}")`,
      } }
    >
      <div className={ styles.contentWrapper }>
        <ProjectCard />
      </div>
    </div>
  )
}
