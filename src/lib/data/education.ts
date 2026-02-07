import Assets from './assets';
import type { Education } from './types';

const title = 'Education';

const items: Array<Education> = [
	{
		degree: 'Computer Science Student',
		description: '',
		location: 'Ecuador',
		logo: Assets.ESPOL_w,
		name: '',
		organization: 'ESPOL Polytechnic University',
		period: { from: new Date(2021, 8, 27), to: new Date(2026, 8, 1) },
		shortDescription: '',
		slug: 'computer-science-student',
		subjects: ['Python', 'R', 'MySQL', 'PostgreSQL', 'Data Science', 'Data Engineering', 'Artificial Intelligence', 'Machine Learning', 'Computer Vision']
	}
];

const EducationData = { title, items };

export default EducationData;
