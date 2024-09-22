export default function Timer(time: number) {
  const timestamp = `${time}`;
  // Create a Date object from the ISO string
  const date = new Date(timestamp);

  // Get the number of milliseconds since the Unix epoch
  const milliseconds = date.getTime();

  // Convert milliseconds to seconds
  const seconds = Math.floor(milliseconds / 1000);
  const createdTime = seconds;
  const expiryTime = createdTime + 24 * 60 * 60 * 2;
  const currentTime = Math.floor(new Date().getTime() / 1000);
  //   console.log(expiryTime);
  const remainingTime = expiryTime - currentTime;

  // console.log(remainingTime);

  const hours = Math.floor((remainingTime % 86400) / 3600);
  const minutes = Math.floor((remainingTime % 3600) / 60);
  const remainingSeconds = Math.floor(remainingTime % 60);
  const exceeded = remainingTime < 0 ? true : false;
  const days = Math.floor(remainingTime / 86400);

  return {
    days,
    hours,
    minutes,
    seconds: remainingSeconds,
    exceeded,
  };
}
