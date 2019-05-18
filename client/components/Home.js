import React from 'react'

import { connect } from 'react-redux'

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-about">
        <p>
          Hey and welcome to my website. This website was made to help you
          figure out what your build gives you or help optimize a build given
          some constraints. Hope you enjoy, choose below!
        </p>
      </div>

      <div />
    </div>
  )
}
const mapStateToProps = ({ champions, items }) => ({ champions, items })

export default connect(mapStateToProps)(Home)
