import React from 'react'

function Landing() {
  return (
    <div className='h-screen bg-grey'>
      <div className='flex'>
        <div className='w-1/2 text-black text-left p-20'>
          <div className='font-bold text-5xl'>
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
          <button className='p-4 my-4 mr-4 bg-[#1ea624] text-white text-xl font-bold rounded cursor-pointer hover:bg-[#4caf50]'>Get Chat ID</button>
          <div className='font-normal text-3xl pt-4 pb-2'>
            The Chat ID = 
          </div>
            <input type='text' name='chatid' className='p-2 rounded-2xl border-black border-[1px] border-solid w-3/4' readOnly='true'/>
        </div>
        <div className='w-1/2 text-black text-left p-20'>
        <div className='font-bold text-5xl'>
            Steps to <p className='bg-gradient-to-r from-green w-fit'>follow</p>
          </div>
          <div className='text-3xl font-normal pt-4'>
            Lorem ipsum dolor sit amet. Ut recusandae quisquam ut odio itaque ut nesciunt saepe est inventore obcaecati sed dolores suscipit et numquam animi. In omnis consequuntur et praesentium molestiae qui harum quis et dolor corrupti eos dolor repellendus.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing