"""Main module for alex-personal-site Flask app"""

import os
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    """Render index page"""
    return render_template('index.html')

@app.route('/info')
def info():
    """Render info page"""
    return render_template('info.html')

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=int(os.environ.get("PORT", 8080)))
