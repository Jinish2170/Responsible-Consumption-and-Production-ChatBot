
        // Function to call Python backend API
        async function callAIBackend(prompt) {
            try {
                const response = await fetch('http://your-python-backend/api/chat', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({message: prompt})
                });
                const data = await response.json();
                return data.response;
            } catch (error) {
                console.error('Error calling AI backend:', error);
                return "I'm having trouble connecting to the sustainability assistant right now.";
            }
        }

        // Login functionality
        document.querySelector('header button').addEventListener('click', function() {
            // Add your login logic here
            alert('Login functionality coming soon!');
        });

        document.addEventListener('DOMContentLoaded', function() {
            const chatMessages = document.getElementById('chat-messages');
            const userInput = document.getElementById('user-input');
            const sendBtn = document.getElementById('send-btn');
            const suggestionChips = document.querySelectorAll('.suggestion-chip');
            
            // Add message to chat
            function addMessage(sender, message) {
                const messageDiv = document.createElement('div');
                messageDiv.className = `message ${sender}-message p-3 ${sender === 'bot' ? 'self-start' : 'self-end ml-auto'}`;
                
                const messageContent = document.createElement('div');
                messageContent.className = 'flex items-start mb-1';
                
                if (sender === 'bot') {
                    messageDiv.innerHTML = `
                        <div class="flex items-start mb-1">
                            <div class="w-8 h-8 rounded-full overflow-hidden bg-green-100 mr-2 flex-shrink-0">
                                <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c74cbf14-c29b-4548-a2ac-4adbc164145c.png" alt="Circular green avatar with leaf pattern representing eco-friendly chatbot" class="w-full h-full object-cover">
                            </div>
                            <div>
                                <p class="font-medium text-green-800">SustainBot</p>
                                <p class="text-gray-700">${message}</p>
                            </div>
                        </div>
                    `;
                } else {
                    messageDiv.innerHTML = `
                        <div class="ml-auto">
                            <p class="font-medium text-right text-green-800">You</p>
                            <p class="text-gray-700 text-right">${message}</p>
                        </div>
                    `;
                }
                
                chatMessages.appendChild(messageDiv);
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }
            
            // Bot responses
            function getBotResponse(userMessage) {
                const lowerMessage = userMessage.toLowerCase();
                let response = "I can help with information about sustainable products and practices. Could you be more specific?";
                
                if (lowerMessage.includes('recycle') || lowerMessage.includes('dispose')) {
                    response = "For recycling, here are some tips:<br><br>" +
                    "♻️ Check your local municipality's guidelines as rules vary by location<br>" +
                    "♻️ Clean containers before recycling to avoid contamination<br>" +
                    "♻️ Electronics require special disposal - many retailers offer take-back programs<br>" +
                    "♻️ Batteries should never go in regular trash due to fire risk";
                } 
                else if (lowerMessage.includes('product') || lowerMessage.includes('eco') || lowerMessage.includes('sustainable')) {
                    response = "When looking for sustainable products, consider:<br><br>" +
                    "🌱 Products with certifications like Energy Star, USDA Organic, or Fair Trade<br>" +
                    "🌱 Items made from recycled or upcycled materials<br>" +
                    "🌱 Durable products with repairability in mind<br>" +
                    "🌱 Local products to reduce transportation emissions";
                }
                else if (lowerMessage.includes('waste') || lowerMessage.includes('reduce') || lowerMessage.includes('less')) {
                    response = "Great you're thinking about waste reduction! Try these strategies:<br><br>" +
                    "🍎 Meal planning to reduce food waste<br>" +
                    "🛍️ Using reusable shopping bags and containers<br>" +
                    "📱 Going paperless for bills and statements<br>" +
                    "👕 Buying secondhand clothing when possible";
                }
                
                return response;
            }
            
            // Send message
            async function sendMessage() {
                const message = userInput.value.trim();
                if (message) {
                    addMessage('user', message);
                    userInput.value = '';
                    
                    // Show typing indicator
                    const typingIndicator = document.createElement('div');
                    typingIndicator.className = 'message bot-message p-3 self-start typing-indicator';
                    typingIndicator.innerHTML = `
                        <div class="flex items-start">
                            <div class="w-8 h-8 rounded-full overflow-hidden bg-green-100 mr-2 flex-shrink-0">
                                <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c74cbf14-c29b-4548-a2ac-4adbc164145c.png" alt="Typing indicator" class="w-full h-full object-cover">
                            </div>
                            <div class="typing-dots">
                                <span></span><span></span><span></span>
                            </div>
                        </div>
                    `;
                    chatMessages.appendChild(typingIndicator);
                    chatMessages.scrollTop = chatMessages.scrollHeight;

                    // Get AI response
                    const response = await callAIBackend(message);
                    
                    // Remove typing indicator and show response
                    document.querySelector('.typing-indicator').remove();
                    addMessage('bot', response);
                }
            }
            
            // Event listeners
            sendBtn.addEventListener('click', sendMessage);
            userInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') sendMessage();
            });
            
            // Suggestion chips
            suggestionChips.forEach(chip => {
                chip.addEventListener('click', function() {
                    const message = this.textContent.trim();
                    userInput.value = message;
                });
            });
        });
