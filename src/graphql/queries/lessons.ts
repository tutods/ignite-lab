import { gql } from '@apollo/client';

const GET_LESSONS_QUERY = gql`
	query {
		lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
			id
			title
			slug
			lessonType
			availableAt
		}
	}
`;

export { GET_LESSONS_QUERY };
