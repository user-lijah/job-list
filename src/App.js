import React, { Component } from 'react';
import './App.css';
import Header from './shared/components/Header'
import JobList from './component/JobList';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMapMarkerAlt, faCoffee, faGraduationCap, faClock, faCalendar, faSearch } from '@fortawesome/free-solid-svg-icons'
import PaginationSample from './component/PaginationSample';

library.add(faCoffee, faMapMarkerAlt, faGraduationCap, faClock, faCalendar, faSearch)

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-Wrapper">
          <Header />
          <div className="body-content">
            <JobList/>
            <PaginationSample />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
