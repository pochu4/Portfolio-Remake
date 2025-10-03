const timeEl = document.getElementById("footer-time");

  function updateTime() {
    const options = {
      timeZone: "America/Vancouver",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false
    };
    const formatter = new Intl.DateTimeFormat("en-CA", options);
    timeEl.textContent = formatter.format(new Date());
  }

  updateTime();               
  setInterval(updateTime, 1000); 