var r = async (...[t, e, a]) =>
	new Uint8Array(
		await (
			await import("@cloudflare/workers-types/experimental")
		).crypto.subtle.decrypt(
			{ name: "AES-GCM", iv: a, tagLength: 128 },
			await (
				await import("@cloudflare/workers-types/experimental")
			).crypto.subtle.importKey(
				"jwk",
				{ kty: "oct", k: e ?? "", alg: "A256GCM", ext: !0 },
				{ name: "AES-GCM" },
				!1,
				["encrypt", "decrypt"],
			),
			t,
		),
	);
export { r as default };
