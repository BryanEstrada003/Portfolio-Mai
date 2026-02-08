import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from './types';

const items: Array<Project> = [
	{
		slug: 'cotton-leaf-defect-classification',
		color: 'green',
		description:
			'Intelligent diagnosis system for cotton foliar diseases using Deep Learning. Compares VGG16 (baseline) with a novel hybrid architecture combining CNNs and Kolmogorov-Arnold Networks (KAN) for superior accuracy (94.80%) and real-time performance.',
		shortDescription:
			'AI system for detecting cotton leaf diseases using a novel CNN-KAN hybrid architecture.',
		links: [
			{
				to: 'https://github.com/BryanEstrada003/cotton-leaf-defect-classification',
				label: 'GitHub Repository'
			},
			{ to: 'https://github.com/BryanEstrada003', label: 'Bryan Estrada' },
			{ to: 'https://github.com/MelissaAyllon', label: 'Melissa Ayllon' },
			{ to: 'https://github.com/jppluas', label: 'Juan Pablo Plúas' }
		],
		logo: Assets.Cotton,
		name: 'Cotton Leaf Defect Classification System',
		period: {
			from: new Date(2025, 8, 30), // September 2025
			to: new Date(2026, 0, 8) // January 2026
		},
		skills: getSkills('python', 'pytorch', 'tensorflow', 'git'),
		type: 'AI Research Project & Web Application',
		screenshots: [
			{
				label: 'screen 1',
				src: 'https://github.com/BryanEstrada003/cotton-leaf-defect-classification/blob/ui/ui/8.jpeg?raw=true'
			},
			{
				label: '2',
				src: 'https://github.com/BryanEstrada003/cotton-leaf-defect-classification/blob/ui/ui/4.jpeg?raw=true'
			},
			{
				label: '3',
				src: 'https://github.com/BryanEstrada003/cotton-leaf-defect-classification/blob/ui/ui/2.jpeg?raw=true'
			}
		]
	},
	{
		slug: 'portfolio-mai',
		color: '#ff3e00',
		description:
			'A personal portfolio website built on the Slick Portfolio Svelte template, customized with my projects, skills, and professional information.',
		shortDescription: 'Personal portfolio based on the Slick Portfolio Svelte template.',
		links: [{ to: 'https://github.com/BryanEstrada003/Portfolio-Mai', label: 'GitHub Repository' }],
		logo: Assets.Mai,
		name: 'Portfolio Mai',
		period: {
			from: new Date()
		},
		skills: getSkills('svelte', 'git'),
		type: 'Personal Portfolio Website'
	}
];

const title = 'Projects';

const ProjectsData = { title, items };

export default ProjectsData;
