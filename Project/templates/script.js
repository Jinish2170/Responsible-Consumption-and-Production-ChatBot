  const input = document.getElementById("user-input");
    const message = input.value;

    if (!message.trim()) return;

    const chatBox = document.getElementById("chat-box");
    chatBox.innerHTML += `<p><strong>You:</strong> ${message}</p>`;

    const response = await fetch("/chat", {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({message})
    });

    const data = await response.json();
    chatBox.innerHTML += `<p><strong>Bot:</strong> ${data.response}</p>`;

    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
