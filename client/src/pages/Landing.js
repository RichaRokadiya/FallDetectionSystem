import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Landing() {

  const navigate = useNavigate();
  const url = 'http://localhost:8001';

  const [token, setToken] = useState("");
  const [chatID, setChatID] = useState("");

  const handleToken = (e) => {
    setToken(e.target.value);
  };

  const handleGetChatID = async (e) => {
    e.preventDefault();
    console.log('Clicked');
    if(!token) {
      console.log("Enter a valid token");
      return;
    }
    try {
      const resChatId = await getChatID(token);
      if(resChatId === "") {
        alert("NO RESPONSE RECEIVED");
        setChatID("");
        return;
      }
      console.log(resChatId)
      setChatID(resChatId)
      const response = await axios.post(`${url}/token`, {chatId: resChatId, token});
      console.log(response.data);
      // setToken("");
      if(response.data.data) {
        alert('Entered successfully');
      }
    } catch (error) {
      // setToken("");
    }
  }
  
  const getChatID = async (chatId) => {
    try {
      const response = await axios.get(`https://api.telegram.org/bot${chatId}/getUpdates`);
      // console.log(response.data);
      if(response.data.ok === true) {
        return response.data.result[0].message.chat.id;
      }
      else {
        console.log("API response fail case")
    return "";
      }
    } catch (error) {
      console.log(error.message);
  return "";
    }
  };

    return (
    <div className='h-screen bg-grey'>
      <div className='flex'>
        <div className='w-1/2 text-black text-left p-20'>
          <form>
            <div className='font-bold text-5xl leading-normal'>
              Life changing automation of <p className='bg-gradient-to-r from-purple w-fit'>healthcare</p>
            </div>
            <div className='text-4xl font-semibold pt-4 underline'>
              Get Telegram Chat ID 
            </div>
            <div className='font-normal text-3xl pt-4 pb-2'>
              HTTP API Token
            </div>
            <input type='text' name='apitoken' className='p-2 rounded-2xl border-black border-[1px] border-solid w-3/4' placeholder='Your BOT API Token Here. (XXX:YYYYYYY)'
              value={token}
              onChange={handleToken}
            />
            <br />
            <button className='p-4 my-4 mr-4 bg-[#1ea624] text-white text-xl font-bold rounded cursor-pointer hover:bg-[#4caf50]' onClick={handleGetChatID}>Get Chat ID</button>
            <div className='font-normal text-3xl pt-4 pb-2'>
              The Chat ID = 
            </div>
              <input type='text' name='chatid' value={chatID} className='p-2 rounded-2xl border-black border-[1px] border-solid w-3/4' readOnly='true'/>
          </form>
        </div>
        <div className='w-1/2 text-black text-left p-20'>
        <div className='font-bold text-5xl leading-normal'>
            Steps to <p className='bg-gradient-to-r from-green w-fit'>follow</p>
          </div>
          <div className='text-2xl font-normal pt-2'>
            1. Install Telegram.<br />
            2. Create a Telegram account or log in to your existing account.<br />
            3. Find the "BotFather" bot on Telegram and start a conversation with it.<br />
            4. Type "/newbot" command to create a new bot and follow the instructions provided by the BotFather to give your bot a name and username.<br />
            5. Once you have created the bot, BotFather will provide you with a bot token. Keep this token secure as it is required to access the bot's API.<br />
            6. Now put this token in the text box on the left.<br />
            7. Send a message to this bot by clicking on the link given after the bot token and type "/start" command.<br />
            8. Then type Hello.<br />
            9. Then, here on the website, click on the "Get Chat ID" button.<br />
            10. It will display the chat ID and you are all set to go!<br />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing