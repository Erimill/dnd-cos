/** @jsx jsx */
import { jsx } from 'theme-ui'
import '../pages/index.css'
import { Link } from 'gatsby'
import sx from '../pages/sx'
import dragon from '../images/dragonw.png'

const Page = ({children, data}) => {
  return (
    <main sx={sx.headingStyles}>
      <div sx={sx.linkStyles}>
      <Link to='/'><img src={dragon} sx={sx.headerImage} alt='Header'/></Link>
      <Link to='/race' state={{ fromFeed: data }}>Race</Link>
      <Link to='/class' state={{ fromFeed: data }}>Class</Link>
      </div>
      {children}
    </main>
  )
}

export default Page 