//create a new component.this component should produce html
import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyDsc2xJdCmsVA85qxXHqw0l2pn9WLfvHFw';
const App = () => {
	return (
		<div>
				<SearchBar />
		</div>
		);
}
// how it enters the dom
ReactDOM.render(<App />, document.querySelector('.container'));