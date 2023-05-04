import React from 'react'

function Landing() {
  const getChatID = () => {
    console.log('Clicked');
  }
  return (
    <div className='h-screen bg-grey'>
      <div className='flex'>
        <div className='w-1/2 text-black text-left p-20'>
          <div className='font-bold text-5xl leading-normal'>
            Life changing automation of <p className='bg-gradient-to-r from-purple w-fit'>healthcare</p>
          </div>
          <div className='text-4xl font-semibold pt-4 underline'>
            Get Telegram Chat ID 
          </div>
          <div className='font-normal text-3xl pt-4 pb-2'>
            HTTP API Token
          </div>
          <input type='text' name='apitoken' className='p-2 rounded-2xl border-black border-[1px] border-solid w-3/4' placeholder='Your BOT API Token Here. (XXX:YYYYYYY)'/>
          <br />
          <button className='p-4 my-4 mr-4 bg-[#1ea624] text-white text-xl font-bold rounded cursor-pointer hover:bg-[#4caf50]' onClick={getChatID}>Get Chat ID</button>
          <div className='font-normal text-3xl pt-4 pb-2'>
            The Chat ID = 
          </div>
            <input type='text' name='chatid' className='p-2 rounded-2xl border-black border-[1px] border-solid w-3/4' readOnly='true'/>
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