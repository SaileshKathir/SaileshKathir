# from asyncio.base_events import _ExceptionHandler
from email import message
from urllib import response
from flask import Flask, render_template, request, jsonify
from chat import get_response
import speech_recognition as sr
import pyttsx3
import pywhatkit
import datetime
import wikipedia


app = Flask(__name__)

@app.route("/")
def index_get():
    return render_template("base2.html")
# @app.route("/attendance", endpoint='attendance.html')
# @app.route("/machines", endpoint='machines.html')
# @_ExceptionHandler
# def func1():
#     pass
@app.route("/index")
def index():
    return render_template("base2.html")
@app.route("/attendance")
def attendance():
    return render_template("attendance.html")
@app.route("/machines/")
def machines():
    return render_template("machines.html")


# @app.route("/machines", endpoint='machines.html')
# @app.route("/machines")
# def attendance():
#     return render_template("machines.html")

@app.post("/predict")
def predict():
    text = request.get_json().get("message")
    # TODO: check if text is valid
    response = get_response(text)
    message = {"answer": response}
    return jsonify(message)

if __name__ == "__main__":
    app.run(debug=True)

listener = sr.Recognizer()
engine = pyttsx3.init()
voices = engine.getProperty('voices')
engine.setProperty('voice', voices[1].id)


def talk(text):
    engine.say(text)
    engine.runAndWait()


def take_command():
    try:
        with sr.Microphone() as source:
            print('listening...')
            voice = listener.listen(source)
            command = listener.recognize_google(voice)
            command = command.lower()
            if 'alexa' in command:
                command = command.replace('alexa', '')
                print(command)
                return command
    except:
        pass
        return command


def run_alexa():
    command = take_command()
    print(command)
    if 'play' in command:
        song = command.replace('play', '')
        talk('playing ' + song)
        pywhatkit.playonyt(song)
    elif 'time' in command:
        time = datetime.datetime.now().strftime('%I:%M %p')
        talk('Current time is ' + time)
    elif 'who the heck is' in command:
        person = command.replace('who the heck is', '')
        info = wikipedia.summary(person, 1)
        print(info)
        talk(info)
    elif 'date' in command:
        print
        talk('sorry, I have a headache')
    elif 'are you single' in command:
        talk('I am in a relationship with wifi')
    else:
        talk('Please say the command again.')


while True:
    run_alexa()