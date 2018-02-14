//create a new component.this component should produce html
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyDsc2xJdCmsVA85qxXHqw0l2pn9WLfvHFw';



class App extends Component {
	constructor(props){
		super(props);
		this.state ={
			videos:[]
		};
		YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
		this.setState({videos});
})
	}
	render(){
	return (
		<div>
				<SearchBar />
				<VideoList videos={this.state.videos}/>
		</div>
		);
	}
}
// how it enters the dom
ReactDOM.render(<App />, document.querySelector('.container'));