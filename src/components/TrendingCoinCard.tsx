import { TrendingCoin } from '@/app/types/CoinTypes'
import Image from 'next/image'

interface TrendingCoinCardProps {
  coin: TrendingCoin,
  ranking: number
}

export const TrendingCoinCard = ({ coin, ranking }: TrendingCoinCardProps) => {
  return (
    <div className="flex items-center justify-between p-4 space-y-2 bg-white border rounded-md shadow-sm border-slate-200">
      <div>
        <h2 className="space-x-1 font-medium">
          <span>#{ranking}</span>
          <span>{coin.name}</span>
          <span className="font-normal text-slate-400">
            {coin.symbol.toUpperCase()}
          </span>
        </h2>

        <h3 className="mt-2 font-mono">BTC {coin.price_btc}</h3>
      </div>

      <div className="w-12 aspect-square">
        <Image className="w-full" width={100} height={0} src={coin.large} alt={coin.name} />
      </div>
    </div>
  )
}
