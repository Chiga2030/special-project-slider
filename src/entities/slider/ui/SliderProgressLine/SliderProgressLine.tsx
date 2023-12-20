import styles from './SliderProgressLine.module.scss'


export const SliderProgressLine = (): JSX.Element => {
  return (
    <div id={ 'slider-progress-line' } className={ styles.progressLine }>
      <div id={ 'slider-thumb' } className={ styles.thumb } />
    </div>
  )
}
