from dotenv import load_dotenv
from flask import Flask
from flask_restx import Api
import os

load_dotenv()


class Server():
    def __init__(self):
        self.app = Flask(__name__)
        self.api = Api(self.app,
                version='1.0',
                title='proagrofacil',
                description='API para comunicação de perdas',
                doc='/docs'
        )

    def run(self):
        self.app.run(debug=True, host=os.getenv("API_HOST"), port=os.getenv("PORT"))

server = Server()