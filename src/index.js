//create a new component.this component should produce html
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import YTSearch from 'youtube-api-search';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyDsc2xJdCmsVA85qxXHqw0l2pn9WLfvHFw';



class App extends Component {
	constructor(props){
		super(props);
		this.state ={
			videos:[],
			selectedVideo: null
		};
		YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
		this.setState({
			videos:videos,
			selectedVideo : videos[0]
		});
})
	}
	render(){
	return (
		<div>
				<SearchBar />
				<VideoDetail video={this.state.selectedVideo}/>
				<VideoList videos={this.state.videos} onVideoSelect={selectedVideo => this.setState({selectedVideo}) }/>
		</div>
		);
	}
}
// how it enters the dom
ReactDOM.render(<App />, document.querySelector('.container'));