//format PriceChange per 1 h
export default function formatPriceChange(price: number): string {
  if (price > 0) {
    return price.toFixed(2).toString()
  }
  return price.toFixed(2).toString().slice(1)
}