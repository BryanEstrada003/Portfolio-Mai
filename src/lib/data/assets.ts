import { base } from '$app/paths';


const url = (file: string) => `${base}/logos/${file}`;

const asset = (lightFilename: string, darkFilename = lightFilename) => {
	return { light: url(lightFilename), dark: url(darkFilename) };
};

const Assets = {
	C: asset('svg/C.svg'),
	Pandas: asset('svg/Pandas.svg'),
	Rust: asset('svg/Rust.svg'),
	Docker: asset('svg/Docker.svg'),
	TypeScript: asset('svg/TypeScript.svg'),
	VueJs: asset('svg/Vue.js.png'),
	Python: asset('svg/Python.svg'),
	Svelte: asset('svg/Svelte.svg'),
	PostgreSQL: asset('svg/PostgresSQL.svg'),
	Unknown: asset('no-img.svg'),
	ESPOL_w: asset('espol_logo.png'),
	Zig: asset('svg/Zig.svg'),
	PyTorch: asset('svg/PyTorch.svg'),
	TensorFlow: asset('svg/TensorFlow.svg'),
	OpenCV: asset('svg/OpenCV.svg'),
	SAP: asset('svg/sap.svg'),
	MySQL: asset('svg/MySQL.svg'),
	BigQuery: asset('svg/bigquery.svg'),
	Linux: asset('svg/Linux.svg'),
	Git: asset('svg/Git.svg'),
	Figma: asset('svg/Figma.svg'),
	PowerBI: asset('svg/powerbi.svg'),
	LaTeX: asset('svg/LaTeX.svg'),
	Typst: asset('typst.png'),
	CIDIS: asset('cidis.svg'),
	Vitapro: asset('vitapro.png'),
	Zede: asset('zede.svg'),
	Open3D: asset('open3d.png'),
	R: asset('svg/R-.svg'),
	Cotton: asset('cotton.jpg'),
	Mai: asset('logo_mai.svg'),
	SKLearn: asset('svg/scikit-learn.svg'),
	Med: asset('medical-stud.png'),
	SerBachiller: asset('ser-bachiller.jpg')
};

export default Assets;
