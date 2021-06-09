/** @jsx jsx */
import { jsx } from 'theme-ui'
import '../pages/index.css'
import { Link } from 'gatsby'

const Sidebar = ({ data }) => {
    var list = []
    var destination = ''
    data.forEach(item => {
        destination = `/race/${item.toLowerCase()}`
        list.push(<ul><Link to={destination}>{item}</Link></ul>)
    })
    console.log(list)
    return list
}

export default Sidebar