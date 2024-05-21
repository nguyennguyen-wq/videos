//import logo from './logo.svg';
//import './App.css';

import React, { useState, useEffect, useRef } from 'react';
const App = () => {
	const videoData = [
		{
			id: 1,
			title: 'love story of seyit and sura',
			link: 'https://www.youtube.com/watch?v=oc3WS_zM2bA',
			preview: 'https://img.youtube.com/vi/oc3WS_zM2bA/maxresdefault.jpg',
		},
		{
			id: 2,
			title: 'Making Babies ',
			link: 'https://www.youtube.com/watch?v=u4jtYiNddtY',
			preview: 'https://img.youtube.com/vi/u4jtYiNddtY/maxresdefault.jpg',
		},
		{
			id: 3,
			title: 'Love at the Shore',
			link: 'https://www.youtube.com/watch?v=axSW_9nu7Nk',
			preview: 'https://img.youtube.com/vi/axSW_9nu7Nk/maxresdefault.jpg',
		},
		{
			id: 4,
			title: 'Everything Puppies',
			link: 'https://www.youtube.com/watch?v=EBACCF8loSQ',
			preview: 'https://img.youtube.com/vi/EBACCF8loSQ/maxresdefault.jpg',
		},
		{
			id: 5,
			title: 'You Are My Home',
			link: 'https://www.youtube.com/watch?v=VPGVrBgxe0Y',
			preview: 'https://img.youtube.com/vi/VPGVrBgxe0Y/maxresdefault.jpg',
		},
		{
			id: 6,
			title: 'SECOND CHANCES',
			link: 'https://www.youtube.com/watch?v=h8dcg-NUN2g',
			preview: 'https://img.youtube.com/vi/h8dcg-NUN2g/maxresdefault.jpg',
		},
	];
	const [videos, setVideos] = useState(videoData);
	const inputRef = useRef();
	useEffect(() => {
		const searchFn = () => {
			const searchVar = inputRef.current.value.toLowerCase();
			const filteredVideo = videoData.filter((video) =>
				video.title.toLowerCase().includes(searchVar)
			);
			setVideos(filteredVideo);
		};
		inputRef.current.addEventListener('input', searchFn);
		return () => {
			inputRef.current.removeEventListener('input', searchFn);
		};
	}, []);

	return (
		<div>
			<h1 style={
				{
					color: 'green',
					textAlign: "center"
				}
			}>
				Videos streaming demo
			</h1>
			<h3 style={{ margin: "5px 5px" }}>
			
			</h3>
			<input
				type="text"
				placeholder="Search videos Here"
				ref={inputRef}
				style={
					{
						width: '80%', marginLeft: "10px",
						padding: '10px', fontSize: '16px',
						border: "2px solid black"
					}}
			/>
			<ul style={
				{
					listStyle: 'none', padding: 0,
					display: 'flex', flexWrap: 'wrap'
				}}>
				{videos.map((video) => (
					<li key={video.id}
						style={
							{
								margin: '10px',
								flex: '0 0 30%',
								minWidth: '200px'
							}}>
						<a href={video.link}
							target="_blank"
							rel="noopener noreferrer">
							<img
								src={video.preview}
								alt={video.title}
								style={{ width: '80%', height: 'auto' }}/>
							<p>{video.title}</p>
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};
export default App;
