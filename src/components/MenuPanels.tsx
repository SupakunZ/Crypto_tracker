'use client'

import React, { useContext } from 'react'
import { TabPanel, TabPanels } from '@headlessui/react'
import { TrendingCoinCard } from './TrendingCoinCard'
import { CoinContext } from '@/app/context/CoinProvider'
import { Coin, TrendingCoin } from '@/app/types/CoinTypes'
import { CoinCard } from './CoinCard'
import { Loading } from '@/app/Loading'


export const MenuPanels = () => {

  const { data, status } = useContext(CoinContext)

  const refreshPage = (): void => {
    window.location.reload()
  }

  if (status === 'error')
    return (
      <div className="space-y-2 text-center">
        <div>Oops! Something went wrong...</div>
        <button
          onClick={refreshPage}
          className="px-2 py-1 font-medium transition-colors bg-white border rounded-md shadow-sm border-slate-200 hover:text-emerald-500"
        >
          Try Again
        </button>
      </div>
    )

  if (status === 'pending') return (
    Array(15).fill(null).map((d, i) => <Loading key={i} />)
  )

  return (
    <TabPanels>
      {/* Trending Page */}
      <TabPanel className='grid gap-2 mx-auto sm:max-w-md'>
        {data.trending.map((coin: TrendingCoin, index) => (
          <TrendingCoinCard key={coin.id} coin={coin} ranking={index + 1} />
        ))}
      </TabPanel>
      {/* Cryptocurrencies Page */}
      <TabPanel className='grid grid-cols-2 gap-2 mx-auto sm:grid-cols-2'>
        {data.coins.map((coin: Coin) => (
          <CoinCard key={coin.id} coin={coin} />
        ))}
      </TabPanel>
    </TabPanels>
  )
}
