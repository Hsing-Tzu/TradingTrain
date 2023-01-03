from pymongo import MongoClient

url = 'mongodb://localhost:27017'
client = MongoClient(url)

db = client['Homework_4']

collection_name = db["pchome_crawler"]