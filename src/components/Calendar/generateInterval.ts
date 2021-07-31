import { eachDayOfInterval, format } from "date-fns";

import theme from "../../styles/theme";
import { DayProps, MarkedDateProps } from ".";
import { getPlatformDate } from "../../utils/getPlatformDate";

const { main, main_light } = theme.colors;

type CalendarDateColorParams = {
  start: DayProps;
  end: DayProps;
  date: string;
};

function isEqualDate(startDate: string, endDate: string, date: string) {
  return startDate === date || endDate === date;
}

function getCalendarDateColors({ start, end, date }: CalendarDateColorParams) {
  const { dateString: startDateString } = start;
  const { dateString: endDateString } = end;
  const isEqual = isEqualDate(startDateString, endDateString, date);
  return {
    [date]: {
      color: isEqual ? main : main_light,
      textColor: isEqual ? main_light : main,
    },
  };
}

export function getIntervalBetweenDates(start: DayProps, end: DayProps) {
  let interval: MarkedDateProps = {};

  const intervalDates = eachDayOfInterval({
    start: new Date(start.timestamp),
    end: new Date(end.timestamp),
  });

  intervalDates.forEach((date) => {
    const formattedDate = format(getPlatformDate(date), "yyyy-MM-dd");

    interval = {
      ...interval,
      ...getCalendarDateColors({ start, end, date: formattedDate }),
    };
  });

  return interval;
}
