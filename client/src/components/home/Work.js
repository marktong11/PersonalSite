import React from 'react';
import { 
	Item,
	Header,
	Container
} from 'semantic-ui-react';

const Work = () => (
	<div>
		<Container style={{ marginTop: '5em' }}>
		  <Item.Group divided>
		  	<Header size='huge'>Experience</Header>

		    <Item>
		      <Item.Content>
		        <Item.Header as='a'>Website Pipeline, Inc.</Item.Header>
		        <Item.Meta>
		          <span className='cinema'>Software Developer</span>
		        </Item.Meta>
		        <Item.Description>January 2016 - Present</Item.Description>
		      </Item.Content>
		    </Item>

		    <Item>
		      <Item.Content>
		        <Item.Header as='a'>Seibels</Item.Header>
		        <Item.Meta>
		          <span className='cinema'>Software Development Intern</span>
		        </Item.Meta>
		        <Item.Description>June 2014 - August 2014</Item.Description>
		      </Item.Content>
		    </Item>

		    <Item>
		      <Item.Content>
		        <Item.Header as='a'>University of South Carolina</Item.Header>
		        <Item.Meta>
		          <span className='cinema'>Student</span>
		        </Item.Meta>
		        <Item.Description>Major: Computer Science | Minor: Mathematics</Item.Description>
		        <Item.Description>2011-2015</Item.Description>
		      </Item.Content>
		    </Item>
		  </Item.Group>
	  </Container>
  </div>
);

export default Work;