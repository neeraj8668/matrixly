import React, { useState } from "react";
import MulitplePlaceHolder from "./MulitplePlaceHolder";
import KnowledgeBase from "./KnowledgeBase";
import MultipleChat from "./MultipleChat";
import "./style.css";
import { deleteDocumentById, fetchMulti } from "../services/document";
import { useQuery, useQueryClient } from "react-query";
import { Spinner } from "reactstrap";
import uploadToS3 from "../utils/uploadToS3";
import { toast } from "react-toastify";
import { createDocument } from "../services/document";
import { DOCUMENT_TYPE } from "../utils/constants";
import { useParams } from "react-router-dom";


const fakeHistory = [
	{ conversation_id: 1, subject: "Design Strategy" },
	{ conversation_id: 2, subject: "Design roadmap" },
];
function Multiple() {
	const queryClient = useQueryClient();
	const {document_id, conversation_id} = useParams();



	const [content, setContent] = useState([]);
	//-------------------------------------------------Document start
	const [file, setFile] = useState(null);
	const [isUploading, setIsUplaoding] = useState(false);
	const [isKnowledge, setIsKnowledge] = useState(false);
	const handleClose = () => setIsKnowledge(false);
	const handleShow = () => setIsKnowledge(true);
	
	const {
		isLoading,
		isError,
		error,
		data,
		isFetching,
		isPreviousData,
	} = useQuery('multiDocs', () => fetchMulti())

	const documents = data?.data || [];


	const onDocumentDelete = (id) => {
		if(!id) {
			return;
		}
		deleteDocumentById(id).then(res => {
			queryClient.invalidateQueries('multiDocs');
			toast.success('Document deleted Successfully')

		}).catch(e => toast.error(e.message))
	}

	const onCreateClick = async (file) => {
		if (!file) {
			return;
		}
		setIsUplaoding(true)
		try {
			const path = await uploadToS3(file);

			const values = { name: file.name, path, type: DOCUMENT_TYPE.multiple };

			const response = await createDocument(values);
			setIsUplaoding(false)
			setFile(null);
			queryClient.invalidateQueries('multiDocs');

			toast.success('Sharebot created Successfully')
		} catch (error) {
			console.log("🚀 ~ onCreateClick ~ error:", error)
			toast.error(error)

		}

	}
	//-------------------------------------------------Document ends

	if (isLoading)
		return (
			<div className="multiple-doc-empty-container">
				<div className="multiple-doc-empty">
					<Spinner />

				</div>
			</div>
		);

	return (
		<>
			<KnowledgeBase show={isKnowledge} documents={documents} handleClose={handleClose} onDocumentDelete={onDocumentDelete} onCreateClick={onCreateClick} file={file} setFile={setFile} uploading={isUploading} />
			{documents.length ? <MultipleChat documents={documents} handleShow={handleShow} /> : <MulitplePlaceHolder handleShow={handleShow} />}
		</>
	);
}

export default Multiple;
