type EventDetails = {
	id: string;
	title: string;

	startDate: string | Date;
	endDate: string | Date;
	wallpapers?: string;
	discordCommunity?: string;
	headline: {
		html: string;
	};
	description: {
		html: string;
	};
};

type EventDetailsResponse = {
	eventDetails: EventDetails;
};

export { EventDetails, EventDetailsResponse };
