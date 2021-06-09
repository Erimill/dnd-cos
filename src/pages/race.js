/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'
import './index.css'
import Page from '../components/page'
import Sidebar from '../components/sidebar'
import ReturnRender from '../components/render'
import sx from './sx.js'

const RacePage = (location) => {
  const data = useStaticQuery(query)
  const races = data.allJsonJson.nodes[0].Races
  var currentRace
  if(!location.path){
    currentRace = 'Information'
  }else{
    var path = location.path.split('/').pop()
    currentRace = path.charAt(0).toUpperCase() + path.slice(1)
    if (path.includes('-')) {
      currentRace = currentRace.split('-')[0] + '-' + path.split('-')[1].charAt(0).toUpperCase() + path.split('-')[1].slice(1)
    }
  }
  if (currentRace === '') {
    currentRace = 'Information'
  }

  var list = []
  var renderPage = []
  races.forEach((race) => {
    list.push(race.Race)
    renderPage[race.Race] = race
  })

  return (
    <Page  style={sx.pageStyles}>
      <div sx={sx.sidebar}>
        <Sidebar data={list} sx={sx.sidebar} />
      </div>
      <div sx={sx.main}>
        <title>{renderPage[currentRace].Race}</title>
        <h1 style={sx.titleStyles}>
          {renderPage[currentRace].Race}
        </h1>
        {ReturnRender(renderPage[currentRace])}
      </div>
    </Page>
  )
}

export default RacePage

export const query = graphql`
query {
  allJsonJson {
    nodes {
      Races {
        Ability_Score_Increase
        Age
        Alignment
        Languages
        Race
        Size
        Speed
        Stats {
          CHA
          Size
          Speed
          Darkvision
          STR
          DEX
          CON
          KNO
          WIS
          INT
          Proficiency
          Saving_Throw
          Traits
        }
        Traits {
          Description
          Darkvision
          Fey_Ancestry
          Skill_Versatility
          Keen_Senses
          Trance
          Lucky
          Brave
          Halfling_Nimbleness
          Menacing
          Relentless_Endurance
          Savage_Attacks
          Dwarven_Resilience
          Dwarven_Combat_Training
          Tool_Proficiency
          Stonecunning
          Draconic_Ancestry
          Breath_Weapon
          Damage_Resistance
          Hellish_Resistance
          Infernal_Legacy
          Ability_Score_Increase
          Gnome_Cunning
        }
      }
    }
  }
}
`