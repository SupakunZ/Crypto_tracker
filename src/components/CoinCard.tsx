import { CoinContext } from '@/app/context/CoinProvider'
import formatPriceChange from '@/app/helpers/formatPriceChange'
import priceFormatter from '@/app/helpers/priceFormatter'
import { Coin } from '@/app/types/CoinTypes'
import Image from 'next/image'
import React, { useContext } from 'react'

//React Icon
import { HiArrowSmUp as UpArrow } from 'react-icons/hi'
import { HiArrowSmDown as DownArrow } from 'react-icons/hi'

interface CoinCardProps {
  coin: Coin
}

export const CoinCard = ({ coin }: CoinCardProps) => {

  const { currency } = useContext(CoinContext)
  const isPriceChangePositive = coin.price_change_percentage_1h_in_currency > 0 // boolean type # price per 1h มากกว่า 0 ไหม
  const priceChangeColor = isPriceChangePositive // เงื่อนไขเปลี่ยนสี
    ? 'text-emerald-500' //มากกว่าสีเขียว
    : 'text-red-500' //น้อยกว่ามีแดง

  return (
    <>
      <div className="flex justify-between gap-4 p-4 bg-white border rounded-md shadow-sm border-slate-200">
        <button className="flex gap-4 text-left">
          <Image
            className="aspect-square"
            width={48}
            height={48}
            src={coin.image}
            alt={coin.name}
          />
          <div>
            <h2 className="font-medium">{coin.name}</h2>
            <span className="text-slate-400">{coin.symbol.toUpperCase()}</span>
          </div>
        </button>

        <div className="text-end">
          <h3 className="font-medium">
            {/* ใช้ func format ตัวเลขให้เป็นค่าเงินต่างๆ  */}
            {priceFormatter(coin.current_price, currency)}
          </h3>
          {/*เปลี่ยนสีตามเงื่อนไขราคา  */}
          <div className={`flex items-center justify-end ${priceChangeColor} `}>
            {isPriceChangePositive ? <UpArrow /> : <DownArrow />}
            <span>
              {formatPriceChange(coin.price_change_percentage_1h_in_currency)}%
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
