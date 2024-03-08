var p = async (...[e, r, { get: o }, s]) => {
	try {
		const { Vector: t, Data: i } = await o(r, { type: "json" });
		return JSON.parse(
			(await import("node:buffer")).Buffer.from(
				await (await import("./Decrypt.js")).default(
					await a(i),
					e ?? "",
					await a(t),
				),
			).toString(),
		)[s];
	} catch (t) {
		console.log(t);
	}
};
const { default: a } = await import("./Uint8ArrayFromObject.js");
export { a as Uint8ArrayFromObject, p as default };
