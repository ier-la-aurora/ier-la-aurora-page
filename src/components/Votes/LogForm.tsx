export default function LogForm() {
	const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
		e.preventDefault();
		const studentId = (document.getElementById("studentId") as HTMLInputElement).value;
		window.location.href = `/vote-candidates/${studentId}`
	}

	return (
		<form onSubmit={handleSubmit} className="flex flex-col gap-6 p-4">
			<div className="flex flex-col gap-2">
				<label htmlFor="studentId" className="text-sm font-semibold text-[#000080] ml-1">
					Documento del Estudiante
				</label>
				<input 
					type="text" 
					id="studentId" 
					name="studentId" 
					placeholder="Ingresa tu identificación"
					className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:border-[#000080] focus:ring-2 focus:ring-[#000080]/10 transition-all outline-none text-lg"
					required
				/>
			</div>
			<button 
				type="submit"
				className="w-full bg-[#000080] text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-[#0A192F] hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
			>
				Ingresar a Votar
			</button>
		</form>
	);
}