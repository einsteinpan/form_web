import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Typography,
  Tabs,
  TabsHeader,
  Tab,
  Switch,
  Tooltip,
  Button,
} from "@material-tailwind/react";
import {
  HomeIcon,
  ChatBubbleLeftEllipsisIcon,
  Cog6ToothIcon,
  PencilIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import 'flowbite';

export function Chatface() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const sendMessage = () => {
    if (inputText.trim()) {
      const newMessage = {
        text: inputText,
        timestamp: new Date().toLocaleTimeString(),
        sender: "Bonnie Green",
      };
      setMessages(prevMessages => [...prevMessages, newMessage]);
      setInputText('');
    }
  };

  return (
    <>
      <div className="relative mt-8 h-32 w-full overflow-hidden rounded-xl bg-cover	bg-center">
        <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
      </div>
      <Card className="mx-3 -mt-16 mb-6 lg:mx-4 border border-blue-gray-100">
        <CardBody className="p-9">
          {messages.map((message, index) => (
            <div key={index} className="flex items-start gap-2.5 mb-2">
              <img className="w-8 h-8 rounded-full" src="/img/bruce-mars.jpeg" alt="User image" />
              <div className="flex flex-col w-full max-w-[320px] p-4 bg-gray-100 rounded-xl">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold">{message.sender}</span>
                  <span className="text-sm">{message.timestamp}</span>
                </div>
                <p className="text-sm py-2">{message.text}</p>
              </div>
            </div>
          ))}

          <div className="flex items-center gap-2">
            <textarea
              value={inputText}
              onChange={handleInputChange}
              placeholder="Your Message"
              className="flex-1 rounded-md p-2 border border-gray-300"
            ></textarea>
            <button onClick={sendMessage} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Send
            </button>
          </div>
        </CardBody>
      </Card>
    </>
  );
}

export default Chatface;
