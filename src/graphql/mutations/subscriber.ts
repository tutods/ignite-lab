import { gql } from '@apollo/client';

const PUBLISH_SUBSCRIBER = gql`
	mutation PublishSubscriber($email: String!) {
		publishSubscriber(where: { email: $email }, to: PUBLISHED) {
			id
		}
	}
`;

const CREATE_SUBSCRIBER = gql`
	mutation CreateSubscriber($name: String!, $email: String!) {
		createSubscriber(data: { name: $name, email: $email }) {
			id
			name
			email
		}
	}
`;

export { PUBLISH_SUBSCRIBER, CREATE_SUBSCRIBER };
