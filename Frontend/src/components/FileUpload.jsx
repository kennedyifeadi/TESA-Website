import React, { useState } from 'react';
import { AlertTriangle, X } from 'lucide-react';

export const FileUploadModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#000000db] bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 p-6 relative">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={20} />
        </button>

        <div className="text-center">
          <div className="mb-4">
            <AlertTriangle className="mx-auto text-amber-500" size={48} />
          </div>

          <h2 className="text-lg font-semibold text-gray-800 mb-3">
            We currently don't have the file
          </h2>

          <p className="text-gray-600 mb-6">
            All files are being uploaded, stay tuned.
          </p>

          <button
            onClick={() => setIsOpen(false)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};
