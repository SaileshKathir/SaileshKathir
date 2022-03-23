# from asyncio.base_events import _ExceptionHandler
import yaml
from email import message
from urllib import response
from flask import Flask, render_template, request, jsonify
from chat import get_response
from flask_mysqldb import MySQL

app = Flask(__name__)
# Database connect
db = yaml.load(open('/home/lavan.s/htdocs/SaileshKathir/static/config.yaml'))
app.config['MYSQL_HOST'] = db['mysql_host']
app.config['MYSQL_USER'] = db['mysql_user']
app.config['MYSQL_PASSWORD'] = db['mysql_password']
app.config['MYSQL_DB'] = db['mysql_db']
mysql = MySQL(app)
# def dbconnect():
#     cursor = db1.cursor()
@app.route("/")
def index_get(): 
    cur = mysql.connection.cursor()
    cur.execute("select * from Recent_orders") 
    data = cur.fetchall() #data from database 
    return render_template("base2.html", value=data) 
    

@app.route("/index")
def index():
    cur = mysql.connection.cursor()
    cur.execute("select * from Recent_orders") 
    data = cur.fetchall() #data from database 
    return render_template("base2.html", value=data)

@app.route("/attendance")
def attendance():
    cur = mysql.connection.cursor()
    cur.execute("select * from Attendance") 
    data = cur.fetchall() #data from database 
    return render_template("attendance.html", value=data)

@app.route("/machines/")
def machines():
    return render_template("machines.html")

@app.post("/predict")
def predict():
    text = request.get_json().get("message")
    # TODO: check if text is valid
    response = get_response(text)
    message = {"answer": response}
    return jsonify(message)

if __name__ == "__main__":
    app.run(debug=True)

