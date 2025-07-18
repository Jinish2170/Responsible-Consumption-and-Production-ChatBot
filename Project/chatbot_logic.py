from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        user_input = request.form["message"]
        response = get_response(user_input)
        return render_template("index.html", user_input=user_input, response=response)
    return render_template("index.html")


def get_response(message):
    message = message.lower()

    if "eco-friendly" in message or "eco" in message or "sustainable" in message or "product" in message:
        return """🌱 Here are some eco-friendly product tips:
- Use reusable bottles, bamboo toothbrushes, or recycled paper products
- Look for certifications like Energy Star, USDA Organic, or Fair Trade
- Choose durable, repairable, and locally made items"""

    elif "reduce waste" in message or "reduce" in message or "less" in message or "waste" in message:
        return """🍎 Tips to reduce waste:
- Buy in bulk and avoid plastic packaging
- Reuse containers and bags
- Meal plan to reduce food waste
- Go paperless and buy secondhand clothing"""

    elif "recycle" in message or "dispose" in message:
        return """♻️ Recycling and disposal tips:
- Follow your local recycling rules
- Clean items before recycling to avoid contamination
- Recycle electronics at e-waste centers or stores
- Never throw batteries in the trash due to fire hazards"""

    elif "repurpose" in message:
        return """🔁 Ideas to repurpose:
- Use old jars for storage
- Turn cardboard into organizers or crafts
- Repurpose worn clothes into cleaning rags"""

    else:
        return "💡 I'm here to help with sustainable living tips! Try asking about recycling, reducing waste, or eco-friendly products."


if __name__ == "__main__":
    app.run(debug=True)

# import os
# import google.generativeai as genai
# from dotenv import load_dotenv
# from flask import Flask, render_template, request

# load_dotenv()
# genai.configure(api_key=os.getenv("AIzaSyBP6Gmjni-WbbImmV251xKDor-79pIaZkM"))

# model = genai.GenerativeModel("gemini-pro")

# def get_response(user_input):
#     # Handle direct greetings
#     if user_input.strip().lower() in ["hi", "hello", "hey", "hi!", "hello!"]:
#         return "Hello! How can I assist you with sustainable living today?"

#     prompt = (
#         "You are a helpful assistant that supports sustainable living.\n"
#         "Provide advice on responsible consumption, eco-friendly alternatives, waste reduction tips, "
#         "and recycling or repurposing guidance.\n\n"
#         f"User: {user_input}\n"
#         "Assistant:"
#     )
#     response = model.generate_content(prompt)
#     return response.text.strip()

# app = Flask(__name__)

# @app.route("/", methods=["GET", "POST"])
# def index():
#     response = ""
#     if request.method == "POST":
#         user_input = request.form["message"]
#         response = get_response(user_input)
#     return render_template("index.html", response=response)

# if __name__ == "__main__":
#     app.run(debug=True)

