import data from "@/data/characters.json";

export function getCharacterById(id: number) {
	return data.items.find((character) => character.id === id);
}

export function getCharacters() {
	return data;
}

export async function getCharactersREST(page = 1, limit = 8) {
	const res = await fetch(
		`https://futuramaapi.com/api/characters?orderBy=id&orderByDirection=asc&page=${page}&size=${limit}`,
	);

	//console.log(res);
	if (!res.ok) throw new Error("Error in request");

	return await res.json();
}

export function getCharacterByIdREST(id: number) {
	// fetch a single character by it's id...
	// try to solve this one yourselves
	return id;
}
