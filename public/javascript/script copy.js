const neutralRow = document.getElementsByClassName("neutral")
const angryRow = document.getElementsByClassName("angry")
const sadRow = document.getElementsByClassName("sad")
const fearRow = document.getElementsByClassName("fear")
const happyRow = document.getElementsByClassName("happy")
const deleteNeutral = document.getElementById("del-neu")
const deleteAngry = document.getElementById("del-ang")
const deleteSad = document.getElementById("del-sad")
const deleteFear = document.getElementById("del-fea")
const deleteHappy = document.getElementById("del-hap")
const stopNeutral = document.getElementById("stop-neu")
const stopAngry = document.getElementById("stop-ang")
const stopSad = document.getElementById("stop-sad")
const stopFear = document.getElementById("stop-fea")
const stopHappy = document.getElementById("stop-hap")
const recordNeutral = document.getElementById("rec-neu")
const recordAngry =  document.getElementById("rec-ang")
const recordSad = document.getElementById("rec-sad")
const recordFear =  document.getElementById("rec-fea")
const recordHappy =  document.getElementById("rec-hap")
const sub = document.getElementById("submit")
let cont = document.getElementsByClassName("content")
cont = cont[0]
let neutralBlob = ""
let angryBlob = ""
let sadBlob = ""
let fearBlob = ""
let happyBlob = ""




//Random videos:
const videos = ["1.mp4"];
const randomIndex = Math.floor(Math.random() * videos.length);
const randomVideo = videos[randomIndex];
const videoPlayer = document.getElementById("video-player");
videoPlayer.src = randomVideo;

