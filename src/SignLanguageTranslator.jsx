import React, { useState } from 'react';
import './SignLanguageTranslator.css';

const SignLanguageTranslator = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [translationResult, setTranslationResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleFileUpload = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleTranslate = async () => {
    if (!selectedFile) {
      alert('Please upload a file first.');
      return;
    }

    setIsLoading(true);

    // Simulate translation process
    setTimeout(() => {
      setTranslationResult('Hello World'); // This should be replaced with actual API integration
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="translator-container">
      <h1 className="translator-title">Sign Language Translator</h1>
      <p className="translator-description">Upload an image of sign language and translate it into text.</p>

      <input
        type="file"
        accept="image/*"
        onChange={handleFileUpload}
        className="file-input"
      />

      <div>
        <button
          onClick={handleTranslate}
          className="translate-button"
          disabled={isLoading}
        >
          {isLoading ? 'Translating...' : 'Translate'}
        </button>
      </div>

      {translationResult && (
        <div className="translation-result">
          <h2>Translation Result:</h2>
          <p>{translationResult}</p>
        </div>
      )}
    </div>
  );
};

export default SignLanguageTranslator;
