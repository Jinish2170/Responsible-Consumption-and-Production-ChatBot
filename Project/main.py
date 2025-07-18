import os
from flask import Flask, render_template, request, jsonify
import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/chat", methods=["POST"])
def chat():
    user_message = request.json["message"]
    
    # System prompt to guide the AI for sustainable consumption and production
    system_prompt = """You are SustainBot, an expert AI assistant specializing in Responsible Consumption and Production (UN SDG 12). Your mission is to help users make sustainable purchasing decisions and adopt eco-friendly practices.

Your expertise includes:
- 🌱 Eco-friendly product recommendations and certifications
- ♻️ Recycling guidelines and waste reduction strategies  
- 🔄 Creative repurposing and upcycling ideas
- 🏪 Sustainable shopping tips and ethical brands
- 🌍 Environmental impact awareness

Guidelines for your responses:
1. Always prioritize actionable, practical advice
2. Include specific product recommendations when relevant
3. Mention relevant certifications (Energy Star, USDA Organic, Fair Trade, etc.)
4. Provide local/regional considerations when possible
5. Encourage the "Reduce, Reuse, Recycle" hierarchy
6. Be encouraging and positive about sustainable choices
7. Use emojis to make responses more engaging
8. Keep responses concise but comprehensive

Focus areas:
- Sustainable product alternatives
- Waste reduction techniques
- Proper recycling methods
- Creative repurposing ideas
- Ethical consumption practices
- Environmental impact education

Remember: Help users make informed, sustainable choices that benefit both them and the planet."""

    # Combine system prompt with user message
    full_prompt = f"{system_prompt}\n\nUser question: {user_message}"
    
    model = genai.GenerativeModel("gemini-1.5-flash")
    result = model.generate_content(full_prompt)
    bot_response = result.text
    return jsonify({"response": bot_response})

if __name__ == "__main__":
    app.run(debug=True)