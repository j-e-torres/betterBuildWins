import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Home = ({ champions, items }) => {
  return (
    <div className="home-container">
      <div className="home-about">
        <p>
          Hey and welcome to my website. This website was made to help you
          figure out what your build gives you or help optimize a build given
          some constraints. Hope you enjoy, choose below!
        </p>
      </div>

      <div>
        <div>
          <Link to="/optimize">
            <button type="button">Optimizer</button>
          </Link>
        </div>
        <div>
          <Link to="/customize">
            <button type="button">Customizer</button>
          </Link>
        </div>
      </div>
      <div>
        {/* <div>
          {Object.keys(champions).map(key => (
            <div key={champions[key].key}>{champions[key].name}</div>
          ))}
        </div>
        <div>
          {Object.keys(items).map((itemKey, idx) => (
            <div key={idx}>{items[itemKey].maps['11'] ? 'true' : ''}</div>
          ))}
        </div> */}
      </div>
    </div>
  )
}
const mapStateToProps = ({ champions, items }) => ({ champions, items })

export default connect(mapStateToProps)(Home)
