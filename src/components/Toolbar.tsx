'use client'

import { CoinContext } from '@/app/context/CoinProvider'
import { Currencies } from '@/app/types/CoinTypes'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { useContext, useState } from 'react'
import React from 'react'

export const Toolbar = () => {

  const { currency, updateCurrency } = useContext(CoinContext)
  const currencie: Currencies[] = ['USD', 'THB']

  return (
    <nav className='flex justify-end w-full max-w-4xl gap-4 p-2 mx-auto font-medium'>
      <Listbox value={currency} onChange={updateCurrency}>
        <ListboxButton className='px-2 bg-white border rounded-md shadow-sm py-0.5 border-slate-200 text-emerald-500'>
          {currency}
        </ListboxButton>
        <ListboxOptions anchor="bottom" className='px-2 mt-1 overflow-auto bg-white border rounded-md shadow-sm cursor-pointer select-none py-0.5 border-slate-200 list-none'>
          {currencie.map((currency, index) => (
            <ListboxOption key={index} value={currency} className="data-[focus]:bg-blue-100 font-medium">
              {({ selected }) => (
                <li className={selected ? 'hidden' : ''}>{currency}</li>
              )}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </nav>
  )
}
