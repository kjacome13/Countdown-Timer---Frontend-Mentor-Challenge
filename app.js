const countdown = () => {
    const endDate = new Date("December 22, 2022 00:00:00").getTime();
    const now = new Date().getTime();
    const timeUntil = endDate - now;
    
    const seconds = 1000;
    const minutes = seconds*60;
    const hours = minutes*60;
    const days = hours*24;
    
    let timeInDays = Math.floor(timeUntil/days);
    let timeInHours = Math.floor((timeUntil%days)/hours);
    let timeInMinutes = Math.floor((timeUntil%hours)/minutes);
    let timeInSeconds = Math.floor((timeUntil%minutes)/seconds);
    
    timeInHours = timeInHours < 10 ? "0" + timeInHours: timeInHours;
    timeInMinutes = timeInMinutes < 10 ? "0" + timeInMinutes: timeInMinutes;
    timeInSeconds = timeInSeconds < 10 ? "0" + timeInSeconds: timeInSeconds;
    
    document.getElementById("days").innerHTML = timeInDays;
    document.getElementById("hours").innerHTML = timeInHours;
    document.getElementById("minutes").innerHTML = timeInMinutes;
    document.getElementById("seconds").innerHTML = timeInSeconds;
}

setInterval(countdown, 1000)