export default function getLast7DaysDates(): string[] {
  var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  var currentDay = days[(new Date()).getDay()] //วันนี้ Sun-Sat 
  days = days.reverse(); // สลับค่าให้ arrays
  var x = days.indexOf(currentDay) // ตัวเลขวันั้น
  var daysLastSeven = days.slice(x).concat(days.slice(0, x)) //ชื่อ วันนั้น + วันก่อนหน้า

  return daysLastSeven
}
