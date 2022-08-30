from cgi import test
from urllib import request
from flask import Flask
from flask_restful import Resource, Api, reqparse
from flask_cors import CORS
import pandas as pd
#import ast
import mysql.connector as mysql
from mysql.connector import Error

app = Flask(__name__)
api = Api(app)
CORS(app)
##"proxy":"http://localhost:5000",
try:
    connection = mysql.connect(host="localhost",database="shop",user="root",password="")
    if connection.is_connected():
        db_Info = connection.get_server_info()
        print("Connected to MySQL Server version ", db_Info)
        cursor = connection.cursor()
        cursor.execute("select database();")
        record = cursor.fetchone()
        print("You're connected to database: ", record)
except Error as e:
    print("Error: ", e)

class Test(Resource):
    def get(self):
        try:
            cursor = connection.cursor()
            query = "select * from user"
            cursor.execute(query)
            data = cursor.fetchall()
            return data, 200
        except:
            data = "nanai"
            return data, 400
    pass

class Objetos(Resource):
    def get(self):
        try:
            cursor = connection.cursor()
            query = "select * from item"
            cursor.execute(query)
            data = cursor.fetchall()
            return data, 200
        except:
            data = "nanai"
            return data, 400
    pass

class Usuarios(Resource):
    def get(self):
        try:
            cursor = connection.cursor()
            query = "select * from user"
            cursor.execute(query)
            data = cursor.fetchall()
            return data, 200
        except:
            data = "nanai"
            return data, 400
    pass

class addUsuarios(Resource):
    def get(self):
        try:
            cursor = connection.cursor()
            print("llega")
            name = reqparse.request.args.get("name");
            print(name)
            password = reqparse.request.args.get("pass");
            val =(name,password)
            print(password)
            query = "INSERT INTO user (name,password) VALUES (%s,%s);"
            cursor.execute(query,val)
            data = cursor.fetchall()
            connection.commit()
            return data, 200
        except:
            data = "nanai"
            return data, 400
    pass

class logIn(Resource):
    def get(self):
        try:
            cursor = connection.cursor()
            print("llega")
            name = reqparse.request.args.get("name");
            print(name)
            password = reqparse.request.args.get("pass");
            val =(name,password)
            print(password)
            query = "select * from user where name=%s AND password=%s"
            cursor.execute(query,val)
            data = cursor.fetchall()
            return data, 200
        except:
            data = "nanai"
            return data, 400
    pass


class addItem(Resource):
    def get(self):
        try:
            cursor = connection.cursor()
            print("llega")
            name = reqparse.request.args.get("name");
            val = (name)
            query = "INSERT INTO item (name) VALUES (%s);"
            cursor.execute(query,val)
            data = cursor.fetchall()
            connection.commit()
            return data, 200
        except:
            data = "nanai"
            return data, 400
    pass

class getBought(Resource):
    def get(self):
        try:
            cursor = connection.cursor()
            user = reqparse.request.args.get("userid");
            query = "select * from boughtItem where userid=",user
            cursor.execute(query)
            data = cursor.fetchall()
            return data, 200
        except:
            data = "nanai"
            return data, 400
    pass

class getAllBought(Resource):
    def get(self):
        try:
            cursor = connection.cursor()
            query = "select * from boughtItem"
            cursor.execute(query)
            data = cursor.fetchall()
            return data, 200
        except:
            data = "nanai"
            return data, 400
    pass

class buyItem(Resource):
    def get(self):
        try:
            cursor = connection.cursor()
            print("llega")
            user = reqparse.request.args.get("userid");
            item = reqparse.request.args.get("itemid");
            val = (user,item)
            query = "INSERT INTO boughtItem (userid,itemid) VALUES (%s,%s);"
            cursor.execute(query,val)
            connection.commit()
            data = cursor.fetchall()
            
            return data, 200
        except:
            data = "nanai"
            return data, 400
    pass




api.add_resource(Test, '/')
api.add_resource(Objetos, '/objetos')
api.add_resource(Usuarios, '/usuarios')
api.add_resource(addUsuarios, '/addUsuarios')
api.add_resource(addItem, '/addItem')
api.add_resource(buyItem, '/buyItem')
api.add_resource(getBought, '/bought')
api.add_resource(getAllBought, '/boughtAll')
api.add_resource(logIn, '/logIn')
####
if __name__ == '__main__':
    app.run(debug=True)  # run our Flask app