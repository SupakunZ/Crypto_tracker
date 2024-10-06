'use client'

import { ReactNode, useState, createContext } from "react";
import { useQuery } from '@tanstack/react-query'

import {
  CoinContextType, // Type ของ value ที่ Store ส่งออก
  CoinState,
  Currencies,
  Coin,
  TrendingCoin
} from '../types/CoinTypes'
import axios from "axios";

// Create Store
export const CoinContext = createContext<CoinContextType>(null!) //type ข้อมูลที่ส่งออก

// Type ของ Provider
interface CoinProviderProps {
  children: ReactNode
}


export default function CoinProvider({ children }: CoinProviderProps) {
  const [currency, setCurrency] = useState<Currencies>('USD')
  const [trending, setTrending] = useState<TrendingCoin[]>([])
  const [coins, setCoins] = useState<Coin[]>([])

  // Trending Coin
  const TRENDING_API_URL = 'https://api.coingecko.com/api/v3/search/trending'

  // Coins Data
  const COINS_API_URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h&locale=en`

  //React Query # 1.Fetch TrendingData
  const trendingQuery = useQuery({
    queryKey: ['trending'],
    queryFn: () =>
      axios(TRENDING_API_URL).then((res) => {
        const data = res.data.coins.map((coin: { item: TrendingCoin }) => ({ ...coin.item })) // สร้าง map Array ใหม่เอาแค่ค่าที่อยู่ใน item
        setTrending(data)
      })
  })

  //React Query # 2.Fetch CoinsData
  const { status } = useQuery({
    queryKey: ['coins', trendingQuery, currency], //**จะดึงค่าใหม่เมื่อ currency เปลี่ยนแปลง**
    queryFn: () =>
      axios(COINS_API_URL).then((res) => {
        const data = res.data
        setCoins(data)
      })
  })

  //Update Nation
  const updateCurrency = (currency: Currencies) => {
    setCurrency(currency)
  }

  console.log(coins)
  const data: CoinState = {
    trending,
    coins
  }

  return (
    <CoinContext.Provider value={{ data, status, currency, updateCurrency }}>
      {children}
    </CoinContext.Provider>
  )

}