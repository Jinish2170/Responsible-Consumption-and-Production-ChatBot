# SustainBot - Responsible Consumption and Production Assistant

## 🌱 Project Overview

SustainBot is an AI-powered chatbot designed to assist users in making sustainable purchasing decisions and adopting eco-friendly practices. The chatbot aligns with UN Sustainable Development Goal 12 (Responsible Consumption and Production) and provides expert guidance on sustainable living.

## 🎯 Problem Statement

A chatbot that assists users in making sustainable purchasing decisions. The chatbot provides:
- Information on eco-friendly products
- Tips for reducing waste  
- Guidance on recycling and repurposing items effectively
- Sustainable shopping recommendations
- Environmental impact education

## ✨ Key Features

### 🤖 AI-Powered Responses
- Uses Google's Gemini 1.5 Flash model
- Specialized prompt engineering for sustainability focus
- Contextual understanding of eco-friendly practices

### 🌍 Core Expertise Areas
- **Eco-friendly Products**: Recommendations with certifications (Energy Star, USDA Organic, Fair Trade)
- **Waste Reduction**: Practical tips for minimizing waste at home and work
- **Recycling Guidelines**: Proper disposal methods for different materials
- **Creative Repurposing**: DIY ideas for giving items a second life
- **Sustainable Shopping**: Ethical brands and responsible purchasing decisions
- **Environmental Impact**: Education on consumption choices

### 💬 Interactive Features
- Real-time chat interface
- Suggestion chips for common questions
- Engaging emoji responses
- Actionable, practical advice

## 🚀 Technical Implementation

### Backend
- **Framework**: Flask (Python)
- **AI Model**: Google Gemini 1.5 Flash
- **Environment**: Python 3.12+
- **Dependencies**: 
  - flask
  - google-generativeai
  - python-dotenv

### Frontend
- **Framework**: HTML5, CSS3, JavaScript
- **Styling**: Tailwind CSS
- **Icons**: Font Awesome
- **Responsive Design**: Mobile-friendly interface

### Prompt Engineering
The chatbot uses a sophisticated system prompt that:
- Establishes expertise in sustainability
- Provides clear response guidelines
- Ensures actionable advice
- Maintains focus on UN SDG 12 goals
- Encourages positive sustainable choices

## 🛠️ Setup Instructions

1. **Install Dependencies**:
   ```bash
   pip install flask google-generativeai python-dotenv
   ```

2. **Set up Environment Variables**:
   Create a `.env` file with your Gemini API key:
   ```
   GEMINI_API_KEY=your_api_key_here
   ```

3. **Run the Application**:
   ```bash
   python main.py
   ```

4. **Access the Chatbot**:
   Open your browser and go to `http://127.0.0.1:5000`

## 🧪 Testing

Run the test script to see sample interactions:
```bash
python test_chatbot.py
```

## 📋 Sample Questions

- "What are some eco-friendly cleaning products I should buy?"
- "How can I reduce plastic waste in my daily life?"
- "Where can I recycle old electronics?"
- "What are creative ways to repurpose old t-shirts?"
- "Recommend sustainable alternatives to fast fashion"
- "How do I properly dispose of batteries?"

## 🎨 User Interface

The chatbot features:
- Clean, modern design with green sustainability theme
- Conversation history display
- Quick-access suggestion chips
- Typing indicators for better user experience
- Responsive layout for all devices

## 🔒 Security

- API keys stored securely in environment variables
- No sensitive data logged or stored
- Client-side input validation

## 🌟 Future Enhancements

- Integration with local recycling center databases
- Product barcode scanning for sustainability ratings
- Personal sustainability tracking
- Community features for sharing eco-tips
- Multi-language support

## 📄 License

This project is part of a sustainable development initiative focused on promoting responsible consumption and production practices.

---

**Built with 💚 for a sustainable future**
