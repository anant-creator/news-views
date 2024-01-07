import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { Card } from "react-bootstrap";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date } = this.props;

    return (
      <div>
        <Card>
          <Card.Img variant="top" src={imageUrl} height="200px" />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <a
              target="_blank"
              rel="noreferrer"
              href={newsUrl}
              className="btn btn-primary"
            >
              Read More
            </a>
            <p className="mb-0 mt-3">
              By {author} on {new Date(date).toGMTString()}
            </p>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default NewsItem;
