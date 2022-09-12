import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  
  
    constructor(){
      super();
      this.state = {
        articles : [],
        loading:false
      }
    }
    async componentDidMount(){
      let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=a541ebba2e3d4bf6bd7bb8b3d2b819e3";
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({articles:parsedData.articles})
    }
  render() {
    return (
      <div className='container my-3'>
        <h2>News Hunter - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element)=>{
            return <div className="col-md-4 my-3" key={element.url}>
            <NewsItem title={element.title? element.title.slice(0,45)+"..." : ""} description={element.description? element.description.slice(0,88)+"..." : ""} imageUrl ={element.urlToImage} newsUrl = {element.url}/>
            </div>
          })}
        </div>
        {/* <div className="row">
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
        </div> */}
      </div>

    )
  }
}

export default News