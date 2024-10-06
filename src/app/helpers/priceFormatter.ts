// **function format ตัวเลขให้เป็ค่าเงินต่างๆ**
export default function priceFormatter(value: number, currency: string) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency
  }).format(value)
}