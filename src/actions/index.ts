import { ActionError, defineAction } from "astro:actions";
import { z } from "zod";
import { supabase } from "../lib/supabase/createClient";

export const server = {
	vote: defineAction({
		input: z.object({
			voteKey: z.string(),
			studentId: z.string()
		}),

		handler: async ({ voteKey, studentId }) => {
			// voteKey = 0000-000-000-000/name&0000-000-000-000/name
			// el primer lado es el personero y el segundo es el contralor
			const [personero, comptroller] = voteKey.split("&");
			const [personeroId, personeroName] = personero.split("/");
			const [comptrollerId, comptrollerName] = comptroller.split("/");

			const { error } = await supabase.from('votes').insert({
				student_id: studentId,
				personery_id: personeroId,
				personery_name: personeroName,
				comptroller_id: comptrollerId,
				comptroller_name: comptrollerName
			})

			if (error) {
				return {
					success: false,
					error: error
				}
			}

			return {
				success: true,
				error: null
			}
		}
	})
}