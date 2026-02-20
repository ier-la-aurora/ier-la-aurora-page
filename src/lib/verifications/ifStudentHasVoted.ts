import { supabase } from "../supabase/createClient"

export async function ifStudentHasVoted(studentId: string) {
	const { data, error } = await supabase
		.from("votes")
		.select("*")
		.eq("student_id", studentId)
		.limit(1)
	
	if (error) {
		return { error: 'Error al verificar el voto' }
	}

	return { data: data.length < 1 }
}