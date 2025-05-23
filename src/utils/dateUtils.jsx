import dayjs from "dayjs";
export const generateCalendarDays = (year, month) => {

  const firstDayOfMonth = dayjs(new Date(year, month, 1));
  const daysInMonth = firstDayOfMonth.daysInMonth();

  const firstDayWeekday = firstDayOfMonth.day();

  const prevMonth = dayjs(new Date(year, month, 1)).subtract(1, "month");
  const daysInPrevMonth = prevMonth.daysInMonth();


  const calendarDays = [];


  for (let i = 0; i < firstDayWeekday; i++) {
    const day = daysInPrevMonth - firstDayWeekday + i + 1;
    calendarDays.push({
      date: dayjs(new Date(year, month - 1, day)),
      isCurrentMonth: false,
      isToday: dayjs(new Date(year, month - 1, day)).isSame(dayjs(), "day"),
    });
  }

  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push({
      date: dayjs(new Date(year, month, i)),
      isCurrentMonth: true,
      isToday: dayjs(new Date(year, month, i)).isSame(dayjs(), "day"),
    });
  }
  const totalDaysToShow = 42; 
  const remainingDays = totalDaysToShow - calendarDays.length;

  for (let i = 1; i <= remainingDays; i++) {
    calendarDays.push({
      date: dayjs(new Date(year, month + 1, i)),
      isCurrentMonth: false,
      isToday: dayjs(new Date(year, month + 1, i)).isSame(dayjs(), "day"),
    });
  }

  return calendarDays;
};
export const formatEventTime = (time) => {
  return dayjs(`2023-01-01T${time}`).format("h:mm A");
};
