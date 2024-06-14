'use client'
import Image from 'next/image'

import FeatImage01 from '@/public/images/features-03-image-01.png'
import Dropdown from '@/components/utils/dropdown'
import FeatImage02 from '@/public/images/features-03-image-02.png'
import FeatImage03 from '@/public/images/features-03-image-03.png'

import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'

import axios from 'axios'
import { useState, useEffect, ChangeEvent, DragEvent, FormEvent } from 'react';
export default function HealthcareForm() {
  const [dragOver, setDragOver] = useState(false);
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [disease, setDisease] = useState<string>('');
  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(false);
  };
  const reset = () => {
    setImagePreviewUrl(null);
    setFile(null);
    setDisease('');
  }
  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(false);
    const files = e.dataTransfer.files;
    if (files.length) {
      // Process the files here. For example, upload them.

      const file = files[0];

      // Create a URL for the dropped image file
      const fileUrl = URL.createObjectURL(file);
      setImagePreviewUrl(fileUrl);
      setFile(file);
      // You can call an upload function here
    }
  };

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  const uploadFile = async () => {
    console.log(file)
    if (file) {
      const formData = new FormData();
      formData.append('image', file); // Make sure 'image' matches the field expected by your backend
      console.log(formData)
      try {
        const response = await axios.post('https://api.comtensor.io/healthcare/', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        // Handle response here
        setDisease(response.data['result']);
      } catch (error) {
        // Handle error here
        console.error(error);
      }
    }
  };

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col items-center space-x-6 mt-[20px]">
        <div className="py-12 md:py-20 border-t border-gray-800 flex flex-col mx-auto">
          <div className="flex flex-col items-center max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <img src="/assets/subnet31.png" className="w-48 items-center justify-center rounded-full mt-4 sm:mt-4 md:mt-12 z-10" />
            <h2 className="font-bold text-[#95ADBD] opacity-100 font-[&#x27;Poppins&#x27;] 2xl:text-5xl xl:text-[112px] md:text-6xl text-3xl mt-12">Healthcare Assistant powered by ComTensor</h2>
            <p className="text-xl text-gray-400">Version 1.0.</p>
          </div>
          <div className='flex justify-center items-center space-x-20'>
            <div>
              {!imagePreviewUrl && (

                <div
                  onDragOver={handleDragOver}
                  className='flex'
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  style={{
                    border: dragOver ? '2px dashed green' : '2px dashed #999',
                    padding: '20px',
                    width: '350px',
                    height: '300px',
                    color: dragOver ? 'green' : '#999',
                    textAlign: 'center',
                    lineHeight: '180px',
                  }}
                >
                  <Button className='flex justify-center items-center'
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    startIcon={<CloudUploadIcon />}
                  >
                    Upload file
                    <VisuallyHiddenInput type="file" />
                  </Button>
                </div>
              )}
              {imagePreviewUrl && (
                <div style={{ marginTop: '20px' }} >
                  <img src={imagePreviewUrl} alt="Preview" style={{ width: '350px', height: '300px', }} />
                </div>
              )}
            </div>
            <div className='flex flex-col space-y-6'>
              <button className="bg-blue-500 hover:bg-blue-700 text-white items-center font-bold py-2 px-4 rounded w-[100px] h-[50px] flex" onClick={uploadFile} >
                Analyze
              </button>
              <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold items-center py-2 px-4 rounded w-[100px] h-[50px] flex" onClick={reset}>
                Reset
              </button>
            </div>
            <div>
              {disease && (
                <div className="text-2xl text-gray-400 max-w-xl">
                  {
                    disease === 'Not Finding' ? (
                      <span className=' text-red-500 '>Sorry, we couldn't find any diseases in the image.</span>
                    ) : (
                      <span>
                        You've been diagnosed with <span className=' text-red-500 '>{disease}</span>; rest assured, we're looking into the best care options.
                        {disease}
                      </span>
                    )
                  }
                </div>
              )}
            </div>
          </div>
          <div>
            <div className="w-full h-[500px] xl:h-[415px] md:h-[204px] h-[370px] flex flex-col items-center justify-evenly mb-4 mt-[100px]" style={{ backgroundColor: '#151719' }}>
              <div className="text-center flex items-center justify-center relative">
                <h1 className="font-bold text-[#95ADBD] opacity-10 font-[&#x27;Poppins&#x27;] 2xl:text-9xl xl:text-[112px] md:text-6xl text-3xl">What is the HealthCare?</h1>
                <h3 className="text-[#5d5dff] font-bold font-[&#x27;Poppins&#x27;] 2xl:text-7xl xl:text-[64px] md:text-4xl text-lg absolute">
                  What is the HealthCare?
                </h3>
              </div>
              <div className="text-white font-medium font-[&#x27;Poppins&#x27;] pb-12 xl:text-2xl md:text-lg text-sm">Comtensor Subnet 31- Healthcare Subnet is an AI-based medical system that can support disease diagnosis through medical image analysis.</div>
            </div>
            <div className="w-full mt-[20px] " style={{ backgroundColor: '#151719' }}>
              <div className="w-full pb-4 rounded-xl">
                <div className="z-10 w-full m-auto">
                  <div className="text-center flex items-center justify-center relative">
                    <h1 className="font-bold text-[#95ADBD] opacity-10 font-[&#x27;Poppins&#x27;] 2xl:text-9xl xl:text-[112px] md:text-6xl text-3xl">What is the</h1>
                    <h3 className="text-[#95ADBD] font-bold font-[&#x27;Poppins&#x27;] 2xl:text-7xl xl:text-6xl md:text-4xl text-lg absolute text-left md:pt-20 pt-6 md:pl-12 pl-6">
                      <span className="text-[#5d5dff]">Mission</span>
                    </h3>
                  </div>
                </div>
                <ul className="md:pt-28 pt-8 w-3/4 m-auto">
                  <li className="list-disc text-white font-medium font-[&#x27;Poppins&#x27;] pb-12 xl:text-2xl md:text-lg text-sm"> Comtensor Subnet 31, known as Healthcare-Subnet, aims to revolutionize medical diagnostics using AI.</li>
                  <li className="list-disc text-white font-medium font-[&#x27;Poppins&#x27;] pb-12 xl:text-2xl md:text-lg text-sm"> We focus on strengthening disease diagnosis through medical image analysis and aim to evolve into an AI-based comprehensive healthcare system.</li>
                  <li className="list-disc text-white font-medium font-[&#x27;Poppins&#x27;] pb-12 xl:text-2xl md:text-lg text-sm"> Subnet emphasizes collaboration with medical experts and data scientists and is currently developing a user-friendly mobile app that will provide easy access to AI-based diagnostics.</li>
                  <li className="list-disc text-white font-medium font-[&#x27;Poppins&#x27;] pb-12 xl:text-2xl md:text-lg text-sm"> The long-term vision includes expanding diagnostic capabilities and integrating advanced patient data analytics technologies for a global AI-based healthcare system.</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
