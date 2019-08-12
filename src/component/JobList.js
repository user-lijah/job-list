import React, { Component } from 'react';
import './job-list.css'
import './helpers.css'
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class JobList extends Component {
    token = null;

    constructor(props) {
        super(props)

        this.state = {
            query: "",
             posts: []
        }
    }

    onChange = e => {
        const { value } = e.target;

        this.setState({
        query: value
        });

        this.search(value);
      };

      search = query => {
          const url = `https://search.bossjob.com/api/v1/search/job_filter?size=10&query=system?search=${query}`;
          const token = {};
          this.token = token;
      
          fetch(url)
            .then(results => results.json())
            .then(data => {
              if (this.token === token) {
                this.setState({ posts: data.data.jobs });
              }
            });
        };
      
        componentDidMount() {
          this.search("");
        }
    
    
    render() {
        const { posts } = this.state
        return (
            <div>
                <div className="search-section">
                    <form className="form-search">
                        <div className="search-bar">
                            <FontAwesomeIcon icon="search" className="font-icon"/>
                            <input
                                type="text"
                                placeholder="Search for job title or company name"
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="form-search-btn">
                            <button className="search-btn">Filter Result</button>
                        </div>
                    </form> 
                </div>
                 
                {
                    posts.length ?
                    posts.map(post => [
                        <Container className="job-details">
                            <Row className="job-detail">
                                <Col xs={7} className="job-title" key={post.id}>
                                    {post.job_title}
                                </Col>
                                <Col xs={5} className="salary-range" key={post.id}>
                                    &#8369;{post.salary_range_from}
                                    &nbsp;-&nbsp;
                                    &#8369;{post.salary_range_to}
                                </Col>
                            </Row>
                            <Row className="job-detail">
                                <Col xs={12}>
                                    <span className="other-detail location" key={post.id}>
                                        <FontAwesomeIcon icon="map-marker-alt" className="font-icon"/>
                                        {post.job_location}
                                    </span>
                                    <span className="other-detail job-period" key={post.id}>
                                        <FontAwesomeIcon icon="calendar" className="font-icon" />
                                        {post.xp_lvl}
                                    </span>
                                </Col>
                                <Col xs={12}>
                                    <span className="other-detail degree" key={post.id}>
                                        <FontAwesomeIcon icon="graduation-cap" className="font-icon" />
                                        {post.degree}
                                    </span>
                                    <span className="other-detail job-type" key={post.id}>
                                        <FontAwesomeIcon icon="clock" className="font-icon" />
                                        {post.job_type}
                                    </span>
                                </Col>
                            </Row>
                            <div className="margin-top">
                                <div className="vm-align inline-b company-logo" key={post.id}>
                                    <img src={post.company_logo} alt="logo"/>
                                </div>
                                <div className="vm-align inline-b company-name" key={post.id}>
                                    <a href="#">{post.company_name}</a>
                                </div>
                                <div className="vm-align inline-b time-posted" key={post.id}>
                                    {post.refreshed_at}
                                </div>
                            </div>
                        </Container>
                    ]) : null
                }
            </div>
        )
    }
}
    
export default JobList
    