# from asyncio.base_events import _ExceptionHandler
import pymysql
import yaml
from email import message
from urllib import response
from flask import Flask, render_template, request, jsonify
from chat import get_response
from flask_mysqldb import MySQL
import json
app = Flask(__name__)
# Database connect
db = yaml.load(open('/home/lavan.s/htdocs/SaileshKathir/static/config.yaml'))
app.config['MYSQL_HOST'] = db['mysql_host']
app.config['MYSQL_USER'] = db['mysql_user']
app.config['MYSQL_PASSWORD'] = db['mysql_password']
app.config['MYSQL_DB'] = db['mysql_db']
mysql = MySQL(app)
# cur = mysql.connection.cursor()
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
    row_headers=[x[0] for x in cur.description]
    print(row_headers)
    print(data)
    intents = []
    for result in data:
        # content = {'Product_name': result['Product_name'], 'Product_number': result['Product_number'], 'Payment': result['Payment'] , 'Status': result['Status']}
        intents.append(dict(zip(row_headers,result)))
        # return render_template("base2.html", value=data)
        def write_json(d,filename="/home/lavan.s/htdocs/SaileshKathir/intents.json"):
            with open (filename,"w") as f:
                # cur = mysql.connection.cursor()
                # cur.execute("select * from Recent_orders")
                # data = cur.fetchall() #data from database 
                json.dump(d,f,indent=4)

        with open("/home/lavan.s/htdocs/SaileshKathir/intents.json") as json_file:
            d=json.load(json_file)
            # cur = mysql.connection.cursor()
            # cur.execute("select * from Recent_orders")
            # data = cur.fetchall() #data from database 
            # row_headers=[x[0] for x in cur.description]
            temp = d["intents"]
            # y = {"tag":"Test","patterns":"Hello","responses":"hi"}
            temp.append(intents)

        write_json(d)
        # return jsonify(intents)
    return render_template("base2.html", value=data)
    

@app.route("/attendance")
def attendance():
    cur = mysql.connection.cursor()
    cur.execute("select * from Attendance") 
    data = cur.fetchall() #data from database 
    return render_template("attendance.html", value=data,present=0,absent=0)

@app.route("/regatt")
def regatt():
    return render_template("regatt.html")
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

