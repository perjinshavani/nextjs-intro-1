import { getCharacterById } from "@/data/characters";
import { strToNr } from "@/lib/util";
import { notFound } from "next/navigation";

// dynamic meta data generation
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: idStr } = await params;

  // convert and check for invalid ids
  const id = strToNr(idStr);

  if (!id) {
    return null;
  }

  const character = getCharacterById(id);

  // in metadata we can return null
  // because it doesn't really matter if we get an error,
  // we will be redirected to notFound later  anyway
  if (!character) {
    return null;
  }

  return { title: character.name };
}

export default async function CharacterPage(
  props: PageProps<"/character/[id]">,
) {
  //--- Example without PageProps ---
  // export default async function CharacterPage({
  //   params,
  // }: {
  //   params: Promise<{ id: string }>;
  // }) {
  const { id: idStr } = await props.params;

  const id = strToNr(idStr);

  // redirect to not found if id is not a valid number
  if (!id) {
    return notFound();
  }

  const character = getCharacterById(id);

  // redirect to not found if we don't find a character
  if (!character) {
    notFound();
  }

  return (
    <main>
      <h1>{character.name}</h1>
      <p>{character.status}</p>
    </main>
  );
}
