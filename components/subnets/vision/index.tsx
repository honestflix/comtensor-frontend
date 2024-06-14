"use client"

import React, { useState } from 'react';
import axios from 'axios';
import Spinner from '../Spinner';


type FormEventHandler<T> = (event: React.FormEvent<T>) => void;

const Vison = () => {

  const [uploadedImageBuffer, setUploadedImageBuffer] = useState<ArrayBuffer | null>(null);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState('');
  const [responseData, setResponseData] = useState('');
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedMode, setSelectedMode] = useState<"txt2img" | "img2img">("txt2img");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        if (e.target) {
          const result = e.target.result as ArrayBuffer;
          setUploadedImageBuffer(result); // Store the buffer data
        }
      };

      reader.readAsArrayBuffer(file); // Read the file as a buffer
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    console.log(inputValue);
  };

  const handleFormSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    setLoading(true);

    let apiData;
    if (selectedMode === 'txt2img') {
      apiData = {
        type: 'txt2img',
        prompt: inputValue,
      };
    } else if (selectedMode === 'img2img') {
      const base64Image = Buffer.from(uploadedImageBuffer!).toString("base64");
      apiData = {
        type: 'img2img',
        prompt: inputValue,
        init_image : base64Image
      };
    }

    try {
      await axios.post(
        'https://api.comtensor.io/vision/',
        apiData,
        {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        }
      )
        .then(response => {
          const data = response.data.signed_urls;
          setResponseData(data);
          setLoading(false);
        })
        .catch(error => {
          setLoading(false);
          console.error('Error sending POST request:', error);
        });

    } catch (error) {
      setLoading(false);
      console.error('Error sending POST request:', error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col transparent">
      <div className="flex items-center transparent justify-center mt-12">
        <img src="images/subnets/subnet-19.webp" alt="Logo" className="w-60 h-60 rounded-full" />
      </div>
      <main className="flex flex-grow">
        <aside className="w-1/4 p-4 transparent mt-12 text-white dark:text">
          <ul className="space-y-2">
            <li>
              <button
                className={`w-full ${selectedMode === "txt2img" ? "bg-pink-900" : "bg-pink-600"
                  } text-white p-2 rounded`}
                onClick={() => setSelectedMode("txt2img")}
              >
                Text to Image
              </button>
            </li>
            <li>
              <button
                className={`w-full ${selectedMode === "img2img" ? "bg-pink-900" : "bg-pink-600"
                  } text-white p-2 rounded`}
                onClick={() => setSelectedMode("img2img")}
              >
                Image to Image
              </button>
            </li>
          </ul>
        </aside>
        <form className="w-3/4 p-4" onSubmit={handleFormSubmit}>
          <h2 className="font-bold text-lg dark:text-white dark:text-black">
            {selectedMode === "txt2img" ? "Text to Image" : "Image to Image"}
          </h2>
          {selectedMode === "txt2img" ? (
            <div className="grid grid-cols-1 gap-4">
              <div className="flex flex-row mt-4 text-black dark:text-white space-x-12">
                <input
                  id="prompt"
                  type="text"
                  onChange={handleInputChange}
                  className="w-3/5 px-4 py-4 rounded-xl bg-gray-100 text-black border"
                />
                <button
                  type="submit"
                  className="px-2 py-4 w-1/4 rounded-xl bg-pink-800 text-white hover:bg-pink-700"
                >
                  Generate
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col space-y-4">
              <div className="mt-4 text-black dark:text-white space-x-12">
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="w-full px-4 py-4 rounded-xl transparent text-black border"
                />
              </div>
              <div className="mt-4 text-black dark:text-black space-x-12">
                <input
                  id="prompt"
                  type="text"
                  onChange={handleInputChange}
                  className="w-full py-4 rounded-xl transparent text-black border bg-gray-100"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="px-2 py-4 w-1/4 rounded-xl bg-pink-800 text-white hover:bg-pink-700"
                >
                  Generate
                </button>
              </div>
            </div>
          )}
          <br />
          <h2 className="text-lg font-bold mb-4 text-white px-8 dark:text-black">Result Image</h2>
          <div className="justify-center items-center">
            {
              loading ? (<Spinner />) :
                (
                  <img src={responseData} className='w-3/5 rounded-sm ring-1' />
                )
            }
          </div>
        </form>
      </main>
    </div >
  );
}

export default Vison;