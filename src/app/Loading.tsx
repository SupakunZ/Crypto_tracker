import React from 'react'
import { Skeleton } from "@nextui-org/skeleton";

export const Loading = () => {
  return (
    <div className='grid gap-2 mx-auto sm:max-w-md mb-2'>
      <div className="flex items-center justify-between p-4 space-y-2 border rounded-md shadow-sm border-slate-200">
        <div className="w-[14.8rem] h-full bg-slate-300 rounded-lg">
          <Skeleton className="rounded-lg">
            <div className="w-full h-100" />
          </Skeleton>
        </div>
        <div className="w-12 aspect-square bg-slate-300 rounded-lg">
          <Skeleton className="rounded-lg">
            <div className="w-full h-100" />
          </Skeleton>
        </div>
      </div>
    </div>
  )
}
