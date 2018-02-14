//create a new component.this component should produce html
import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyDsc2xJdCmsVA85qxXHqw0l2pn9WLfvHFw';

YTSearch({key: API_KEY, term: 'surfboards'}, function(data){
	console.log(data);
})

const App = () => {
	return (
		<div>
				<SearchBar />
		</div>
		);
}
// how it enters the dom
ReactDOM.render(<App />, document.querySelector('.container'));