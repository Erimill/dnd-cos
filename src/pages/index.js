/** @jsx jsx */
import { jsx } from 'theme-ui'
import './index.css'
import RacePage from './race.js'

const MainPage = ({ data }) => {
  console.log('Data:', data)
  return (
      <RacePage input={data} />
  )
}

export default MainPage