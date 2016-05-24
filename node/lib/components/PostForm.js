import React, { PropTypes } from 'react'

export default React.createClass({
  propTypes: {
    value: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
  },
  render () {
    return (
    <ul>
      <li>
        <form onSubmit={this.props.onSubmit}>
          <input
            type="text"
            placeholder="title"
            className="mb-12"
            name="title"
            value={this.props.value.title}
            onChange={this.props.onChange} />
          <textarea
            placeholder="content"
            className="mb-12 h-200"
            name="content"
            value={this.props.value.content}
            onChange={this.props.onChange}>
          </textarea>
          <textarea
            placeholder="abstract"
            className="mb-12"
            name="abstract"
            value={this.props.value.abstract}
            onChange={this.props.onChange}>
          </textarea>
          <input
            type="text"
            placeholder="tags"
            className="mb-12"
            name="tags"
            value={this.props.value.tags}
            onChange={this.props.onChange} />
          <button type="submit">
            <h3>POST</h3>
          </button>
        </form>
      </li>
    </ul>
    )
  }
})

/*<li>updated_at: {this.props.value.updated_at}</li>
<li>tags: {this.props.value.tags}</li>
<li>url: {this.props.value.url}</li>*/
