const MINUTES_IN_HOUR = 60;

const convertTimeToMinutes = (timeString) => {
  const timeParts = timeString.split(':');
  const hours = parseInt(timeParts[0], 10);
  const minutes = parseInt(timeParts[1], 10);

  return hours * MINUTES_IN_HOUR + minutes;
};

const checkMeetingTime = (workStart, workEnd, meetingStart, meetingDuration) => {
  const workStartInMinutes = convertTimeToMinutes(workStart);
  const workEndInMinutes = convertTimeToMinutes(workEnd);

  const meetingStartInMinutes = convertTimeToMinutes(meetingStart);
  const meetingEndInMinutes = meetingStartInMinutes + meetingDuration;

  return meetingStartInMinutes >= workStartInMinutes && meetingEndInMinutes <= workEndInMinutes;
};

checkMeetingTime('08:00', '17:30', '14:00', 90);
