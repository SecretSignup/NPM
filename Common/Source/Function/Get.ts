/**
 * @module Get
 *
 */
export const _Function = ((...[Instance]: Parameters<Interface>) => {
	if (typeof Instance === "string") {
		return Instance;
	}

	const _Map = new Map();

	if (typeof Instance === "object") {
		for (const Key in Instance) {
			if (Object.prototype.hasOwnProperty.call(Instance, Key)) {
				if (
					typeof Instance[Key] === "object" &&
					!Array.isArray(Instance[Key])
				) {
					_Map.set(Key, _Function(Instance[Key]));
				} else {
					_Map.set(Key, Instance[Key]);
				}
			}
		}
	}

	return _Map;
}) satisfies Interface as Interface;

export default _Function;

import type Interface from "@Interface/Get.js";
