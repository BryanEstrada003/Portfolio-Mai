import Assets from './assets';
import type { Education } from './types';

const title = 'Education';

const items: Array<Education> = [
	{
		degree: 'Computer Science Student',
		description: 'Computer Science Student with a focus on data analysis, data engineering, and artificial intelligence. Coursework includes Python programming, R, MySQL, PostgreSQL, data analysis methodologies, data engineering principles, artificial intelligence concepts, machine learning algorithms, and computer vision techniques.',
		location: 'Ecuador',
		logo: Assets.ESPOL_w,
		name: 'ESPOL Polytechnic University',
		organization: 'ESPOL Polytechnic University',
		period: { from: new Date(2021, 8, 27)},
		shortDescription: 'Computer Science Student with a focus on data analysis, data engineering, and artificial intelligence.',
		slug: 'computer-science-student',
		subjects: [
			'Python',
			'R',
			'MySQL',
			'PostgreSQL',
			'Data Analysis',
			'Data Engineering',
			'Artificial Intelligence',
			'Machine Learning',
			'Computer Vision'
		]
	}
];

const EducationData = { title, items };

export default EducationData;
