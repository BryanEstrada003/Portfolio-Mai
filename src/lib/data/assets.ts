import { base } from '$app/paths';


const url = (file: string) => `${base}/logos/${file}`;

const asset = (lightFilename: string, darkFilename = lightFilename) => {
	return { light: url(lightFilename), dark: url(darkFilename) };
};

const Assets = {
	C: asset('c.svg'),
	Pandas: asset('pandas_white.png', 'pandas.svg'),
	Rust: asset('rust.svg'),
	Docker: asset('docker.svg'),
	TypeScript: asset('ts.png'),
	VueJs: asset('vue.png'),
	Python: asset('python.png'),
	Svelte: asset('svelte.svg'),
	PostgreSQL: asset('postgres.png'),
	Unknown: asset('no-img.svg'),
	ESPOL_w: asset('espol_logo.png'),
	Zig: asset('zig.svg'),
	PyTorch: asset('pytorch.png'),
	TensorFlow: asset('tensorflow.png'),
	OpenCV: asset('OpenCV.svg'),
	SAP: asset('sap.png'),
	MySQL: asset('mysql.svg'),
	BigQuery: asset('bigquery.svg'),
	Linux: asset('linux.svg'),
	Git: asset('git.svg'),
	Figma: asset('figma.svg'),
	PowerBI: asset('powerbi.png'),
	LaTeX: asset('latex.svg'),
	Typst: asset('typst.png'),
	CIDIS: asset('cidis.svg'),
	Vitapro: asset('vitapro.png'),
	Zede: asset('zede_non_back.png', 'zede.png'),
	Open3D: asset('open3d.png'),
	R: asset('r.svg')
};

export default Assets;
