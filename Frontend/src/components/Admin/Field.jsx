import React, { useEffect, useRef, useState } from 'react';
import { FaRegEdit } from "react-icons/fa";
import { LuCloudUpload } from "react-icons/lu";

export const Field = ({ name, position, level, email, phone, twitter, instagram, image, description, subtext, date, time, category }) => {
  const rawFields = [
    { value: name, type: 'text' },
    { value: position || description || subtext, type: 'text' },
    { value: level, type: 'text' },
    { value: email || date, type: 'text' },
    { value: phone || time, type: 'text' },
    { value: twitter || category, type: 'text' },
    { value: instagram, type: 'text' },
    { value: image, type: 'file' }
  ];

  const displayFields = rawFields.filter(field => field.value); // filter only truthy fields

  const [editMode, setEditMode] = useState(false);
  const inputRefs = useRef([]);

  const handleKeyDown = (e, index) => {
    const currentInput = inputRefs.current[index];

    if (e.key === "Enter") {
      e.preventDefault();
      const nextInput = inputRefs.current[index + 1];
      if (nextInput) nextInput.focus();
    } else if (e.key === "Backspace") {
      if (currentInput && currentInput.value === "") {
        const prevInput = inputRefs.current[index - 1];
        if (prevInput) prevInput.focus();
      }
    }
  };

  useEffect(() => {
    if (editMode && inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, [editMode]);

  return (
    <div className='w-full h-[50px] flex items-center before:absolute relative before:bottom-0 before:w-full before:h-[1px] before:bg-gradient-to-r before:from-[#007AFF] before:to-[#FA8F21]'>
      <div className='w-full h-full flex gap-2'>
        {
          displayFields.map((field, index) => {
            if (field.type === 'file') {
              return (
                <div key={index} className="flex items-center relative flex-1 min-w-[0px]">
                  <input
                    type="file"
                    ref={(el) => inputRefs.current[index] = el}
                    disabled={!editMode}
                    className="absolute w-full h-full opacity-0 cursor-pointer"
                  />
                  <button
                    type="button"
                    onClick={() => inputRefs.current[index]?.click()}
                    disabled={!editMode}
                    className={`text-black relative ${editMode ? 'hover:text-blue-600 cursor-pointer' : 'text-gray-400'} p-1`}
                  >
                    <LuCloudUpload className="w-5 h-5" />
                  </button>
                </div>
              );
            }

            return (
              <input
                key={index}
                type="text"
                ref={(el) => inputRefs.current[index] = el}
                disabled={!editMode}
                placeholder={field.value}
                className='text-black flex-1 min-w-0 px-4 text-ellipsis whitespace-nowrap overflow-hidden'
                onKeyDown={(e) => handleKeyDown(e, index)}
              />
            );
          })
        }
      </div>

      <div
        className='w-[50px] h-full absolute top-0 right-0 flex items-center justify-center cursor-pointer text-black hover:text-blue-600'
        onClick={() => setEditMode(!editMode)}
      >
        <FaRegEdit />
      </div>
    </div>
  );
};
