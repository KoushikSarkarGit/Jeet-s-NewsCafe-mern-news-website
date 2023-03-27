import React, { Component } from 'react'
// import PropTypes from 'prop-types'
export default class News extends Component {
    // static propTypes = {
    //     prop: PropTypes
    //   }
  render() {
    return (
      <div className='mx-1'>
        <div className="card" style={{ width: '20rem', boxShadow :  'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
          <div>
          <span className="badge text-bg-warning" style={{display: 'relative', position: 'absolute', right: '0px' }}>{this.props.author}</span>
          </div>
          <img src= {this.props.imgs} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{this.props.title }</h5>
            <p className="card-text">{this.props.content.length < 60 ? this.props.content : this.props.content.slice(0,60)}...</p>
            <div>
            <p className=" card-text mb-1 text-danger text-end">Published on {this.props.pub}</p>
            </div>
            <a href={this.props.url} className="btn btn-primary" target={"_blank"}>Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

