document.addEventListener('DOMContentLoaded', () => {
    fetchUploadedLinksCount();

    const linkForm = document.getElementById('linkForm');
    const statusMessage = document.getElementById('statusMessage');

    linkForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const linkInput = document.getElementById('linkInput');
        const link = linkInput.value.trim();
        if (link !== '') {
            try {
                const response = await fetch('/api/upload/link', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ link })
                });
                const data = await response.json();
                if (response.ok) {
                    setStatusMessage(data.message, 'success');
                    linkInput.value = '';
                    fetchUploadedLinksCount();
                } else {
                    setStatusMessage(data.error, 'error');
                }
            } catch (error) {
                console.error('Error:', error);
                setStatusMessage('An error occurred. Please try again later.', 'error');
            }
        } else {
            setStatusMessage('Please enter a valid link.', 'error');
        }
    });

    async function fetchUploadedLinksCount() {
        try {
            const response = await fetch('/api/links/count');
            const data = await response.json();
            if (response.ok) {
                document.getElementById('count').textContent = data.count;
            } else {
                console.error('Error:', data.error);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    function setStatusMessage(message, type) {
        statusMessage.textContent = message;
        statusMessage.className = type;
    }
});
