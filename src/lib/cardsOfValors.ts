import { Bird, BookCopy, Earth, Hand, HeartHandshake, MessageCircle, Scale, Sprout } from "@lucide/astro"

export const icons = {
	respeto: HeartHandshake,
	comunicacion: MessageCircle,
	crecimiento: Sprout,
	justicia: Scale,
	paz: Bird,
	conocimiento: BookCopy,
	autonomia: Hand,
	identidad: Earth
}

export const cardsOfValors = [
	{
		id: 'respeto',
		title: "Respeto",
		description: `
			Reconocemos la dignidad de cada persona 
			con el respeto mutuo 
			y promovemos la sana convivencia.
		`
	},
	{
		id: 'comunicacion',
		title: "Comunicación",
		description: `
			Promovemos la comunicación activa 
			entre los miembros de la comunidad 
			para fomentar el diálogo y la colaboración.
		`
	},
	{
		id: 'crecimiento',
		title: "Crecimiento",
		description: `
			Promovemos el desarrollo personal y colectivo 
			fomentando la autoestima y la motivación.
		`
	},
	{
		id: 'justicia',
		title: "Justicia",
		description: `
			Promovemos la igualdad de oportunidades 
			entre todos los miembros de la comunidad 
			fomentando la equidad y la igualdad.
		`
	},
	{
		id: 'paz',
		title: "Paz",
		description: `
			Promovemos la convivencia pacífica 
			entre todos los miembros de la comunidad 
			fomentando la armonía.
		`
	},
	{
		id: 'conocimiento',
		title: "Conocimiento",
		description: `
			Promovemos el desarrollo personal y colectivo 
			fomentando la autoestima y la motivación.
		`
	},
	{
		id: 'autonomia',
		title: "Autonomía",
		description: `
			Promovemos la autonomía personal y colectiva 
			fomentando la autoestima y la motivación.
		`
	},
	{
		id: 'identidad',
		title: "Identidad",
		description: `
			Promovemos la identidad personal y colectiva 
			fomentando la autoestima y la motivación.
		`
	}
]