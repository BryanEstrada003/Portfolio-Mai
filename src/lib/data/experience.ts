import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from './types';

const title = 'Experience';

const items: Array<Experience> = [
	{
		slug: 'research-assistant-computer-vision',
		company: 'CIDIS - ESPOL',
		description:
			'Development of Computer Vision and Deep Learning solutions for image analysis, object detection, and process automation. Technical support, software installation, and collaboration in publishing scientific reports and articles.',
		contract: ContractType.PartTime,
		type: 'Research & Development',
		location: 'Guayaquil, Ecuador',
		period: { from: new Date(2025, 0, 1) }, // January 2025 - Present
		skills: getSkills('python', 'pytorch', 'tensorflow', 'opencv', 'open3d', 'linux', 'git', 'docker', 'latex', 'typst'),
		name: 'Research Assistant - Computer Vision',
		color: 'purple',
		links: [],
		logo: Assets.CIDIS,
		shortDescription:
			'Developing computer vision solutions for automated food quality assessment at CIDIS-ESPOL.'
	},
	{
		slug: 'bi-intern',
		company: 'Vitapro S.A.',
		description:
			'Data collection and analysis, creation and maintenance of reports. Automation of data extraction and visualization processes. Training on SAP process automation with Python.',
		contract: ContractType.Internship,
		type: 'Business Intelligence',
		location: 'Guayaquil, Ecuador',
		period: { from: new Date(2024, 0, 1), to: new Date(2024, 11, 31) }, // 2024 - 2025
		skills: getSkills('python', 'bigquery', 'powerbi', 'mysql', 'postgresql', 'sap', 'pandas'),
		name: 'Business Intelligence Intern',
		color: 'blue',
		links: [],
		logo: Assets.Vitapro,
		shortDescription: 'Automated SAP processes with Python and optimized ETL pipelines at Vitapro.'
	},
	{
		slug: 'ui-designer-intern',
		company: 'Zede del Litoral',
		description:
			"Responsible for designing and developing prototypes across different phases (low, medium, and high fidelity) with the goal of improving and streamlining Zede's internal management systems. This included needs research, iteration based on feedback, and creating functional solutions to facilitate daily operations.",
		contract: ContractType.Internship,
		type: 'UI/UX Design',
		location: 'Guayaquil, Ecuador',
		period: { from: new Date(2023, 8, 1), to: new Date(2024, 8, 1) }, // Sep 2023 - Sep 2024
		skills: getSkills('figma', 'uiux'),
		name: 'UI Designer Intern',
		color: 'green',
		links: [],
		logo: Assets.Zede,
		shortDescription: 'Designed and prototyped internal management systems at Zede del Litoral.'
	}
];

const ExperienceData = { title, items };

export default ExperienceData;
