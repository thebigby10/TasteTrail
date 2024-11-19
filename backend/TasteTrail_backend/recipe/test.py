import requests
import os
from dotenv import load_dotenv
import json
load_dotenv()

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

headers = {
    "Content-Type": "application/json"
}

payload = {
    "contents":[
        {
            "parts":[
                {
                    "text":"""
                    "data": {
			"title": "Fish Tacos",
			"imgUrl": "https://i.ibb.co/5r4yJ2J/Fish-Tacos.jpg",
			"user": "asif@gmail.com",
			"tags": [
				"Seafood",
				"Mexican",
				"Tacos"
			],
			"location": "Baja California, Mexico",
			"ingredients": [
				"Fish Fillets",
				"Tortillas",
				"Cabbage",
				"Lime",
				"Sour Cream"
			],
			"description": "<p>Fresh and flavorful tacos with crispy fish and tangy toppings.</p>",
            give me similar recipe in human language.
                    """
                }
            ]
        }
    ]
}

r = requests.post(
    f"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key={GEMINI_API_KEY}",
    headers = headers,
    data = json.dumps(payload)
)

if r.status_code == 200:
    print(r.json())
else:
    print(f"Error: {r.status_code}")
