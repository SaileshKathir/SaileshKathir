
class Chatbox {
    constructor() {
        this.args = {
            openButton: document.querySelector('.chatbox__button'),
            chatBox: document.querySelector('.chatbox__support'),
            sendButton: document.querySelector('.send__button')
        }

        this.state = false;
        this.messages = [];
    }

    display() {
        const {openButton, chatBox, sendButton} = this.args;

        openButton.addEventListener('click', () => this.toggleState(chatBox))

        sendButton.addEventListener('click', () => this.onSendButton(chatBox))

        const node = chatBox.querySelector('input');
        node.addEventListener("keyup", ({key}) => {
            if (key === "Enter") {
                this.onSendButton(chatBox)
            }
        })
    }

    toggleState(chatbox) {
        this.state = !this.state;
        if(this.state) {
            chatbox.classList.add('chatbox--active')
        } else {
            chatbox.classList.remove('chatbox--active')
        }
    }

    onSendButton(chatbox) {
        var textField = chatbox.querySelector('input');
        let text1 = textField.value
        console.log(text1);
        if (text1 === "dashboard") {
            window.location.pathname = ('/');
            return;
        }
        if (text1 === "employee") {
            window.location.pathname = ('/attendance');
            return;
        }
        if (text1 === "machines") {
            window.location.pathname = ('/machines/');
            return;
        }
        if (text1 === "Thread Tension") {
            window.location.pathname = ('/machines/');
            let speech = new SpeechSynthesisUtterance();
            speech.lang = "en-US";
            speech.text = "Its normal no maintanence required";
            speech.volume = 1;
            speech.rate = 1;
            speech.pitch = 1;
            window.speechSynthesis.speak(speech);
            this.updateChatText(chatbox)
            textField.value = ''
            
            return;
        }
       

        let msg1 = { name: "User", message: text1 }
        console.log(msg1)
        this.messages.push(msg1);
        
        fetch('http://127.0.0.1:5000/predict', {
            method: 'POST',
            body: JSON.stringify({ message: text1 }),
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json'
            },
          })
          .then(r => r.json() )
          .then(r => {
            let msg2 = { name: "Sam", message: r.answer };
            // let msg2 = {name:"Sam",message: r.answer }
            this.messages.push(msg2);
            let speech = new SpeechSynthesisUtterance();
            speech.lang = "en-US";
            speech.text = r.answer;
            speech.volume = 1;
            speech.rate = 1;
            speech.pitch = 1;
            window.speechSynthesis.speak(speech);
            this.updateChatText(chatbox)
            textField.value = ''

        }).catch((error) => {
            console.error('Error:', error);
            this.updateChatText(chatbox)
            textField.value = ''
          });
    }

    updateChatText(chatbox) {
        var html = '';
        this.messages.slice().reverse().forEach(function(item, index) {
            if (item.name === "BOT")
            {
                html += '<div class="messages__item messages__item--visitor">' + item.message + '</div>'
            }   
            else
            {
                html += '<div class="messages__item messages__item--operator">' + item.message + '</div>'
            }
          });

        const chatmessage = chatbox.querySelector('.chatbox__messages');
        chatmessage.innerHTML = html;
    }
    

}


const chatbox = new Chatbox();
chatbox.display();