function addRecord(selectedRow) {
  
  if (!(selectedRow[0].lastChild.className == "audio-bar")) {
    //console.log("djjd")
    //console.log(selectedRow[0].parentNode.lastChild)

  
 

  
    
    navigator.mediaDevices.getUserMedia({ audio: true })
    .then(stream => {
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.start();
    
      const audioChunks = [];
      mediaRecorder.addEventListener("dataavailable", event => {
        audioChunks.push(event.data);
      });
    
      mediaRecorder.addEventListener("stop", () => {
        if (selectedRow[0].className == "neutral"){
          neutralBlob = new Blob(audioChunks,  { type: "audio/wav" });
          
          var audioUrl = URL.createObjectURL(neutralBlob);
          const audio = new Audio(audioUrl);
        }
        if (selectedRow[0].className == "angry"){
          angryBlob = new Blob(audioChunks ,  { type: "audio/wav" });
          
          var audioUrl = URL.createObjectURL(angryBlob);
          const audio = new Audio(audioUrl);
          
        }
        if (selectedRow[0].className == "sad"){
          sadBlob = new Blob(audioChunks ,  { type: "audio/wav" });
          
          var audioUrl = URL.createObjectURL(sadBlob);
          const audio = new Audio(audioUrl);
        }
        if (selectedRow[0].className == "fear"){
          fearBlob = new Blob(audioChunks ,  { type: "audio/wav" });
          
          var audioUrl = URL.createObjectURL(fearBlob);
          const audio = new Audio(audioUrl);
        }
        if (selectedRow[0].className == "happy"){
          happyBlob = new Blob(audioChunks);
          
          var audioUrl = URL.createObjectURL(happyBlob ,  { type: "audio/wav" });
          const audio = new Audio(audioUrl);
        }
        
        /*
        const audioBlob = new Blob(audioChunks);
        //console.log(audioBlob)
        const audioUrl = URL.createObjectURL(audioBlob);
        const audio = new Audio(audioUrl);
        
        if (selectedRow[0].className == "neutral"){
          neutralBlob = new Blob([audioBlob], {type: audioBlob.type});
        }
        if (selectedRow[0].className == "angry"){
          angryBlob = audioBlob.slice();
        }
        if (selectedRow[0].className == "sad"){
          sadBlob = audioBlob.slice();
        }
        if (selectedRow[0].className == "fear"){
          fearBlob = audioBlob.slice();
        }
        if (selectedRow[0].className == "happy"){
          happyBlob = audioBlob.slice();
        }
        */
        
        
        let audioBar = document.createElement("audio");
        audioBar.className = "audio-bar"
        audioBar.setAttribute('controls','controls')
        
        selectedRow[0].appendChild(audioBar)
        audioBar.innerHTML = '<source src="'+audioUrl+'"type="audio/wav"/>'
    
        
      });
      let nodes = selectedRow[0].childNodes[1]
      
      
      if (selectedRow[0].className == "neutral"){
        stopNeutral.addEventListener('click',function(){
          recordNeutral.style.color = "#360505"
          deleteNeutral.style.display = "block"
          stopNeutral.style.display = "none"
          recordNeutral.style.display = "none"
          
          mediaRecorder.stop()
          
          

          stream.getTracks() // get all tracks from the MediaStream
  .forEach( track => track.stop() ); // stop each of them
          
        })
      }
      if (selectedRow[0].className == "angry"){
        stopAngry.addEventListener('click',function(){
          recordAngry.style.color = "#360505"
          deleteAngry.style.display = "block"
          stopAngry.style.display = "none"
          recordAngry.style.display = "none"
          mediaRecorder.stop()
          
          stream.getTracks() // get all tracks from the MediaStream
          .forEach( track => track.stop() ); // stop each of them
        })
      }
      if (selectedRow[0].className == "sad"){
        stopSad.addEventListener('click',function(){
          recordSad.style.color = "#360505"
          deleteSad.style.display = "block"
          stopSad.style.display = "none"
          recordSad.style.display = "none"
          mediaRecorder.stop()
          
          stream.getTracks() // get all tracks from the MediaStream
          .forEach( track => track.stop() ); // stop each of them
        })
      }
      if (selectedRow[0].className == "fear"){
        stopFear.addEventListener('click',function(){
          recordFear.style.color = "#360505"
          deleteFear.style.display = "block"
          stopFear.style.display = "none"
          recordFear.style.display = "none"
          mediaRecorder.stop()

        
          stream.getTracks() // get all tracks from the MediaStream
          .forEach( track => track.stop() ); // stop each of them
        })
      }
      if (selectedRow[0].className == "happy"){
        stopHappy.addEventListener('click',function(){
          recordHappy.style.color = "#360505"
          deleteHappy.style.display = "block"
          stopHappy.style.display = "none"
          recordHappy.style.display = "none"
          mediaRecorder.stop()
          
          stream.getTracks() // get all tracks from the MediaStream
          .forEach( track => track.stop() ); // stop each of them
        })
      }
      //if(!(mediaRecorder.state == "inactive")){
      //nodes.addEventListener("click",()=>{
        //mediaRecorder.stop()
     // })
    //}
    
      
    });
   }
    }
    function deleteRecord(selectedInput){
      selectedInput.parentNode.lastChild.remove()
        
       


    }
    function stopRecord(selectedRow)
    {
      
      if (selectedRow.className == "neutral"){
        stopNeutral.addEventListener('click',function(){
          
          mediaRecorder.stop()
        })
      }
      if (selectedRow.className == "angry"){
        stopAngry.addEventListener('click',function(){
          mediaRecorder.stop()
        })
      }
      if (selectedRow.className == "sad"){
        stopSad.addEventListener('click',function(){
          mediaRecorder.stop()
        })
      }
      if (selectedRow.className == "fear"){
        stopFear.addEventListener('click',function(){
          mediaRecorder.stop()
        })
      }
      if (selectedRow.className == "happy"){
        stopHappy.addEventListener('click',function(){
          mediaRecorder.stop()
        })
      }
    }
   // document.getElementById("rec-neu").onclick = function() {addRecord(neutralRow)};
    //document.getElementById("rec-ang").onclick = function() {addRecord(angryRow)};
   // document.getElementById("rec-sad").onclick = function() {addRecord(sadlRow)};
    //document.getElementById("rec-fea").onclick = function() {addRecord(fearRow)};
    //document.getElementById("rec-hap").onclick = function() {addRecord(happyRow)};
    recordNeutral.addEventListener('click',function() { addRecord(neutralRow)})
    recordNeutral.addEventListener('click',function() { recordNeutral.style.color = "#013220" 
    stopNeutral.style.display = 'block'})
    recordAngry.addEventListener('click',function() { addRecord(angryRow)})
    recordAngry.addEventListener('click',function() { recordAngry.style.color = "#013220"
    stopAngry.style.display = 'block'})
    recordSad.addEventListener('click',function() { addRecord(sadRow)})
    recordSad.addEventListener('click',function() { recordSad.style.color = "#013220"
    stopSad.style.display = 'block' })
    recordFear.addEventListener('click',function() { addRecord(fearRow)})
    recordFear.addEventListener('click',function() { recordFear.style.color = "#013220" 
    stopFear.style.display = 'block'})
    recordHappy.addEventListener('click',function() { addRecord(happyRow)})
    recordHappy.addEventListener('click',function() { recordHappy.style.color = "#013220" 
    stopHappy.style.display = 'block'})
    deleteNeutral.addEventListener('click',function(){deleteRecord(deleteNeutral)})
    deleteNeutral.addEventListener('click',function(){ deleteNeutral.style.display = 'none'
  recordNeutral.style.display = "block"})
  deleteAngry.addEventListener('click',function(){deleteRecord(deleteAngry)})
    deleteAngry.addEventListener('click',function(){ deleteAngry.style.display = 'none'
  recordAngry.style.display = "block"})
  deleteSad.addEventListener('click',function(){deleteRecord(deleteSad)})
    deleteSad.addEventListener('click',function(){ deleteSad.style.display = 'none'
  recordSad.style.display = "block"})
  deleteFear.addEventListener('click',function(){deleteRecord(deleteFear)})
    deleteFear.addEventListener('click',function(){ deleteFear.style.display = 'none'
  recordFear.style.display = "block"})
  deleteHappy.addEventListener('click',function(){deleteRecord(deleteHappy)})
    deleteHappy.addEventListener('click',function(){ deleteHappy.style.display = 'none'
  recordHappy.style.display = "block"})

sub.addEventListener('click',function(e){
  let contChildren = []
  for (let i = 0; i < 5; i++){
    contChildren.push(cont.children[i])
  }
  for (x of contChildren){
    if(x.lastChild.className != "audio-bar")
    {
      e.preventDefault()
      alert("fill all")
      return
    }
  }
const formData = new FormData();
let file_1 = new File([neutralBlob], 'neutral_recording.wav');
let file_2 = new File([angryBlob], 'angry_recording.wav');
let file_3 = new File([sadBlob], 'sad_recording.wav');
let file_4 = new File([fearBlob], 'fear_recording.wav');
let file_5 = new File([happyBlob], 'happy_recording.wav');
formData.append("records", file_1);
formData.append("records", file_2);
formData.append("records", file_3);
formData.append("records", file_4);
formData.append("records", file_5);
/*
formData.append("records", neutralBlob);
formData.append("records", angryBlob);
formData.append("records", sadBlob);
formData.append("records", fearBlob);
formData.append("records", happyBlob);
*/
axios.post('/upload', formData, {

'Content-type': 'multipart/form-data',
});
console.log(formData)


  
  
})