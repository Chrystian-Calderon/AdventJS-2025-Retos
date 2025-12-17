/**
  * @param {Array<Object>} data - The data to draw the table
  * @param {string} sortBy - The field to sort the table
  * @returns {string}
  */
function drawTable(data, sortBy) {
  const createComparator = (sortBy) => {
    return (a, b) => {
      const valueA = a[sortBy];
      const valueB = b[sortBy];

      if (typeof valueA === 'number' && typeof valueB === 'number') {
        return valueA - valueB;
      }

      return String(valueA).localeCompare(String(valueB));
    };
  };

  const computeColWidths = (headers, rows) => {
    return headers.map((header) => Math.max(...rows.map((row) => String(row[header]).length)));
  };

  const buildLine = (widths) => {
    return '+' + widths.map((width) => '-'.repeat(width + 2)).join('+') + '+';
  };

  const buildRow = (headers, widths, row) => {
    return (
      '|' +
      headers
        .map((header, i) => ' ' + String(row[header]).padEnd(widths[i]) + ' ')
        .join('|') +
      '|\n'
    );
  };

  const comparator = createComparator(sortBy);
  const headers = Object.keys(data[0]);

  data.sort(comparator);

  const colWidths = computeColWidths(headers, data);
  const line = buildLine(colWidths);
  const drawRow = (row) => buildRow(headers, colWidths, row);

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const headerRow = headers.reduce((acc, header, index) => {
    acc[header] = alphabet[index];
    return acc;
  }, {});

  let table = line + '\n';
  table += drawRow(headerRow);
  table += line + '\n';

  data.forEach((row) => {
    table += drawRow(row);
  });

  table += line;
  return table;
}

console.log(drawTable(
  [
    { name: 'Charlie', city: 'New York' },
    { name: 'Alice', city: 'London' },
    { name: 'Bob', city: 'Paris' }
  ],
  'name'
))
// +---------+----------+
// | A       | B        |
// +---------+----------+
// | Alice   | London   |
// | Bob     | Paris    |
// | Charlie | New York |
// +---------+----------+

console.log(drawTable(
  [
    { gift: 'Book', quantity: 5 },
    { gift: 'Music CD', quantity: 1 },
    { gift: 'Doll', quantity: 10 }
  ],
  'quantity'
))
// +----------+----+
// | A        | B  |
// +----------+----+
// | Music CD | 1  |
// | Book     | 5  |
// | Doll     | 10 |
// +----------+----+