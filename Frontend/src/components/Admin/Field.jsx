import React, { useEffect, useRef, useState } from 'react';
import { FaRegEdit } from "react-icons/fa";
import { FaSave } from "react-icons/fa";
import { LuCloudUpload } from "react-icons/lu";
import { PostFunction } from '../../Utils/PostFunction'; 

export const Field = ({ name, position, level, email, phone, twitter, instagram, image, descrption, subtext, date, time, category, text, endpoint }) => {
  const rawFields = [
    { key: 'name', label: 'Name', value: name },
    { key: 'position', label: 'Position', value: position || descrption || subtext  },
    { key: 'level', label: 'Level', value: level || date },
    { key: 'email', label: 'Email', value: email || time },
    { key: 'phone', label: 'Phone', value: phone || category },
    { key: 'twitter', label: 'Twitter', value: twitter || text },
    { key: 'instagram', label: 'Instagram', value: instagram },
    { key: 'image', label: 'Image', value: image, isImage: true }
  ];

  const displayFields = rawFields.filter(field => field.value !== undefined);

  const [formData, setFormData] = useState(() => {
    const stored = localStorage.getItem(`tesa_${position}`);
    return stored ? JSON.parse(stored) : Object.fromEntries(rawFields.map(f => [f.key, f.value || ""]));
  });
  
  const [previewImage, setPreviewImage] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const inputRefs = useRef([]);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (image && typeof image === 'string' && image !== 'true' && image !== 'false') {
      setPreviewImage(image);
    }
  }, [image]);

  const handleChange = (key, value) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    const imageUrl = URL.createObjectURL(file);
    setPreviewImage(imageUrl);
    
    handleChange('image', file);
  };

  const triggerImageUpload = () => {
    if (editMode) {
      fileInputRef.current.click();
    }
  };

  const handleSave = async () => {
    try {
      const uploadData = new FormData();
      
      Object.entries(formData).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          uploadData.append(key, value);
        }
      });
      
      await PostFunction(`https://tesa-website.onrender.com/admin/${endpoint}`, uploadData);
      localStorage.setItem(`tesa_${formData.position}`, JSON.stringify(formData));
      setEditMode(false);
    } catch (error) {
      console.error("Saving failed:", error);
    }
  };

  const handleIconClick = () => {
    if (editMode) handleSave();
    else setEditMode(true);
  };

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

  const isValidImageUrl = (url) => {
    if (!url) return false;
    if (typeof url !== 'string') return false;
    if (url === 'true' || url === 'false') return false;
    return true;
  };

  return (
    <div className='w-full h-[50px] flex items-center before:absolute relative before:bottom-0 before:w-full before:h-[1px] before:bg-gradient-to-r before:from-[#007AFF] before:to-[#FA8F21]'>
      <div className='w-full h-full flex gap-2'>
      {displayFields.filter(field => !field.isImage).map((field, index) => (
          <input
            key={field.key}
            ref={(el) => inputRefs.current[index] = el}
            placeholder={field.label}
            value={formData[field.key] || ""}
            onChange={(e) => handleChange(field.key, e.target.value)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            disabled={!editMode}
            className=" px-2 flex-1 min-w-0 h-full bg-transparent text-ellipsis overflow-hidden whitespace-nowrap placeholder-gray-400"
          />
        ))}

        {displayFields.some(field => field.isImage) && (
          <div className={`flex-1 h-full flex items-center ${editMode ? " cursor-pointer" : "cursor-default"}`} onClick={triggerImageUpload}>
            {isValidImageUrl(previewImage) ? (
              <img 
                src={previewImage} 
                alt="Uploaded" 
                className="h-full w-[50px] rounded-full object-cover"
              />
            ) : (
              <LuCloudUpload className={`text-[20px] ${!editMode ? "text-[gray]":"text-black"}`} />
            )}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              disabled={!editMode}
              className="hidden"
            />
          </div>
        )}
        

      </div>

      <div
        className='w-[50px] h-full absolute top-0 right-0 flex items-center justify-center cursor-pointer text-black hover:text-blue-600'
        onClick={handleIconClick}
      >
        {editMode ? <FaSave /> : <FaRegEdit />}
      </div>
    </div>
  );
};