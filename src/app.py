from flask import Flask, jsonify,render_template,send_file
import subprocess
from jinja2 import select_autoescape

app = Flask(__name__)
app.jinja_env.autoescape = select_autoescape(enabled_extensions=('html', 'js', 'css'))

@app.route('/')
def home():
    return render_template('home.js')

@app.route('/stats')
def execute_stats():
   
    result = subprocess.run(['python3', 'stats.py'], capture_output=True, text=True)
    
    return send_file('stats.js')


if __name__ == '__main__':
    app.run()
