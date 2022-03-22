# from asyncio.base_events import _ExceptionHandler
from email import message
from urllib import response
from flask import Flask, render_template, request, jsonify
from chat import get_response

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