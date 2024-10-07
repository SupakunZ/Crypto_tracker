import { Fragment } from 'react'
import { TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { Coin } from '@/app/types/CoinTypes'
import { CoinChart } from './CoinChart'

interface Props {
  coin: Coin
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export const CoinDetailsModal = ({ coin, isOpen, setIsOpen }: Props) => {
  return (
    <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={() => setIsOpen(false)}>
      <TransitionChild
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-gray-950/25" />
      </TransitionChild>

      <div className="fixed inset-0 text-slate-700">
        <div className="grid min-h-full mx-2 place-items-center">
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <DialogPanel className="flex flex-col items-center w-full max-w-3xl gap-4 p-4 bg-white border rounded-md shadow-sm border-slate-200">
              <div className="flex justify-end w-full">
                <button
                  className="p-2 font-medium transition-opacity hover:opacity-60"
                  onClick={() => setIsOpen(false)}
                >
                  Close
                </button>
              </div>

              <div className="w-full max-w-xl">
                <CoinChart
                  name={coin.name}
                  data={coin.sparkline_in_7d.price}
                />
              </div>

              <table className="w-full max-w-xl overflow-x-auto text-end">
                <tbody className="text-sm divide-y divide-slate-200 whitespace-nowrap">
                  <tr>
                    <th className="py-4 font-medium text-start">
                      Market Cap Rank:
                    </th>
                    <td>#{coin.market_cap_rank}</td>
                  </tr>

                  <tr>
                    <th className="py-4 font-medium text-start">
                      {coin.name} Price:
                    </th>
                    <td>{coin.current_price}</td>
                  </tr>

                  <tr>
                    <th className="py-4 font-medium text-start">
                      Market Cap:
                    </th>
                    <td>{coin.market_cap}</td>
                  </tr>

                  <tr>
                    <th className="py-4 font-medium text-start">24h Low:</th>
                    <td>{coin.low_24h}</td>
                  </tr>

                  <tr>
                    <th className="py-4 font-medium text-start">24h High:</th>
                    <td>{coin.high_24h}</td>
                  </tr>
                </tbody>
              </table>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  )
}
