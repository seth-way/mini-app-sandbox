export const NFL_WEEKS = Array.from({ length: 18 }, (_, index) => {
  const startDate = new Date("2024-09-11"); // starting date
  startDate.setDate(startDate.getDate() + index * 7); // increase by 7 days per week

  return {
    week: index + 1,
    date: startDate,
  };
});
