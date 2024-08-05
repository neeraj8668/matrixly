import React from "react";
import Saved from "../Sharebot/Saved";
import Stats from "./Stats";
import "./style.css";
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { useEffect } from "react";
import { useSession } from "@clerk/clerk-react";
import useUserAuth from "../hooks/useUserAuth";
import api from "../services/api";
import { format } from "date-fns";
import { deleteSavedShareBot, fetchSharedBot } from "../services/document";
import { Spinner } from "reactstrap";

function Dashboard() {

	const { user } = useUserAuth()
	const fullName = user?.fullName;
	const queryClient = useQueryClient();


	const deleteBotMutation = useMutation(deleteSavedShareBot, {
		onSuccess: () => {
			queryClient.invalidateQueries('savedSharedBots');
		},
	});


	const {
		isLoading,
		isError,
		error,
		data,
		isFetching,
		isPreviousData,
	} = useQuery(['savedSharedBots'], () => fetchSharedBot())
	const savedShareBots = (data?.data?.share.map(d => d.document) || []).map(b => ({ ...b, isShare: false, title: b.name, date: format(new Date(b.updated_at), 'MM/dd/yyyy') }))


	const onDelete = async (id) => {
		await deleteBotMutation.mutateAsync(id);
	};

	return (
		<>
			<div className="dashboard-container">
				<div className="d-flex align-items-center gap-3 mb-4">
					<div className="d-flex flex-column">
						<div className="fs-30 fw-600 dashboard-title">Welcome back, {fullName}</div>
						<div className="fs-16 fw-400 dashboard-sub-title">Take a Look on your awesome dashboard</div>
					</div>
				</div>
				<div className="mb-5">
					<Stats />
				</div>
				{/* <div className="fs-24 fw-600 text-blue-100 mb-3"> Saved ShareBots </div> */}
				{/* /<Saved isLoading={isLoading} sharebots={savedShareBots} onDelete={onDelete} /> */}
			</div>
		</>
	);
}

export default Dashboard;
