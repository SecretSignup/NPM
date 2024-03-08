var r = async (...[e, a]) => {
	const t = (
		await import("@cloudflare/workers-types/experimental")
	).crypto.getRandomValues(new Uint8Array(12));
	return {
		Vector: t,
		Data: new Uint8Array(
			await (
				await import("@cloudflare/workers-types/experimental")
			).crypto.subtle.encrypt(
				{ name: "AES-GCM", iv: t, tagLength: 128 },
				await (
					await import("@cloudflare/workers-types/experimental")
				).crypto.subtle.importKey(
					"jwk",
					{ kty: "oct", k: a, alg: "A256GCM", ext: !0 },
					{ name: "AES-GCM" },
					!1,
					["encrypt", "decrypt"],
				),
				(await import("node:buffer")).Buffer.from(JSON.stringify(e))
					.buffer,
			),
		),
	};
};
export { r as default };
