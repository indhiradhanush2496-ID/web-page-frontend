const backendUrl = "https://web-page-backend-du9q.onrender.com";

fetch(${backendUrl}/api/message)
  .then(res => res.json())
  .then(data => {
    document.getElementById("msg").innerText = data.message;
  })
  .catch(err => {
    console.error("Error fetching backend:", err);
    document.getElementById("msg").innerText = "Failed to load message.";
  });
