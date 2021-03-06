import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import TEDMenu from '../components/ted-menu.js';
import Schedule from '../components/schedule.js';


class Home extends Component {
    
    constructor() {
        super();
        this.state = {
            open: false,
        };
        
        this.openMenu = this.openMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }
    
	openMenu() {
		this.setState({ open: true });
	};

	closeMenu() {
		this.setState({ open: false });
	};
    
	render() {
		return (

			<MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    
                    <AppBar  
                        title="TEDxUofW 2018" 
                        titleStyle={{
                            fontSize: '16px',
                            fontWeight:'bold',
                            textAlign: 'center'
                        }}
            
                        style={{
                            boxShadow: 'none'      
                        }}            
            
                        iconClassNameRight="muidocs-icon-navigation-expand-more" 
            
                        onLeftIconButtonClick={this.openMenu}
                    />
                                                
                    <Schedule />
                    
                    <TEDMenu open={this.state.open} close={this.closeMenu} />
                </div>
			</MuiThemeProvider>

		);
	}
}

const muiTheme = getMuiTheme({
    palette: {
        textColor: '#fff'
    },
    appBar: {
        color: 'rgba(230, 43, 37, 0)',
    },
});

export default Home;