import React, { Component } from "react";
import NewsItem from "./NewsItem";
// import headlines from '../top-headlines.json';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { Container, Row, Col, Button } from "react-bootstrap";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import placeholder from './placeholder.jpg';
// import InfiniteScroll from 'react-infinite-scroller';


export class News extends Component {
  // article = [headlines.articles];
  static defaultProps = {
    country: "in",
    pageSize: 9,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  capitalizeFirst = (string) => string.charAt(0).toUpperCase() + string.slice(1);

  constructor(props) {
    super(props);
    this.state = {
      article: ["bruh"],
      page: 1,
      loading: false,
      totalResults: 0
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    document.title = `${this.capitalizeFirst(this.props.category)} - NewsViews`;
  }

  async updateNews(pagenum) {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=53fd4522b79543f8ad7131d9c4b15550&page=${pagenum}&pageSize=6`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData, "parseddata")
    this.setState({
      article: parsedData.articles,
      page: pagenum,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=53fd4522b79543f8ad7131d9c4b15550&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      article: parsedData.articles,
      page: this.state.page - 1,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  loadPrevious = async () => {
    this.updateNews(this.state.page - 1);
  };

  loadNext = async () => {
     this.updateNews(this.state.page + 1);
  };

  loadFunc = async () => {
    this.setState({page: this.state.page + 1})
  }

  render() {
    return (
      <div>
        <Container>
          <h2 className="text-center mt-3">NewsViews - Top {this.capitalizeFirst(this.props.category)} Headlines  </h2>
          {this.state.loading && <Spinner />}
          
          {/* <InfiniteScroll
        dataLength={this.state.article.length}
        loadMore={this.loadFunc}
        hasMore={this.state.article.length !== this.state.totalResults}
        loader={<div className="loader" key={0}>Loading ...</div>}
        useWindow={false}
    > */}
          
          <Row className="my-3">
            {this.state.article.map((elem, id) => {
                return (
                  <Col md={6} lg={4} xl={4} key={id} className="my-4">
                    <NewsItem
                      title={elem.title ? elem.title.slice(0, 45) : ""}
                      description={
                        elem.description ? elem.description.slice(0, 88) : ""
                      }
                      imageUrl={elem.urlToImage ? elem.urlToImage : placeholder}
                      newsUrl={elem.url ? elem.url : ""}
                      author={elem.author ? elem.author : "author"}
                      date={elem.publishedAt}
                    />
                  </Col>
                );
              })}
          </Row>
        {/* </InfiniteScroll> */}

          <Row className="mb-3">
            <Col className="d-flex justify-content-between">
              <Button
                disabled={this.state.page <= 1}
                onClick={this.loadPrevious}
                className="btn"
              >
                &larr; Previous
              </Button>
              <Button
                disabled={
                  this.state.page + 1 >
                  Math.ceil(this.state.totalResults / this.props.pageSize)
                }
                onClick={this.loadNext}
                className="btn"
              >
                Next &rarr;
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default News;
