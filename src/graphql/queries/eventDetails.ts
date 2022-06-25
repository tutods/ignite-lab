import { gql } from '@apollo/client';

const GET_EVENT_DETAILS = gql`
	query {
		eventDetails(where: { title: "Ignite Lab" }) {
			id
			title
			startDate
			endDate
			wallpapers
			discordCommunity
			headline {
				html
			}
			description {
				html
			}
		}
	}
`;

export { GET_EVENT_DETAILS };
