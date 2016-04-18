// Importing
import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// YouTube API
const API_KEY = 'AIzaSyDvOq_JU0L9tYuRLIfR_cCiR4Xb_Kkt6sY';

// Create a new component to produce HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      videos: [] ,
      selectedVideo: null
    };

    this.videoSearch('cool');
  }

  videoSearch(term) {
      // API request
      YTSearch({ key: API_KEY, term: term }, (videos) => {
        this.setState({ 
          videos: videos, 
          selectedVideo: videos[0]
        });
      });
    }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange = {videoSearch} />
        <VideoDetail video = {this.state.selectedVideo} />
        <VideoList 
          onVideoSelect = { selectedVideo => this.setState({ selectedVideo })}
          videos = {this.state.videos} />
      </div>
    );
  }
}

// Take this component's generated HTML and put it dynamically in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
