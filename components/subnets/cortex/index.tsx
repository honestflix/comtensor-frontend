"use client"

import React, { useState } from 'react';
import axios from 'axios';
import Spinner from '../Spinner';


type FormEventHandler<T> = (event: React.FormEvent<T>) => void;

const Cortex = () => {

  const [inputValue, setInputValue] = useState('');

  const [responseurl, setResponseurl] = useState('');
  const [responseData, setResponseData] = useState('');
  const [revisedprompt, setResponseRevisePrompt] = useState('');

  const [loading, setLoading] = useState<boolean>(false);
  const [selectedMode, setSelectedMode] = useState<"textprompt" | "revisedprompt">("textprompt");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    console.log(inputValue);
  };

  const handleFormSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    setLoading(true);

    let apiData;
    if (selectedMode === 'textprompt') {
      apiData = {
        type: 'text',
        provider: 'OpenAI',
        prompt: inputValue,
      };
    } else if (selectedMode === 'revisedprompt') {
      apiData = {
        type: 'image',
        provider: 'OpenAI',
        prompt: inputValue,
      };
    }

    try {
      await axios.post(
        "https://api.comtensor.io/cortex",
        apiData,
        {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        }
      )
        .then(reply => {
          if (selectedMode === "textprompt") {
            const data = reply.data.response;
            setResponseData(data);
          } else if (selectedMode === "revisedprompt") {
            const revise = reply.data[0].completion.image_revised_prompt;
            const url = reply.data[0].completion.url;
            setResponseRevisePrompt(revise);
            setResponseurl(url);
          }
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
        <img src="images/subnets/subnet-18.webp" alt="Logo" className="w-60 h-60 rounded-full" />
      </div>
      <main className="flex flex-grow">
        <aside className="w-1/4 p-4 transparent mt-4">
          <ul className="space-y-2">
            <li>
              <button
                className={`w-full ${selectedMode === "textprompt" ? "bg-pink-900" : "bg-pink-600"
                  } text-white p-2 rounded`}
                onClick={() => setSelectedMode("textprompt")}
              >
                Text prompting
              </button>
            </li>
            <li>
              <button
                className={`w-full ${selectedMode === "revisedprompt" ? "bg-pink-900" : "bg-pink-600"
                  } text-white p-2 rounded`}
                onClick={() => setSelectedMode("revisedprompt")}
              >
                Image
              </button>
            </li>
          </ul>
        </aside>
        <form className="w-3/4 p-4" onSubmit={handleFormSubmit}>
          {selectedMode === "textprompt" ? (
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
          )}
          <br />
          <hr className='h-12' />
          <div className="justify-center items-center">
            {
              loading ? (<Spinner />) :
                (
                  <div className="mt-4">
                    {selectedMode === "textprompt" && (
                      <span className="text-black dark:text-white">{responseData}</span>
                    )}
                    {selectedMode === "revisedprompt" && (
                      <div>
                        <img src={responseurl} className="w-full rounded-sm" />
                        <span className="text-black dark:text-white">
                          Revised Prompt: {revisedprompt}
                        </span>
                      </div>
                    )}
                  </div>
                )
            }
          </div>
        </form>
      </main>
    </div >
  );
}

export default Cortex;