// @ts-nocheck
import React, { useEffect, useState } from "react";
import Conversation from "../components/Conversation/Conversation";
import { useParams } from "react-router-dom";
import { createShareBot, getDocumentById } from "../services/document";
import { toast } from "react-toastify";
import BigLogo from "../assets/logo_with_name.png";
import { sendDocumentBotMessage } from "../services/chat";
import { RedirectToSignIn, useAuth } from "@clerk/clerk-react";
import { useQuery, useQueryClient } from "react-query";
import PageLoader from '../Routes/PageLoader';
function ShareBotChat() {
	const queryClient = useQueryClient();

	const { isLoaded, isSignedIn, userId } = useAuth();

	const [isSendMessageLoading, setIsSendMessageLoading] = useState(false);

	const params = useParams();
	const { id } = params;
	console.log("🚀 ~ ShareBotChat ~ document_id:", id);
	const { isLoading, isError, error, data, isFetching, isPreviousData } = useQuery(["getDocument-SharebotChat", id], () => getDocumentById(id));
	const document = data?.data;
	console.log("🚀 ~ ShareBotChat ~ document:", document);
	const [content, setContent] = useState([]);

	useEffect(() => {
		setContent([{ type: 2, text: document?.welcome_message }]);
	}, [document])

	const onSend = async (text) => {
		console.log("🚀 ~ onSend ~ text:", text);
		setIsSendMessageLoading(true);
		setContent((state) => [...state, { type: 1, text }]);
		const resp = await sendDocumentBotMessage({ documentId: id, text });
		setContent((state) => [...state, { type: 2, text: resp.answer }]);
		setIsSendMessageLoading(false);
	};

	const onSaveClick = () => {

		console.log("🚀 ~ onSaveClick ~ isLoaded && !isSignedIn:", !isSignedIn)
		if (!isSignedIn) {

			return <RedirectToSignIn />
		}

		createShareBot(id)
			.then((res) => {
				toast.success("Sharebot saved Successfully");
				queryClient.invalidateQueries("savedSharedBots");

			})
			.catch((e) => toast.error(e.message));
	};
	if (isLoading) {
		return <PageLoader />
	}

	return (
		<>
			<div className="share-bot-chat-container container">
				<Conversation
					isPlaceHolder={false}
					onSend={onSend}
					content={content}
					isSave={(isLoaded && !isSignedIn) || (isLoaded && isSignedIn && document?.user_id !== userId)}
					onSave={onSaveClick}
					isSendMessageLoading={isSendMessageLoading}
					conversationContainer={"shareBotChat-conversation-container"}
					placeholderContainer={"shareBotChat-placeholder-container"}
				/>
			</div>
			<div className="foot-power-content">
				<div className="d-flex align-items-center gap-3">
					<div className="fs-16 fw-400">Powered By: </div>
					<div className="logo">
						<img src={BigLogo} alt="Matrix logo" />
					</div>
				</div>
			</div>
		</>
	);
}

export default ShareBotChat;
