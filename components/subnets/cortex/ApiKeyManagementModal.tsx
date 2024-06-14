import React, { useState } from "react";
import { FaKey } from 'react-icons/fa';  
import CreateApiKeyModal from './CreateApiKeyModal';

interface ApiKeyManagementModalProps {
    isVisible: boolean;  
    onClose: () => void;  
}

const ApiKeyManagementModal: React.FC<ApiKeyManagementModalProps> = ({
    isVisible,
    onClose,
}) => {
    if (!isVisible) return null; 
    const [isCreateApiKeyModalVisible, setIsCreateApiKeyModalVisible] = useState<boolean>(false);  
    const platforms = ["Platform A", "Platform B", "Platform C"];
    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
            <div className="bg-white rounded-lg p-6 shadow-lg w-1/2">
                <h2 className="text-xl font-bold mb-4 text-black">Manage API Keys</h2>
                <div className="flex justify-end mb-4">
                    <button
                        className="px-4 py-2 rounded-xl hover:bg-gray-200 text-gray-600 hover:text-gray-800 border border-gray-200"
                        onClick={onClose}  
                    >
                        Close
                    </button>
                </div>
                <div className="mb-4">
                    <h3 className="text-lg font-bold text-black">Existing API Keys</h3>
                    <ul>
                       
                        <li className="flex justify-between items-center bg-gray-200 p-2 rounded my-2 text-black">
                            <span>ncWaESJX4iH8rGT3BlbkFJbRNXwBEHUaGGL1</span>
                            <button className="text-red-500 hover:text-red-700">Delete</button>
                        </li>
                        <li className="flex justify-between items-center bg-gray-200 p-2 rounded my-2 text-black">
                            <span>qIQt73ncWaESJX4iH8rGT3BlbkFJbRNXwBEHd</span>
                            <button className="text-red-500 hover:text-red-700">Delete</button>
                        </li>
                    </ul>
                </div>

                
                <CreateApiKeyModal
                    isVisible={isCreateApiKeyModalVisible}  
                    onClose={() => setIsCreateApiKeyModalVisible(false)}  
                    platforms={platforms} 
                />

                
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    onClick={() => setIsCreateApiKeyModalVisible(true)}  
                >
                    <FaKey className="inline mr-2" /> Create New API Key
                </button>
            </div>
        </div >
    );
};

export default ApiKeyManagementModal; 
