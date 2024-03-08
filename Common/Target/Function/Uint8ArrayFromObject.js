var y = async (...[t]) => {
	const a = Object.keys(t)
			.map(Number)
			.sort((e, r) => e - r),
		s = new Uint8Array(a.length);
	return (
		a.forEach((e, r) => {
			s[r] = t[e] ?? 0;
		}),
		s
	);
};
export { y as default };
