// @ts-nocheck
import React from "react";
import { ReactComponent as MultiEmptyDocIcon } from "../assets/multi-doc-not.svg";
import { Icon } from "@iconify/react";

function MulitplePlaceHolder(props) {
const {handleShow} = props;

	return (
			<div className="multiple-doc-empty-container">
				<div className="multiple-doc-empty">
					<div className="mb-3 text-center">
						<div className="fs-30 fw-600 text-blue-100">Multi Document</div>
						<div className="fs-16 fw-400 text-gray-500">Build a library of your important documents so you can easily find them and chat about them with me anytime.</div>
					</div>
					<MultiEmptyDocIcon />
					<div className="my-4">
						<div className="fs-20 fw-600 text-blue-100">Pretty empty around here</div>
						<div className="fs-16 fw-400 text-gray-500">Let’s create your knowledge base</div>
					</div>
					<button className="create-knowledge-btn" onClick={handleShow}>
						{" "}
						<div className="fs-16 mt-1">
							<Icon icon="ic:baseline-plus"></Icon>
						</div>{" "}
						<div className="fs-14 fw-500"> Create Knowledge Base</div>
					</button>
				</div>
			</div>
		
	);
}

export default MulitplePlaceHolder;
