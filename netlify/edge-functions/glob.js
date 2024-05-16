import fastglob from 'npm:fast-glob';

export default async function testGlob() {
	const results = await fastglob.glob('./**/*');
	console.log(results);
}
