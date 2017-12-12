import React from 'react';
import { 
	Button,
	Item,
	Label,
	Icon,
	Header,
	Container
} from 'semantic-ui-react';

const Projects = () => (
	<div>
		<Container style={{ marginTop: '5em' }}>
		  <Item.Group divided>
		  	<Header size='huge'>Projects</Header>
		    <Item>

		      <Item.Content>
		        <Item.Header as='a'>This Website</Item.Header>
		        <Item.Meta>
		          <span className='cinema'>Personal Resume</span>
		        </Item.Meta>
		        <Item.Description>here</Item.Description>
		        <Item.Extra>
		          <Label>React.js</Label>
		          <Label>Node.js</Label>
		          <Label>Semantic-UI</Label>
		        </Item.Extra>
		      </Item.Content>
		    </Item>

		    <Item>

		      <Item.Content>
		        <Item.Header as='a'>WSP Task Search</Item.Header>
		        <Item.Meta>
		          <span className='cinema'>A search interface using Apache Solr to quickly locate tasks in the company database.</span>
		        </Item.Meta>
		        <Item.Description>A search interface using Apache Solr to quickly locate tasks in the company database.</Item.Description>
		        <Item.Extra>
		          <Label>Apache Solr</Label>
		          <Label>Node.js</Label>
		          <Label>React.js</Label>
		          <Label>HTML/CSS</Label>
		          <Label>React-Bootstrap</Label>
		        </Item.Extra>
		      </Item.Content>
		    </Item>

		    <Item>

		      <Item.Content>
		        <Item.Header as='a'>My Community Credit</Item.Header>
		        <Item.Meta>
		          <span className='cinema'>A web application used to determine loan eligibility.</span>
		        </Item.Meta>
		        <Item.Description>here</Item.Description>
		        <Item.Extra>
		        <Label>PHP</Label>
		        <Label>HTML/CSS</Label>
		        <Label>Bootstrap</Label>
		        <Label>JavaScript</Label>
		          <Button primary floated='right'>
		            Visit 
		            <Icon name='right chevron' />
		          </Button>
		        </Item.Extra>
		      </Item.Content>
		    </Item>
		  </Item.Group>
	  </Container>
  </div>
)

export default Projects;