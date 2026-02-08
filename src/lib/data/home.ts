import BaseData from './base';
import { getSkills } from './skills';
import type { Skill } from './types';

const title = 'Home';

const hero: {
	title: string;
	description: string;
	links: Array<{ label: string; href: string; icon: `i-carbon-${string}` }>;
} = {
	title: `${BaseData.fullName},`,
	description:
		'Computer Science student with experience in data analysis, data engineering, and computer vision. Specialized in developing and optimizing 2D and 3D models using CNN architectures, as well as ETL processes, SAP automation with Python, and BigQuery. Seeking challenging opportunities to innovate and continue professional growth.',
	links: [
		{ label: 'GitHub', href: 'https://github.com/BryanEstrada003', icon: 'i-carbon-logo-github' },
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/maiestrada/', icon: 'i-carbon-logo-linkedin' },
		{ label: 'Email', href: 'mailto:mbestrad@espol.edu.ec', icon: 'i-carbon-at' }
	]
};

const carousel: Array<Skill> = getSkills();

const HomeData = {
	title,
	hero,
	carousel
};

export default HomeData;
