const now = new Date();
const futureDate = addDays(now, 5);
const date1 = new Date(2023, 0, 1);
const date2 = new Date(2023, 0, 2);

console.log(isBefore(date1, date2)); // true
console.log(isAfter(date2, date1));  // true
console.log(format(now, 'yyyy-MM-dd HH:mm:ss')); // Exemple de formatage

const dates = [
new Date(2023, 0, 1),
new Date(2023, 0, 2),
new Date(2023, 0, 8),
new Date(2023, 0, 15),
new Date(2023, 0, 22),
];

const groupedByWeek = dates.reduce((acc, date) => {
const start = startOfWeek(date, { weekStartsOn: 1 }); // La semaine commence le lundi
const end = endOfWeek(date, { weekStartsOn: 1 });
const key = `${format(start, 'yyyy-MM-dd')} - ${format(end, 'yyyy-MM-dd')}`;

if (!acc[key]) {
acc[key] = [];
}
acc[key].push(date);
return acc;
}, {});

console.log(groupedByWeek);
const datess = [
new Date(2023, 0, 1),
new Date(2023, 0, 15),
new Date(2023, 1, 1),
new Date(2023, 1, 15),
new Date(2023, 2, 1),
];

const groupedByMonth = datess.reduce((acc, date) => {
const start = startOfMonth(date);
const end = endOfMonth(date);
const key = `${format(start, 'yyyy-MM')} - ${format(end, 'yyyy-MM')}`;

if (!acc[key]) {
  acc[key] = [];
}
acc[key].push(date);
return acc;
}, {});

console.log(groupedByMonth);