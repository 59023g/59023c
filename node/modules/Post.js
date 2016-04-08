import React from 'react'

export default React.createClass({
  render() {
    const { userName, postTitle } = this.props.params
    return (
      <div>
        <h2>{userName} / {postTitle}</h2>
      </div>
    )
  }
})
