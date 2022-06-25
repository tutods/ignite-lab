type CreateSubscriberResponse = {
	createSubscriber: { id: string; name: string; email: string };
};

type PublishSubscriberResponse = {
	publishSubscriber: { id: string };
};

export { CreateSubscriberResponse, PublishSubscriberResponse };
