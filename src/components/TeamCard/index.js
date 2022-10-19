// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamList} = props
  const {id, teamImageUrl, name} = teamList
  return (
    <Link to={`/ipl/${id}`} className="item-link">
      <div className="team-container">
        <img src={teamImageUrl} alt={`${name}`} className="team-card-image" />
        <h1 className="team-card-name">{name}</h1>
      </div>
    </Link>
  )
}

export default TeamCard
