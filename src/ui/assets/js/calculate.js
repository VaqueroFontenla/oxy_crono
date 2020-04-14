import moment from "moment";

export const calculate = (data) => {
  const calculateData = data.map((item, key) => {
    //Calculate Duration
    const hoursDuration = parseInt((item.press * item.volume) / item.flow / 60);
    const minutesDuration = ((item.press * item.volume) / item.flow) % 60;
    const duration = moment({
      hour: hoursDuration,
      minute: minutesDuration,
    }).format("HH:mm");

    //Calculate End Hour
    const endHour = moment(item.start)
      .add(hoursDuration, "hours")
      .add(minutesDuration, "minutes");
    const formattedEndHour = endHour.format("HH:mm");

    return {
      ...item,
      start: moment(item.start).format("HH:mm"),
      duration: duration,
      finish: formattedEndHour,
      remaining: endHour,
    };
  });

  return calculateData
};
