const clockElement = document.getElementById('clock');
const timezoneSelect = document.getElementById('timezoneSelect');
function updateClock() {
    const timeZone= timezoneSelect.value;
    const now =new Date();
    const options = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: timeZone,
        hour12: false
    };
    const timeString = now.toLocaleTimeString('en-GB', options);
    clockElement.textContent = timeString;
}
timezoneSelect.addEventListener('change', updateClock);
setInterval(updateClock, 1000);
updateClock();