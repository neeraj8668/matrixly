// @ts-nocheck
import React, { useEffect, useState } from "react";
import MultiHistory from "./MultiHistory";
import Conversation from "../components/Conversation/Conversation";
import { createDocumentConversation, deleteDocumentConversation, fetchDocumentChat, fetchDocumentConversations, sendDocumentMessage } from "../services/chat";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "react-query";

function MultipleChat(props) {
	const queryClient = useQueryClient();
	const navigate = useNavigate();
	const params = useParams();
	let { document_id, conversation_id } = params;
	const { documents } = props;
	useEffect(() => {
		if (!documents.find((e) => +e.id === +document_id)) {
			navigate("/multiple");
		}
	}, [documents, document_id]);

	const { data: multiDocConversations } = useQuery(["multi-conversations", document_id], () => {
		return fetchDocumentConversations(document_id);
	});
	const history = multiDocConversations?.data;
	const {
		isLoading,
		isError,
		error,
		data: contentData,
		isFetching,
		isPreviousData,
	} = useQuery(["multichat-content", document_id, conversation_id], () => fetchDocumentChat({ documentId: document_id, conversationId: conversation_id }));
	const content = contentData?.data?.chats;

	const [isSendMessageLoading, setIsSendMessageLoading] = useState(false);

	const onSend = async (text) => {
		try {
			setIsSendMessageLoading(true);
			if (!conversation_id) {
				const newConversation = await createDocumentConversation(document_id, text); // Replace with your API call
				conversation_id = newConversation.data.conversation_id;
				navigate(`/multiple/${document_id}/${conversation_id}`);
			}

			const newMessage = await sendDocumentMessage(document_id, conversation_id, text); // Replace with your API call
			queryClient.invalidateQueries("multichat-content");
			queryClient.invalidateQueries("multichat-conversations");

			setIsSendMessageLoading(false);
		} catch (error) {
			console.log("🚀 ~ onSend ~ error:", error);
		}
	};
	const deleteItemMutation = useMutation((id) => deleteDocumentConversation({ documentId: document_id, conversationId: id }), {
		onMutate: async (id) => {
			// Cancel any outgoing refetches while the mutation is in progress
			await queryClient.cancelQueries("multi-conversations");

			// Snapshot the current state of the items query
			const previousItems = queryClient.getQueryData("multi-conversations");

			// Optimistically update the local state to reflect the deletion
			queryClient.setQueryData("multi-conversations", (oldItems) => {
				oldItems.data = oldItems.data.filter((item) => item.conversation_id !== id);
				return oldItems;
			});

			// Return a function to rollback the optimistic update if the mutation fails
			return () => queryClient.setQueryData("multi-conversations", previousItems);
		},
		onSuccess: (data, variables, context) => {
			console.log("🚀 ~ AIChat ~ data, variables, context:", data, variables, context);
			// Invalidate and refetch the 'items' query after successful deletion
			queryClient.invalidateQueries("multi-conversations");
			const { id } = data; // Assuming the response contains the conversation_id

			if (id === conversation_id) {
				// Navigate to another page
				history.push(`/multiple/${document_id}`);

				// Invalidate and refetch the 'multichat-content' query after successful deletion
				queryClient.invalidateQueries("multichat-content");
			}
		},
	});
	const onClearClick = () => {
		history.map((h) => deleteItemMutation.mutate(h.conversation_id));
	};
	const onDeleteClick = (id) => {
		deleteItemMutation.mutate(id);
	};

	return (
		<div className="d-flex multiple_chat">
			<MultiHistory chatHistory={history} onClearClick={onClearClick} onDeleteClick={onDeleteClick} {...props} />
			<div className="flex-1 chat-container">
				<Conversation
					isPlaceHolder={false}
					onSend={onSend}
					content={content}
					conversationContainer={"multipleChat-conversation-container"}
					placeholderContainer={"multiple-placeholder-container"}
					isSendMessageLoading={isSendMessageLoading}
				/>
			</div>
		</div>
	);
}

export default MultipleChat;
