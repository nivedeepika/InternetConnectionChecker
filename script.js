window.addEventListener("load",checkInternetConnection);
function checkInternetConnection(){
 const statusText=document.getElementById('statusText');
 const addressText=document.getElementById('addressText');
 const networkstrengthText=document.getElementById('networkstrengthText');

 statusText.textContent="Checking...";
 if(navigator.online){
    fetch("https://api.ipify.org/?format=json")
    .then((respone)=>respone.json())
    .then((data)=>{
        addressText.textContent=data.ip;
        statusText.textContent="Connected"
        const connection=navigator.connection;
        const networkstrength=connection ?connection.downlink+"Mbps":"Unknown";
        networkstrengthText.textContent=networkstrength;
    })

 }
 else{
    statusText.textContent="Disconnected";
    addressText.textContent="-";
    networkstrengthText.textContent="-";
 }

}