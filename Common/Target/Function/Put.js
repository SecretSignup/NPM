const a = (...[e]) => {
	if (e instanceof Map) {
		const t = {};
		for (const [s, r] of e.entries())
			r instanceof Map ? (t[s] = a(r)) : (t[s] = r);
		return t;
	}
	return e;
};
var n = a;
export { a as _Function, n as default };
