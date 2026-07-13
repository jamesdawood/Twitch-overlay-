function updateTime(){
 document.getElementById('time').textContent=new Date().toLocaleTimeString('de-DE',{hour12:false});
}
setInterval(updateTime,1000); updateTime();

fetch('https://api.open-meteo.com/v1/forecast?latitude=42.3314&longitude=-83.0458&current=temperature_2m,weather_code')
.then(r=>r.json())
.then(d=>{
 document.getElementById('weather').textContent='🌡️ '+d.current.temperature_2m+'°C | Detroit Wetter aktuell';
})
.catch(()=>document.getElementById('weather').textContent='🌤️ Wetter nicht verfügbar');