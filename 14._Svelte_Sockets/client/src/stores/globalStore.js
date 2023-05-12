// Not a class, so camelCase

import { readable, writable } from "svelte/store";

export const BASE_URL = readable("http://localhost:8080"); // Default value er vel den localhost vi kører på via svelte: 5173?
export const myUsername = writable();
export const colorsList = writable([]);

// No default export?