import React from "react";

interface CreateApiKeyModalProps {
    isVisible: boolean;  
    onClose: () => void;  
    platforms: string[];  
}

const CreateApiKeyModal: React.FC<CreateApiKeyModalProps> = ({
    isVisible,
    onClose,
    platforms, 
}) => {
    if (!isVisible) return null;  

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
            <div className="bg-white rounded-lg p-6 shadow-lg w-1/3"> 
                <h2 className="text-xl font-bold mb-4">Create New API Key</h2>
                <div className="flex justify-end mb-4">
                    <button
                        className="text-gray-600 hover:text-gray-800"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Select Platform:
                    </label>
                    <select className="border border-gray-300 rounded px-4 py-2 w-full">
                        {platforms.map((platform, index) => (
                            <option key={index} value={platform}>
                                {platform}
                            </option>
                        ))}
                    </select>
                </div>

                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Create API Key
                </button>
            </div>
        </div>
    );
};

export default CreateApiKeyModal;