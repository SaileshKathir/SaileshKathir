
function getBotResponse(input)
   {
    // <script type="text/javascript" src="/home/lavan.s/htdocs/SaileshKathir/intents.json"></script>
    // var mydata = JSON.parse(data);
    // fetch("/home/lavan.s/htdocs/SaileshKathir/intents.json")
    // fetch('/home/lavan.s/htdocs/SaileshKathir/intents.json',{method:'POST',body:input})
    // .then(results=>results.json())
    // .then(console.log)
    // const speech = new SpeechSynthesisUtterance(); 
    // speech.text = "This is test message";
    
    if (input == "rock") {
        // return intents.responses

        // return hello;
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }
// function chatbotvoice(input){ 
//     const speech = new SpeechSynthesisUtterance(); 
//     speech.text = "This is test message";
//     if(input.includes('who are you')){ 
//         let finalresult = intro[Math.floor(Math.random() * intro.length)]; 
//         speech.text = finalresult; 
//     } 
// }

//     let mic = document.getElementById("mic"); 
// let chatareamain = document.querySelector('.chatarea-main'); 
// let chatareaouter = document.querySelector('.chatarea-outer'); 
 
// let intro = ["Hello, I am Chitti", "Hi, I am a Robo", "Hello, My name is Chitti"]; 
// let help = ["How may i assist you?","How can i help you?","What i can do for you?"]; 
// let greetings = ["i am good you little piece of love", "i am fine, what about you", "don't want to talk", "i am good"]; 
// let hobbies = ["i love to talk with humans", "i like to make friends like you", "i like cooking"]; 
// let pizzas = ["which type of pizza do you like?", "i can make a pizza for you", "i would love to make a pizza for you", "would you like cheese pizza?"]; 
// let thank = ["Most welcome","Not an issue","Its my pleasure","Mention not"]; 
// let closing = ['Ok bye-bye','As you wish, bye take-care','Bye-bye, see you soon..'] 
 
// const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; 
// const recognition = new SpeechRecognition(); 
 
// function showusermsg(usermsg){ 
//     let output = ''; 
//     output += <div class="chatarea-inner user">${usermsg}</div>; 
//     chatareaouter.innerHTML += output; 
//     return chatareaouter; 
// } 
 
// function showchatbotmsg(chatbotmsg){ 
//     let output = ''; 
//     output += <div class="chatarea-inner chatbot">${chatbotmsg}</div>; 
//     chatareaouter.innerHTML += output; 
//     return chatareaouter; 
// } 
 
// function chatbotvoice(input){ 
//     const speech = new SpeechSynthesisUtterance(); 
//     speech.text = "This is test message"; 
    // if(input.includes('who are you')){ 
    //     let finalresult = intro[Math.floor(Math.random() * intro.length)]; 
    //     speech.text = finalresult; 
    // } 
//     if(input.includes('fine')){ 
//         let finalresult = help[Math.floor(Math.random() * help.length)]; 
//         speech.text = finalresult; 
//     } 
//     if(input.includes('how are you' || 'how are you doing today')){ 
//         let finalresult = greetings[Math.floor(Math.random() * greetings.length)]; 
//         speech.text = finalresult; 
//     } 
//     if(input.includes('tell me something about you' || 'tell me something about your hobbies')){ 
//         let finalresult = hobbies[Math.floor(Math.random() * hobbies.length)]; 
//         speech.text = finalresult; 
//     } 
//     if(input.includes('pizza')){ 
//         let finalresult = pizzas[Math.floor(Math.random() * pizzas.length)]; 
//         speech.text = finalresult; 
//     } 
//     if(input.includes('thank you' || 'thank you so much')){ 
//         let finalresult = thank[Math.floor(Math.random() * thank.length)]; 
//         speech.text = finalresult; 
//     } 
//     if(input.includes('talk to you' || 'talk')){ 
//         let finalresult = closing[Math.floor(Math.random() * closing.length)]; 
//         speech.text = finalresult; 
//     } 
//     window.speechSynthesis.speak(speech); 
//     chatareamain.appendChild(showchatbotmsg(speech.text)); 
// } 
 
// recognition.onresult=function(e){ 
//     let resultIndex = e.resultIndex; 
//     let transcript = e.results[resultIndex][0].transcript; 
//     chatareamain.appendChild(showusermsg(transcript)); 
//     chatbotvoice(transcript); 
//     console.log(transcript); 
// } 
// recognition.onend=function(){ 
//     mic.style.background="#ff3b3b"; 
// } 
// mic.addEventListener("click", function(){ 
//     mic.style.background='#39c81f'; 
//     recognition.start(); 
//     console.log("Activated"); 
// })
   }
