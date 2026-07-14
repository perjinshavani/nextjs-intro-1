// ----- GraphQl -----

const graphQlEndpoint = "https://futuramaapi.com/graphql";

// --- Our query to get the characters
const graphQlQuery = `query MyQuery {
		characters(limit: 10, offset: 5) {
			total
			edges {
				status
				gender
				name
				species
				image
				id
			}
			limit
			offset
		}
	}`;

// --- Not really necessary, just a rename and a quick way to call
export async function getCharactersGraphQl() {
	return await graphQlFetch(graphQlQuery);
}

// --- Util function for graphQl fetches, takes a query and returns the fetch
async function graphQlFetch(query: string) {
	const res = await fetch(graphQlEndpoint, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		// body: JSON.stringify({ query: query }),
		// Uses ES6 Object Property Shorthand:
		// When the key and variable name match, you can omit the duplicate.
		body: JSON.stringify({ query }),
	});

	return await res.json();
}

// ----- SUPER DUPER MEGA EXTRA WARNING -----
// ---- Don't bother with this if you don't want extra things. It's only for those curios about more complex setups

// --- Types ---

// Util type to extra the variables if they exist
type ExtractVariables<T> = T extends { variables: object }
	? T["variables"]
	: Record<string, never>; // Means "this object must be empty if provided"

// So that we don't need to add the edges and stuff to everything manually
export type Connection<T> = {
	edges: Array<T>;
	total: number;
	offset: number;
	limit: number;
};

// for our characters
export type GraphCharacter = {
	id: number;
	name: string;
	gender: string;
	status: string;
	species: string;
	createdAt: string;
	image: string | null;
};

// type for the operation to get our characters
type GraphCharacterOperation = {
	data: { characters: Connection<GraphCharacter> };
	variables: {
		limit?: number;
		offset?: number;
	};
};

// --- Queries & Fragments ---

// Fragments are reusable parts we can use in a query
const characterFragment = `
  fragment CharacterFields on Character {
    id
    name
    gender
    status
    species
    image
  }
`;

// the Query with limit as a variable, including our fragment
const charactersQuery = `
  query MyQuery($limit: Int, $offset: Int) {
    characters(limit: $limit, offset: $offset) {
      edges {
        ...CharacterFields
      }
      limit
      offset
      total
    }
  }
  ${characterFragment} 
`;

// --- Main Fetch ---
// generic fetch that adapts to situation with our without variables in the request
export async function apiFetch<T>({
	query,
	variables,
}: {
	query: string;
	variables?: ExtractVariables<T>;
}): Promise<{ status: number; body: T }> {
	try {
		const result = await fetch(graphQlEndpoint, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				query,
				...(variables && { variables }), //if variables exists, include them in the body
			}),
		});
		const body = await result.json();

		// Check if the GraphQL server returned an internal execution error
		if (body.errors && body.errors.length > 0) {
			throw new Error(body.errors[0].message, {
				cause: { originalError: body.errors, query },
			});
		}

		return {
			status: result.status,
			body,
		};
	} catch (e) {
		console.warn(e);
		throw new Error("GraphQL request failed", {
			cause: { originalError: e, query },
		});
	}
}

// --- The actual fetch using all of the above to get the characters
// We can make several ready made functions as packages for ease of use
export async function getCharactersComplex({
	limit = 10,
	offset = 0,
}: {
	limit?: number;
	offset?: number;
} = {}): Promise<Connection<GraphCharacter>> {
	const res = await apiFetch<GraphCharacterOperation>({
		query: charactersQuery,
		variables: {
			limit,
			offset,
		},
	});

	return res.body.data.characters;
}
