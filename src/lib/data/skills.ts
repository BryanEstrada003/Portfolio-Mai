import type { Skill, SkillCategory } from './types';
import type { StringWithAutoComplete } from '@riadh-adrani/utils';
import { omit } from '@riadh-adrani/utils';
import Assets from './assets';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Languages', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' }),
	// add skills for research assistant
	defineSkillCategory({ name: 'Research', slug: 'research' }),
	defineSkillCategory({ name: 'Data Analysis', slug: 'data-analysis' }),
	defineSkillCategory({ name: 'Data Engineering', slug: 'data-engineering' }),
	defineSkillCategory({ name: 'Computer Vision', slug: 'cv' }),
	defineSkillCategory({ name: 'SAP Automation', slug: 'sap-automation' }),
	defineSkillCategory({ name: 'BigQuery', slug: 'bigquery' }),
	defineSkillCategory({ name: 'Power BI', slug: 'powerbi' }),
	defineSkillCategory({ name: 'MySQL', slug: 'mysql' }),
	defineSkillCategory({ name: 'PostgreSQL', slug: 'postgresql' }),
	defineSkillCategory({ name: 'Figma', slug: 'figma' }),
	defineSkillCategory({ name: 'UI/UX Design', slug: 'uiux' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => {
	return items.filter((it) => (slugs.length === 0 ? true : slugs.includes(it.slug)));
};

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};

const title = 'Skills';

const items = [
	defineSkill({
		slug: 'python',
		color: '#3776AB',
		description:
			'Programming language used extensively for data engineering, computer vision, automation, and machine learning projects. Experience with pandas, PyTorch, TensorFlow, and OpenCV for AI solutions.',
		logo: Assets.Python,
		name: 'Python',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'rust',
		color: '#000000',
		description:
			'Systems programming language for high-performance applications. Focus on memory safety, concurrency, and building efficient tools.',
		logo: Assets.Rust,
		name: 'Rust',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'zig',
		color: '#F7A41D',
		description:
			'Modern systems programming language for low-level development with focus on simplicity, performance, and robustness.',
		logo: Assets.Zig,
		name: 'Zig',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'pytorch',
		color: '#EE4C2C',
		description:
			'Deep learning framework for developing and training neural networks. Used for computer vision models, 2D/3D CNN architectures, and research projects at CIDIS-ESPOL.',
		logo: Assets.PyTorch,
		name: 'PyTorch',
		category: 'library'
	}),
	defineSkill({
		slug: 'open3d',
		color: '#0172CC', // Color oficial de Open3D basado en su logo
		description:
			'Open-source library for 3D data processing. Used for working with point clouds and meshes in computer vision research at CIDIS-ESPOL, including visualization, registration, and geometric analysis.',
		logo: Assets.Open3D, // Asumo que tendrás que agregar este asset
		name: 'Open3D',
		category: 'cv' // Computer Vision es la categoría perfecta
	}),
	defineSkill({
		slug: 'sKlearn',
		color: '#F7931E', // Color naranja oficial de scikit-learn
		description:
			'Machine learning library for Python used for model evaluation, metrics calculation, and preprocessing. Implemented comprehensive testing pipelines at CIDIS-ESPOL to validate computer vision models using classification reports, confusion matrices, and cross-validation.',
		logo: Assets.SKLearn, // Necesitarás crear este asset
		name: 'scikit-learn',
		category: 'library' // Librería de machine learning
	}),
	defineSkill({
		slug: 'tensorflow',
		color: '#FF6F00',
		description:
			'Machine learning framework for building and deploying AI models. Experience in developing scalable deep learning solutions.',
		logo: Assets.TensorFlow,
		name: 'TensorFlow',
		category: 'library'
	}),
	defineSkill({
		slug: 'opencv',
		color: '#5C3EE8',
		description:
			'Computer vision library for image processing, object detection, and video analysis. Used in research for automated food quality assessment and visual recognition systems.',
		logo: Assets.OpenCV,
		name: 'OpenCV',
		category: 'cv'
	}),
	defineSkill({
		slug: 'r',
		color: '#276DC3', // Color oficial de R (azul)
		description:
			'Programming language for statistical computing and graphics. Used for data analysis, statistical modeling, and training machine learning models. Provides complementary capabilities to Python for exploratory data analysis and advanced statistical inference.',
		logo: Assets.R, // Necesitarás crear/agregar este asset
		name: 'R & RStudio',
		category: 'pro-lang' // Lenguaje de programación para análisis
	}),
	defineSkill({
		slug: 'svelte',
		color: '#FF3E00', // Color naranja oficial de Svelte
		description:
			'Svelte is a modern frontend framework for building web applications with reactive components. Used for developing personal website projects with highly responsive interfaces and efficient state management. Svelte Kit is a full-stack framework built on Svelte for application development with built-in routing, server-side rendering, and API endpoints. Used to build optimized personal portfolio websites with excellent performance scores.',
		logo: Assets.Svelte, // Ya existe en tus assets
		name: 'Svelte & Svelte Kit',
		category: 'framework' // Es un framework, no solo una librería
	}),
	defineSkill({
		slug: 'pandas',
		color: '#150458',
		description:
			'Data manipulation and analysis library for Python. Used for data cleaning, transformation, and exploratory data analysis in BI and research projects.',
		logo: Assets.Pandas,
		name: 'Pandas',
		category: 'library'
	}),
	defineSkill({
		slug: 'docker',
		color: '#2496ED',
		description:
			'Containerization platform used for deploying machine learning models and creating reproducible research environments. Experience in containerizing computer vision applications, managing dependencies, and ensuring consistent deployment across different systems at CIDIS-ESPOL.',
		logo: Assets.Docker,
		name: 'Docker',
		category: 'devops'
	}),
	defineSkill({
		slug: 'sap',
		color: '#007DB8',
		description:
			'Enterprise resource planning system with experience in process automation using Python. Developed automated workflows and integrated SAP with external tools for business intelligence and data extraction.',
		logo: Assets.SAP,
		name: 'SAP Automation',
		category: 'sap-automation'
	}),
	defineSkill({
		slug: 'bigquery',
		color: '#669DF6',
		description:
			'Google Cloud data warehouse for large-scale data analytics. Experience in query optimization, ETL processes, and data pipeline management.',
		logo: Assets.BigQuery,
		name: 'Google BigQuery',
		category: 'db'
	}),
	defineSkill({
		slug: 'mysql',
		color: '#4479A1',
		description:
			'Relational database management system. Experience in database design, administration, and complex query writing for business applications.',
		logo: Assets.MySQL,
		name: 'MySQL',
		category: 'db'
	}),
	defineSkill({
		slug: 'postgresql',
		color: '#4169E1',
		description:
			'Advanced open-source relational database. Used for robust data storage, transaction management, and complex analytical queries.',
		logo: Assets.PostgreSQL,
		name: 'PostgreSQL',
		category: 'db'
	}),
	defineSkill({
		slug: 'linux',
		color: '#FCC624',
		description:
			'Proficient in Linux system administration, command-line tools, bash scripting, and server management. Experience with high-performance computing and SLURM workload manager.',
		logo: Assets.Linux,
		name: 'Linux',
		category: 'devops'
	}),
	defineSkill({
		slug: 'git',
		color: '#F05032',
		description:
			'Version control system for collaborative development. Experience in branching strategies, code review processes, and team collaboration workflows.',
		logo: Assets.Git,
		name: 'Git',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'figma',
		color: '#F24E1E',
		description:
			'UI/UX design tool for creating wireframes, prototypes, and high-fidelity designs. Experience in designing internal management systems and user interfaces.',
		logo: Assets.Figma,
		name: 'Figma',
		category: 'design'
	}),
	defineSkill({
		slug: 'powerbi',
		color: '#F2C811',
		description:
			'Business analytics tool for data visualization and reporting. Experience in creating dashboards, reports, and data storytelling for business intelligence.',
		logo: Assets.PowerBI,
		name: 'Power BI',
		category: 'data-analysis'
	}),
	defineSkill({
		slug: 'latex',
		color: '#008080',
		description:
			'Document preparation system for scientific and technical documents. Used for research papers, reports, and academic publications.',
		logo: Assets.LaTeX,
		name: 'LaTeX',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'typst',
		color: '#239CAD',
		description:
			'Modern markup-based typesetting system for creating professional documents. Alternative to LaTeX with improved performance and simplicity.',
		logo: Assets.Typst,
		name: 'Typst',
		category: 'devtools'
	})
] as const;

const SkillsData = {
	title,
	items
};

export default SkillsData;
