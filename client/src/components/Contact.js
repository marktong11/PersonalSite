import React, { Component } from 'react';
import { 
	Form,
	Container
} from 'semantic-ui-react';

class Contact extends Component {
	render() {
		return(
			<div>
				<Container text style={{ marginTop: '7em' }}>
					<Form>
		        <Form.Group widths='equal'>
		          <Form.Input label='First name' placeholder='First name' />
		          <Form.Input label='Last name' placeholder='Last name' />
		          <Form.Select label='Gender' options='' placeholder='Gender' />
		        </Form.Group>

		        <Form.TextArea label='About' placeholder='Tell us more about you...' />
		        <Form.Checkbox label='I agree to the Terms and Conditions' />
		        <Form.Button>Submit</Form.Button>
		      </Form>
		    </Container>
	    </div>
		);
	};
}

export default Contact;