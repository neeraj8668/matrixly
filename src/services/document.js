import api from "./api"
import { API_URL } from "../utils/constants";

export const fetchSingle = () => api(API_URL + '/document/single/').then(res => res.data);
export const fetchMulti = () => api(API_URL + '/document/multiple/').then(res => res.data);
export const fetchSharedBot = () => api(API_URL + '/document/sharebot/').then(res => res.data);

export const deleteSavedShareBot = (id) => api.delete(`${API_URL}/document/${id}/share/`).then(res => res.data);

export const createShareBot = (documentId) => api.get(`${API_URL}/document/${documentId}/share/`).then(res => res.data);




export const createDocument = (body) => api.post(`${API_URL}/document/`, body).then(res => res.data);

export const getDocumentById = (documentId) => {
    console.log("🚀 ~ getDocumentById ~ documentId:", documentId)
    
    return api.get(`${API_URL}/document/${documentId}`).then(res => res.data);}

export const deleteDocumentById = (documentId) => api.delete(`${API_URL}/document/${documentId}`).then(res => res.data);;

