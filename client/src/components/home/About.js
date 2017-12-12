import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Projects from './Projects';
import Work from './Work';
import { 
	Container, 
	Header, 
	Button,
	Icon,
	Label,
	Visibility,
	Segment, 
	Image
} from 'semantic-ui-react';
import avatar from '../../assets/images/mark-tong.jpg';

class About extends Component {
	render() {
		return (
			<div>

				<Visibility
	        onBottomPassed={this.showFixedMenu}
	        onBottomVisible={this.hideFixedMenu}
	        once={false}
	       >
	        <Segment
	          inverted
	          textAlign='center'
	          style={{ minHeight: 400, padding: '1em 0em' }}
	          vertical
	        >

	       	<Container text style={{ marginTop: '3em' }}>
			      <Image src={avatar} size='small' circular centered/>
			      <Header
	            as='h1'
	            content='Mark Tong'
	            inverted
	           />

	          <Header
	            as='h3'
	            content='Software Developer'
	            inverted
	          />

						<Link to="/contact">
	          	<Button primary size='medium'>
	            	Get In Touch With Me
	            	<Icon name='right arrow' />
	          	</Button>
	          </Link>
	        </Container>

	        </Segment>
	      </Visibility>

			  <Container style={{ marginTop: '3.5em' }}>
			  	<div style={{ textAlign: 'center' }}>
				  	<Header as='h2'>Skills</Header>
		  	  	<Label>JavaScript</Label>
		  	  	<Label>React</Label>
		  	  	<Label>Knockout</Label>
		  	  	<Label>HTML</Label>
		  	  	<Label>CSS</Label>
		  	  	<Label>SQL</Label>
		  	  	<Label>Classic ASP</Label>
		  	  	<Label>VBScript</Label>
		  	  	<Label>C#</Label>
		  	  	<Label>ASP.NET</Label>
		  	  	<Label>PHP</Label>
		  	   	<Label>Node.js</Label>
		  	   </div>

			    <p>Github - https://github.com/marktong11
			     Instagram - https://www.instagram.com/marcustongus
			     Facebook - https://www.facebook.com/marcustongus
			     LinkedIn
			     Email</p>
			 	</Container>

			 	<Work />
			 	<Projects />
		 	</div>
		);
	};
}

export default About;