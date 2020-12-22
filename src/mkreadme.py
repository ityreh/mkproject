from flask import Flask, flash, redirect, render_template, request, session, abort
app = Flask(__name__)

@app.route("/")
def index():
    return "index"

@app.route("/make")
def make():
    return "Make a readme."

@app.route("/make/<string:name>/")
def makeSomething(name):
    return render_template('index.html', name=name)

if __name__ == "__main__":
    app.run()
