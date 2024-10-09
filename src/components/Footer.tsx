import React from 'react'

export const Footer = () => {
  return (
    <footer className="py-4 mt-auto text-sm text-center border-t text-slate-400 border-[#989898]">
      <p className="mx-2">
        CryptoTracker © {new Date().getFullYear()}{' '}  {/* Update Date*/}
        <a
          href="https://github.com/SupakunZ"
          target="_blank"
          rel="author"
        >
          by Supakun Thata
        </a>
      </p>
    </footer>
  )
}
