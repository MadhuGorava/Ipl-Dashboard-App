// Write your code here
import './index.css'

const MatchCard = props => {
  const {recentMatchesList} = props
  const {
    completingTeamLogo,
    completingTeam,
    result,
    matchStatus,
  } = recentMatchesList
  return (
    <div className={`match-card ${matchStatus}`}>
      <img
        src={completingTeamLogo}
        alt={`${completingTeam}`}
        className="match-card-logo"
      />
      <h1 className="match-card-name">{completingTeam}</h1>
      <p className="match-card-result">{result}</p>
      <p className="match-status">{matchStatus}</p>
    </div>
  )
}

export default MatchCard
