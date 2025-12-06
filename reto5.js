/**
 * @param {string} fromTime - The current time in elf format
 * @param {string} takeOffTime - The take off time in elf format
 * @returns {number} The time in seconds until take off
 */
function timeUntilTakeOff(fromTime, takeOffTime) {
  function parseElfTime(elfTime) {
    const [datePart, suffix] = elfTime.split(' ');
    const [dateStr, timeStr] = datePart.split('@');
    const [year, month, day] = dateStr.split('*').map(Number);
    let [hours, minutes, seconds] = timeStr.split('|').map(Number);
    return new Date(Date.UTC(year, month - 1, day, hours, minutes, seconds));
  }

  const from = parseElfTime(fromTime);
  const takeOff = parseElfTime(takeOffTime);

  const diffInSeconds = Math.floor((takeOff - from) / 1000);
  return diffInSeconds;
}

const takeoff = '2025*12*25@00|00|00 NP'

// desde el 24 diciembre 2025, 23:59:30, 30 segundos antes del despegue
console.log(timeUntilTakeOff('2025*12*24@23|59|30 NP', takeoff));
// 30

// justo en el momento exacto
console.log(timeUntilTakeOff('2025*12*25@00|00|00 NP', takeoff));
// 0

// 12 segundos después del despegue
console.log(timeUntilTakeOff('2025*12*25@00|00|12 NP', takeoff));
// -12