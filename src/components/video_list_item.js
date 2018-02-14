import React from 'react';
const VideoListItem = ({video}) => {
	const imageUrl = video.snippet.thumbnails.default.url;
	console.log(video);
	return (
		<li className="list-group-item">
		<div className="video-list media">
		
		<div className="media-left">
		<img className="media-object" src={imageUrl}/>
		</div>
		<div className = "media-body">{video.snippet.title}</div>
		</div>
	</li>)
}
export default VideoListItem;