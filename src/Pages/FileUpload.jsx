// import React, { useState } from 'react';
// import '../CSS/FileUpload.css';

// const FileUpload = () => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [dragActive, setDragActive] = useState(false);

//   // Handle file drop
//   const handleDrop = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setDragActive(false);

//     if (e.dataTransfer.files && e.dataTransfer.files[0]) {
//       setSelectedFile(e.dataTransfer.files[0]);
//     }
//   };

//   // Handle drag events
//   const handleDrag = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     if (e.type === 'dragenter' || e.type === 'dragover') {
//       setDragActive(true);
//     } else if (e.type === 'dragleave') {
//       setDragActive(false);
//     }
//   };

//   // Handle file selection
//   const handleFileSelect = (e) => {
//     if (e.target.files && e.target.files[0]) {
//       setSelectedFile(e.target.files[0]);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (selectedFile) {
//       console.log("File uploaded:", selectedFile.name);
//       alert(`File ${selectedFile.name} uploaded successfully.`);
//     } else {
//       alert("No file selected.");
//     }
//   };

//   return (
//     <div className="file-upload-container">
//       <form onSubmit={handleSubmit}>
//         <label
//           htmlFor="file-upload"
//           className={`file-upload ${dragActive ? 'active' : ''}`}
//           onDragEnter={handleDrag}
//           onDragLeave={handleDrag}
//           onDragOver={handleDrag}
//           onDrop={handleDrop}
//         >
//           <div className="upload-message">
//             {selectedFile ? (
//               <span>{selectedFile.name}</span>
//             ) : (
//               <>
//                 <p>Drag & drop your file here</p>
//                 <p>or</p>
//                 <button type="button" className="upload-button">Browse Files</button>
//               </>
//             )}
//           </div>
//           <input
//             type="file"
//             id="file-upload"
//             className="file-input"
//             onChange={handleFileSelect}
//           />
//         </label>
//         <button type="submit" className="submit-button">Upload File</button>
//       </form>
//     </div>
//   );
// };

// export default FileUpload;
import React, { useState } from 'react';
import '../CSS/FileUpload.css'; // Assume this contains styles for loading and other UI components

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Handle file drop
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setSelectedFile(e.dataTransfer.files[0]);
    }
  };

  // Handle drag events
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  // Handle file selection
  const handleFileSelect = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (selectedFile) {
      // Show loading animation
      setIsLoading(true);

      // Simulate file upload delay (e.g., 2 seconds)
      setTimeout(() => {
        // Hide loading animation
        setIsLoading(false);
        console.log("File uploaded:", selectedFile.name);
        alert(`File ${selectedFile.name} verified successfully.`);
      }, 3000); // 2 seconds delay for simulation
    } else {
      alert("No file selected.");
    }
  };

  return (
    <div className="file-upload-container">
      <form onSubmit={handleSubmit}>
        <label
          htmlFor="file-upload"
          className={`file-upload ${dragActive ? 'active' : ''}`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <div className="upload-message">
            {selectedFile ? (
              <span>{selectedFile.name}</span>
            ) : (
              <>
                <p>Drag & drop your file here</p>
                <p>or</p>
                <button type="button" className="upload-button">Browse Files</button>
              </>
            )}
          </div>
          <input
            type="file"
            id="file-upload"
            className="file-input"
            onChange={handleFileSelect}
          />
        </label>
        <button type="submit" className="submit-button" disabled={isLoading}>
          {isLoading ? 'Uploading...' : 'Upload File'}
        </button>
      </form>

      {/* Conditionally render the loading animation */}
      {isLoading && (
        <div className="loading-overlay">
          <div className="loading-spinner"></div>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
