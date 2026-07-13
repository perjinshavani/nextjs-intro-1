import data from "@/data/characters.json";

export function getCharacterById(id: number) {
  return data.items.find((character) => character.id === id);
}

export function getCharacters() {
  return data;
}
