import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import News from './News'
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from './Spinner';
// import dotenv from  'dotenv';

const baseuri = process.env.REACT_APP_API_KEY


export default class Newscontainer extends Component {




  constructor() {
    super();

    this.state = {
      allarticles: [],
      page: 1,
      loading: true,
      totalresults: 0,
      i: 0
    }
  }

  

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${baseuri}&category=${this.props.category}&page=${this.state.page}&pagesize=6`;
    
    
    const predata = await fetch(url);
    const data = await predata.json();

    await this.setState({ allarticles: data.articles,
                          totalresults: Number(data.totalResults),
                          loading: true
    })

    // console.log(this.state.allarticles)
    // console.log(this.state.totalresults)

  }




fetchMoreData = async ()=>{
  
  let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=08c160311d9c4d82852ebf5814f5622f&category=${this.props.category}&page=${this.state.page +1}&pagesize=6`;
  const predata = await fetch(url);
  const data = await predata.json();
  await this.setState({ page: this.state.page + 1 })
  await this.setState({ allarticles:  this.state.allarticles.concat(data.articles ),
    totalresults: data.totalResults,
     
  })
  // console.log(this.state.allarticles.length);
  // console.log(data);
}





  render() {
    return (
      <div className=" my-2">
        
        <h1 className='my-4 pt-5' >Welcome to Jeet's News Cafe</h1>

        <InfiniteScroll
          dataLength={this.state.allarticles.length}
          next={this.fetchMoreData}
          hasMore={ this.state.allarticles.length !== this.state.totalresults && this.state.allarticles.length <= this.state.totalresults }
          loader={<Spinner/> }
        >

          <div className="container ">
        <div className="row my-2 "   >


          {this.state.allarticles.map((element) => {

            return <div className="col-md-4 my-2" key={element.url + this.state.i++}>
              <News title={element.title} author={element.author} imgs={element.urlToImage ? element.urlToImage : "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGljfGVufDB8fDB8fA%3D%3D&w=1000&q=80"} url={element.url}  pub={element.publishedAt.slice(0,10)} content={element.description ? element.description.slice(0, 88) : ""} />
            </div>

          })}

        </div>
        </div>
        </InfiniteScroll>
       




        {/* <div className='mx-1 d-flex justify-content-between'>

          <button        className="btn btn-primary btn-dark " onClick={this.goprev} >Prev</button>
          <button        className="btn btn-primary btn-dark"  onClick={this.gonext}>Next</button>

        </div> */}


      </div>
    )
  }
}
