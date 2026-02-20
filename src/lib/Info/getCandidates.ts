import { supabase } from "../supabase/createClient"

export async function getCandidates () {
	const { data, error } = await supabase
		.from("candidates")
		.select("*")

	if (error) {
		return { error: 'Error al obtener los candidatos' }
	}

	return { data }
}