import React from 'react'
class Project extends React.Component {
    render() {
      const { params } = this.props.match
      return (
        <div>
          <h1>Projects</h1>
          <p>{params.id ? 'here' : 'not here'}</p>
        </div>
      )
    }
  }
export default Project