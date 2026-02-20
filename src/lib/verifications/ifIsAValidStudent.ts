import { supabase } from "../supabase/createClient"

export async function ifIsAValidStudent(studentId: string) {
	const { data, error } = await supabase
		.from("students")
		.select("*")
		.eq("id", studentId)
		.limit(1)

	if (error) {
		return { error: 'Error al verificar el estudiante' }
	}

	return { data: data.length === 1 }
}