import React from 'react'

function SubMenu() {

  const items =["Channels","Categories","A-Z","TV Guide","Watchlist"]
  return (
    <div className='border-b-[0.1px] border-zinc-50/30 font-reithl font-light'>
      <div className='flex justify-between text-white px-4 lg:w-10/12 mx-auto my-4 '>
        <div className='w-1/2'>
          <div className='md:w-40 w-24'>
            <svg   className="fill-bbcpink hover:fill-white transition-all duration-300 cursor-pointer navigation__logo__svg" version="1" viewBox="0 0 605 107" xmlns="http://www.w3.org/2000/svg"><path d="M.022 34.586h22.003V106.3H.022zM108.188 9.069Q97.186.002 76.67 0H38.461v106.299h22.598V70.024h15.462q13.676 0 23.192-4.088 9.513-4.089 14.496-11.894 4.98-7.806 4.98-18.956 0-16.947-11.001-26.017m-17.47 38.877q-5.279 4.09-15.387 4.088H61.059V17.989H75.48q9.959.002 15.238 4.163 5.278 4.164 5.279 12.935-.001 8.772-5.279 12.859M156.058 0h-22.895v106.299h73.295V86.378h-50.4zm127.661 0H259.04a2036 2036 0 0 0-21.186 51.737 2073 2073 0 0 0-20.59 54.562h24.53q3.863-11.595 7.731-23.044h43.114a2164 2164 0 0 1 7.731 23.044h25.126a2963 2963 0 0 0-20.294-53.149A2913 2913 0 0 0 283.719 0m-27.652 64.225a1832 1832 0 0 1 15.016-41.033 4160 4160 0 0 1 7.507 20.294q3.792 10.335 7.36 20.739zm106.708-12.121c-4.362-7.631-21.508-44.273-25.571-52.103h-26.018l39.843 71.961V106.3h22.895V71.962L413.917.001h-25.423c-4.163 7.83-21.259 44.372-25.719 52.103m84.238 9h44.601v-19.03h-44.601V19.03h50.25V0h-73.145v106.299h75.97V87.27h-53.075zm144.253 23.415a1935 1935 0 0 0-13.232-21.186q9.215-4.013 14.199-11.447 4.98-7.432 4.98-17.989 0-16.352-11.224-25.126Q574.763.001 553.802 0h-38.804v106.299h22.598V67.645h18.287a1057 1057 0 0 1 22.151 38.654h26.315a1229 1229 0 0 0-13.083-21.78m-22.747-38.654q-5.502 3.792-16.056 3.791h-14.867V17.989h15.016q10.553.001 15.982 3.865 5.425 3.868 5.427 12.043-.002 8.178-5.502 11.968M0 0h22.025v18.15H0z" /></svg>

          </div>
        </div>
        <div className='md:flex  hidden justify-end space-x-10 w-full '>
          {items.map((item,index)=>{
            return(
              <span className='hover:text-bbcpink text-white transition-all duration-300 cursor-pointer' key={index}>{item}</span>
            )
          })}
        </div>
        <div className='font-reithm text-bbcpink hover:text-white cursor-pointer md:hidden'>Menu</div>
      </div>
    </div>
  )
}

export default SubMenu