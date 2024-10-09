import React from 'react'
import { Tab, TabList } from '@headlessui/react'

export const MenuTabs = () => {
  return (
    <TabList className='mb-4 flex flex-wrap items-center w-full px-3 py-2 mx-auto bg-white border rounded-md shadow-sm sm:items-stretch sm:flex-row sm:max-w-md justify-evenly sm:gap-2 border-slate-200'>
      <Tab className='py-2 font-medium transition-colors border-b-2 border-white px-1.5 ui-selected:outline-none ui-selected:text-[#533ce7] ui-selected:border-b-[#533ce7]'>Trending</Tab>
      <Tab className='py-2 font-medium transition-colors border-b-2 border-white px-1.5 ui-selected:outline-none ui-selected:text-[#533ce7] ui-selected:border-b-[#533ce7]'>Cryptocurrencies</Tab>
      <Tab className='py-2 font-medium transition-colors border-b-2 border-white px-1.5 ui-selected:outline-none ui-selected:text-[#533ce7] ui-selected:border-b-[#533ce7]'>Search</Tab>
    </TabList>
  )
}
