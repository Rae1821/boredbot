

document.getElementById('get-activity').addEventListener('click', function(){
  fetch("https://apis.scrimba.com/bored/api/activity")
  .then(response => response.json())
  .then (data => {
    console.log(data)
    document.getElementById('activity').innerHTML = data.activity;
    document.getElementById('title').textContent = "✨ PartyBot ✨";
    document.getElementById('body').classList.add('gradient');
  })
})