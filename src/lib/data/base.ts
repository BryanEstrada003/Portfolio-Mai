const firstName = 'Michael B.';
const lastName = 'Estrada Santana';
const suffix = 'Slick Portfolio With Svelte 5';

const BaseData = {
	firstName,
	lastName,
	suffix,
	get fullName() {
		return `${firstName} ${lastName}`;
	},
	get FirstName() {
		return this.firstName;
	}
};

export default BaseData;
