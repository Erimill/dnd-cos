/** @jsx jsx */
import { jsx } from 'theme-ui'
const ReturnRender = (race) => {
    if(!race){
      return null
    }
    var returnlist = []
    const ignoreList = ['stats','race']
    for (const [key, value] of Object.entries(race)) {
      if(value !== null && !ignoreList.includes(key.toLowerCase())){
        if(typeof value === 'object'){
          var subrender = ReturnSubrender(value)
          returnlist.push(
            <div>
              <h2>{key.replace(/_/g, ' ')}</h2>
              {subrender}
            </div>
          )
        }else{
          returnlist.push(
            <div>
              <h2>{key.replace(/_/g, ' ')}</h2>
              <p>{value}</p>
            </div>
          )
        }
      }
    }
    return returnlist
  }
  const ReturnSubrender = (sublist) => {
    var returnlist = []
    for (const [key, value] of Object.entries(sublist)) {
      if(value !== null){
        returnlist.push(
          <div>
            <h4>{key.replace(/_/g, ' ')}</h4>
            <p>
              {value}
            </p>
          </div>
        )
      }
    }
    return returnlist
  }

  export default ReturnRender