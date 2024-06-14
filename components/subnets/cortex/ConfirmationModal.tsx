import React from 'react';
import Spinner from '../Spinner';

interface ConfirmationModalProps {
    isVisible: boolean;
    onConfirm: () => void;
    onCancel: () => void;
    message: string;
    isLoading: boolean;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
    isVisible,
    onConfirm,
    onCancel,
    message,
    isLoading,
}) => {
    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
            <div className="bg-white rounded-lg p-6 shadow-lg text-center">
                <p className="mb-4">{message}</p>
                {isLoading ? (  
                    <Spinner /> 
                ) : (
                    <div className="flex justify-center space-x-4">
                        <button
                            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                            onClick={onConfirm}  
                        >
                            Confirm
                        </button>
                        <button
                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                            onClick={onCancel}  
                        >
                            Cancel
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ConfirmationModal; 
