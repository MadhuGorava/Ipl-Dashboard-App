// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {teamsList: [], isRouting: true}

  componentDidMount() {
    this.getDataAsResponse()
  }

  getDataAsResponse = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedData = data.teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({teamsList: updatedData, isRouting: false})
  }

  render() {
    const {teamsList, isRouting} = this.state
    return (
      <div className="home-container">
        <div className="logo-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="logo"
            className="logo"
          />
          <h1 className="heading">IPL DASHBOARD</h1>
        </div>
        <div>
          {isRouting ? (
            <div>
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            <div className="team-list-items">
              {teamsList.map(item => (
                <TeamCard key={item.id} teamList={item} />
              ))}
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Home
