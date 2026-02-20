import { useState } from "react";
import type { Candidate } from "../../types/types";
import { actions } from "astro:actions";

export default function VoteSelect({
	personerys,
	comptrollers,
	studentId
}: {
	personerys: Candidate[]
	comptrollers: Candidate[]
	studentId: string
}) {
	const [selectedPersonero, setSelectedPersonero] = useState<string | null>(null);
	const [selectedComptroller, setSelectedComptroller] = useState<string | null>(null);

	const handleVote = async (e: React.SubmitEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!selectedPersonero || !selectedComptroller) {
			alert("Por favor selecciona un candidato para cada cargo.");
			return;
		}

		const voteKey = `${selectedPersonero}&${selectedComptroller}`;

		const { data } = await actions.vote({ voteKey, studentId })

		if (data?.success) {
			alert("Voto registrado exitosamente.");
			window.location.href = "/vote-candidates";
		}

		if (data?.error) {
			alert("Error al registrar el voto.");
		}
	};

	const CandidateCard = ({ candidate, groupName, isSelected, onSelect }: { 
		candidate: Candidate, 
		groupName: string, 
		isSelected: boolean, 
		onSelect: (id: string) => void 
	}) => (
		<label 
			className={`relative flex items-center p-4 rounded-2xl border-2 transition-all duration-300 cursor-pointer group hover:shadow-lg ${
				isSelected 
					? "border-[#000080] bg-[#000080]/5 shadow-md" 
					: "border-gray-100 bg-white hover:border-gray-200"
			}`}
		>
			<input 
				type="radio" 
				name={groupName} 
				value={`${candidate.id}/${candidate.name}`} 
				checked={isSelected}
				onChange={() => onSelect(`${candidate.id}/${candidate.name}`)}
				className="hidden"
			/>
			<div className="flex items-center gap-4 w-full">
				<div className="relative">
					<img
						className={`w-20 h-20 rounded-full object-cover border-2 transition-transform duration-300 ${
							isSelected ? "border-[#000080] scale-105" : "border-transparent"
						}`}
						src={candidate.url_img}
						alt={candidate.name}
					/>
					{isSelected && (
						<div className="absolute -top-1 -right-1 bg-[#FCE300] text-[#000080] rounded-full p-1 shadow-sm">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
								<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
							</svg>
						</div>
					)}
				</div>
				<div className="flex-1">
					<h3 className={`font-bold text-lg transition-colors ${isSelected ? "text-[#000080]" : "text-gray-800"}`}>
						{candidate.name}
					</h3>
					<div className="flex items-center gap-2 mt-1">
						<span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-xs font-semibold">
							Tarjetón: {candidate.card_number}
						</span>
					</div>
				</div>
				<div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
					isSelected ? "border-[#000080] bg-[#000080]" : "border-gray-300"
				}`}>
					{isSelected && <div className="w-2 h-2 rounded-full bg-white"></div>}
				</div>
			</div>
		</label>
	);

	return (
		<form onSubmit={handleVote} className="space-y-10">
			<div>
				<div className="flex items-center gap-3 mb-6">
					<div className="w-2 h-8 bg-[#FCE300] rounded-full"></div>
					<h2 className="text-2xl font-bold text-[#000080]">Personeras</h2>
				</div>
				<div className="grid grid-cols-1 gap-4">
					{personerys.map((personery) => (
						<CandidateCard 
							key={personery.id}
							candidate={personery}
							groupName="personero"
							isSelected={selectedPersonero === `${personery.id}/${personery.name}`}
							onSelect={setSelectedPersonero}
						/>
					))}
				</div>
			</div>

			<div>
				<div className="flex items-center gap-3 mb-6">
					<div className="w-2 h-8 bg-[#FCE300] rounded-full"></div>
					<h2 className="text-2xl font-bold text-[#000080]">Contraloras</h2>
				</div>
				<div className="grid grid-cols-1 gap-4">
					{comptrollers.map((comptroller) => (
						<CandidateCard 
							key={comptroller.id}
							candidate={comptroller}
							groupName="comptroller"
							isSelected={selectedComptroller === `${comptroller.id}/${comptroller.name}`}
							onSelect={setSelectedComptroller}
						/>
					))}
				</div>
			</div>

			<div className="pt-6">
				<button 
					type="submit"
					disabled={!selectedPersonero || !selectedComptroller}
					className={`w-full py-5 rounded-full font-bold text-xl shadow-xl transition-all duration-300 flex items-center justify-center gap-3 ${
						selectedPersonero && selectedComptroller
							? "bg-[#000080] text-white hover:bg-[#0A192F] hover:scale-[1.02] cursor-pointer"
							: "bg-gray-200 text-gray-400 cursor-not-allowed shadow-none"
					}`}
				>
					Registrar Voto
					<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
					</svg>
				</button>
				<p className="text-center text-gray-400 text-sm mt-4">
					Asegúrate de haber seleccionado a ambos candidatos antes de continuar.
				</p>
			</div>
		</form>
	);
}
