import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div className='container my-3'>
        <h2>News Hunter - Top Headlines</h2>
        <div className="row">
            <div className="col-md-4 my-3">
            <NewsItem title="mytitle" description="my description"/>
            </div>
            <div className="col-md-4 my-3">
            <NewsItem title="mytitle" description="my description"/>
            </div>
            <div className="col-md-4 my-3">
            <NewsItem title="mytitle" description="my description"/>
            </div>
        </div>
        <div className="row">
            <div className="col-md-4 my-3">
            <NewsItem title="mytitle" description="my description"/>
            </div>
            <div className="col-md-4 my-3">
            <NewsItem title="mytitle" description="my description"/>
            </div>
            <div className="col-md-4 my-3">
            <NewsItem title="mytitle" description="my description"/>
            </div>
        </div>
        <div className="row">
            <div className="col-md-4 my-3">
            <NewsItem title="mytitle" description="my description"/>
            </div>
            <div className="col-md-4 my-3">
            <NewsItem title="mytitle" description="my description"/>
            </div>
            <div className="col-md-4 my-3">
            <NewsItem title="mytitle" description="my description"/>
            </div>
        </div>
      </div>

    )
  }
}

export default News