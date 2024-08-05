import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import SimpleBar from "simplebar-react";
import { ReactComponent as UploadIcon } from "../../assets/Upload-icon.svg";
import { ReactComponent as UploadCloud } from "../../assets/upload-cloud.svg";
import { ReactComponent as CrossCircle } from "../../assets/cross-circle.svg";
import { ReactComponent as FeaturedFileIcon } from "../../assets/featured-file.svg";
import { ReactComponent as TrashSvg } from "../../assets/trash.svg";
import getFileMB from "../../utils/getFileMB";
import Dropzone from "react-dropzone";
import FileRow from "../FileRow";

function Upload(props) {
  const {
    documents,
    uploading,
    file,
    setFile,
    onDocumentDelete,
    onCreateClick,
    onUploadSuccess,
    onCreateLoading,
    uploadTitle = true,
    uploaderCardWidth = "576px",
    uploaderCardHeight = "450px",
    scrollMaxHeight = "400px",
  } = props; // It will Be called when progress got 100%
  const historyScrollRef = useRef();

  const [] = useState(null);
  useEffect(() => {
    if (historyScrollRef?.current) {
      // @ts-ignore
      historyScrollRef?.current?.recalculate();
    }
    //console.log(historyScrollRef.current.el); // <- the root element you applied SimpleBar on
  }, [historyScrollRef]);

  return (
    <>
      <div
        className="uploader-card"
        style={{ width: uploaderCardWidth, height: uploaderCardHeight }}
      >
        {" "}
        {!file ? (
          <>
            {uploadTitle && (
              <div className="primary-heading">Upload your file</div>
            )}
            <Dropzone
              accept={{
                "application/pdf": [".pdf"],
                "application/msword": [".doc", ".docx"],
                "application/vnd.ms-powerpoint": [".ppt", ".pptx"],
              }}
              onDrop={(acceptedFiles) => {
                console.log(acceptedFiles);

                const file = acceptedFiles[0];
                // if (file.type != "application/pdf") {
                //   return toast.error(
                //     "File type is not supported! Please upload a PDF file"
                //   );
                // }
                // if (getFileMB(file.size) > shareBotFileSize) {
                // 	return toast.error("File size is too large! Please upgrade your package");
                // }
                setFile(file);
                // onCreateClick(file);
              }}
              // accept="pdf/*"
            >
              {({ getRootProps, getInputProps }) => (
                <>
                  <div {...getRootProps()} className="uploader-box">
                    <input {...getInputProps()} type="file" />
                    <UploadIcon />
                    <div className="bold-heading">
                      Drag & drop files or <u>Browse</u>
                    </div>
                    <div className="normal-text">
                      Supported formats: PDF, DOC, DOCX & PPT
                    </div>
                  </div>
                  <div className="secondary-heading">
                    Start by uploading a file
                  </div>
                </>
              )}
            </Dropzone>
          </>
        ) : (
          <>
            <div className="upload_text">
              <p>Please wait for a while...</p>
            </div>
            {/* <FileRow file={file} onDelete={() => setFile(null)} /> */}
          </>
        )}
        {/* <div className="w-100">
					<div className="error-text">This document is not supported, please delete and upload another file.</div>
				</div> */}
        {/* uploading progress  */}
        {/* <div className="w-100">
					<div className="uploading-text mb-1">Uploading</div>
					<div className="uploading-box">
						<div className="d-flex align-items-center justify-content-between">
							<div className="file-text">your-file-here.PDF</div>
							<button className="btn-link btn p-0 pointer">
								<CrossCircle />
							</button>
						</div>
						<div className="uploading-progress" style={{ width: "70%" }}></div>
					</div>
				</div> */}
        {/* uploading progress  */}
        {/* upload file */}
        {/* <button
          onClick={() => onCreateClick(file)}
          className="upload-btn"
          disabled={!file || uploading}
        >
          <UploadCloud /> {uploading ? "Uploading..." : "Upload"}
        </button> */}
        {documents && documents.length ? (
          <div className="w-100 ">
            <SimpleBar
              ref={historyScrollRef}
              forceVisible="y"
              style={{ maxHeight: scrollMaxHeight }}
              autoHide={false}
            >
              {documents.map((document, index) => (
                <div
                  className="d-flex align-items-center justify-content-between w-100 mb-3 pe-4"
                  key={index}
                >
                  <div className="d-flex align-items-center gap-3">
                    <FeaturedFileIcon />
                    <div className="d-flex flex-column">
                      <div className="fs-14 fw-500 text-blue-100">
                        {document.name}
                      </div>
                      {/* <div className="fs-14 fw-400 text-gray-500">200 KB</div> */}
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={() => onDocumentDelete(document.id)}
                      type="button"
                      className="btn btn-link"
                    >
                      <TrashSvg />
                    </button>
                  </div>
                </div>
              ))}
            </SimpleBar>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default Upload;
