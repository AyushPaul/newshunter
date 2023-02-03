import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl,author,publishedAt} = this.props;
    return (
      <div>
        <div className="card" >
            <img rel="noreferrer" src={!imageUrl?"https://fscluster.org/sites/default/files/styles/landscape-crop/public/default-image.png?itok=s9kBeTI4" : imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className='card-text'><small className='text-muted'>By {!author ? "Unknown":author} on {new Date(publishedAt).toGMTString()}</small></p>
                <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem