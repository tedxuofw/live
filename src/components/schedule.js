import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

import Session from '../components/session.js';
import SessionTitle from '../components/sessiontitle.js';
import SpeakerCurrent from '../components/current.js';

import speakers from '../data/data.js';

//Each session's start and end time.
const sessionTimes = [[new Date(2018, 4, 5, 10, 0, 0, 0), new Date(2018, 4, 5, 11, 27, 0, 0)],
					  [new Date(2018, 4, 5, 11, 32, 0, 0), new Date(2018, 4, 5, 12, 17, 0, 0)],
					  [new Date(2018, 4, 5, 12, 27, 0, 0), new Date(2018, 4, 5, 13, 41, 0, 0)],
					  [new Date(2018, 4, 5, 13, 46, 0, 0), new Date(2018, 4, 5, 14, 16, 0, 0)],
					  [new Date(2018, 4, 5, 14, 26, 0, 0), new Date(2018, 4, 5, 15, 53, 0, 0)]
					 ];

class Schedule extends Component {
	
	constructor() {
		super();
		
		this.state = {date:new Date().getTime()};
	}
	
	componentDidMount() {
	this.timerID = setInterval(
			() => this.tick(),
			60000
		);
	}
	
	componentWillUnmount() {
		clearInterval(this.timerID);
	}
	
	tick() {
		this.setState({date:new Date().getTime()});
	}
	
	render() {
		return (
			<div>
				<SpeakerCurrent speakers={speakers} now={this.state.date} />
				<div className={css(styles.schedule)} >
					<Session speakers={speakers.slice(0, 6)} now={this.state.date} title="Session 1" text="10:00 AM - 11:27 AM" times={sessionTimes[0]} />
					
					<SessionTitle name="lunch" now={this.state.date} text="Food and drink provided in the lobby." times={sessionTimes[1]}/>
					
					<Session speakers={speakers.slice(6, 12)} now={this.state.date} title="Session 2" text="12:27 PM - 1:41 PM" times={sessionTimes[2]} />
					
					<SessionTitle name="salons" now={this.state.date} text="Explore all the new knowledge!" times={sessionTimes[3]}/>
					
					<Session speakers={speakers.slice(12, 18)} now={this.state.date} title="Session 2" text="2:26 PM - 3:53 PM" times={sessionTimes[4]} />
				</div>
			</div>
		);
	}
}


const styles = StyleSheet.create({
	schedule: {
        background: '#ecf0f1',
        position: 'absolute',
        bottom: '0',
        left: '0',
        right: '0',
        width: '100%',
        height: '55%',
        maxHeight: '55%',
        overflowY: 'scroll',
        overflowX: 'hidden'
	},
});

export default Schedule;