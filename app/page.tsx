import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/hero";
import { getCharactersREST } from "@/data/characters";
import {
	getCharacterComplex,
	getCharactersComplex,
	getCharactersGraphQl,
} from "@/data/graph-characters";

interface CardProps {
	id?: number;
	name: string;
	gender?: string;
	status?: string;
	species?: string;
	createdAt?: string;
	image: string | null;
}

function Card({ name, id, image }: CardProps) {
	return (
		<div className="h-full grid grid-rows-[200px_1fr_auto] gap-4 border border-white/20 rounded-xl overflow-hidden [&_>_*:not(img)]:mx-4 pb-4">
			<h3 className="text-2xl font-bold font-outfit">{name}</h3>

			<Image
				src={image ? image : "https://placehold.co/600x400"}
				className="w-full h-full object-cover order-first"
				alt=""
				width={600}
				height={400}
				unoptimized={!image}
				sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 25vw, 274px"
			/>

			<Link
				className="py-3 border rounded-xl text-center uppercase font-semibold border-white/30 hover:outline-2 hover:outline-teal-400"
				href={`/character/${id}`}
			>
				View dossier
			</Link>
		</div>
	);
}

interface CharacterItem {
	id: number;
	name: string;
	gender: string;
	status: string;
	species: string;
	createdAt: string;
	image: string | null;
}

interface CharacterResponse {
	items: CharacterItem[];
	total: number;
	page: number;
	size: number;
	pages: number;
}

export default async function Home() {
	// -- using the json function --
	//const { page, pages, items: characters } = getCharacters();

	// -- using the Rest Fetch function --
	const {
		page,
		pages,
		items: characters,
	} = (await getCharactersREST(3, 5)) as CharacterResponse;

	// --- Using GraphQl ---
	// const res = await getCharactersGraphQl();
	// console.log(res);

	//--- Using the complex GraphQl example ---
	// const {
	// 	limit,
	// 	offset,
	// 	total,
	// 	edges: gqcharacters,
	// } = await getCharactersComplex();

	// console.log(gqcharacters[0].name, limit, offset, total);

	// Single character using complex example
	//console.log(await getCharacterComplex(1));
	return (
		<main>
			<Hero />
			<section className="max-w-7xl mx-auto px-4 md:px-16 my-8">
				<h2 className="text-3xl font-outfit font-bold mb-2">
					Faculty &amp; Crew
				</h2>
				<p className="text-sm">
					Learn from the best (and the most eccentric) in the business.
				</p>
				<ul className="grid grid-cols-[repeat(auto-fill,minmax(26ch,1fr))] gap-4 my-8">
					{/* {characters.slice(0, 8).map((char) => ( */}
					{characters.map((char) => (
						<li key={char.id}>
							<Card name={char.name} image={char.image} id={char.id} />
						</li>
					))}
				</ul>
				Showing page {page} of {pages}
			</section>
		</main>
	);
}
