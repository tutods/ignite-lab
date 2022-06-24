type Teacher = {
	bio: string;
	avatarURL: string;
	name: string;
};

type Lesson = {
	title: string;
	videoId: string;
	description: string;
	teacher: Teacher;
};

export { Lesson };
