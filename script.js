document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const textInput = document.getElementById('text-input');
    const generateBtn = document.getElementById('generate-btn');
    const copyBtn = document.getElementById('copy-btn');
    const textContent = document.getElementById('text-content');
    const placeholder = document.querySelector('.placeholder');
    const urlDisplay = document.getElementById('url-display');
    const toast = document.getElementById('toast');

    // Check URL for text parameter
    const params = new URLSearchParams(window.location.search);
    const urlText = params.get('text');

    if (urlText) {
        showText(decodeURIComponent(urlText));
        textInput.value = decodeURIComponent(urlText);
        updateUrlDisplay();
    }

    // Event listeners
    generateBtn.addEventListener('click', generateUrl);
    copyBtn.addEventListener('click', copyUrl);
    textInput.addEventListener('keypress', (e) => e.key === 'Enter' && generateUrl());

    // Functions
    function generateUrl() {
        const text = textInput.value.trim();
        if (!text) return;
        
        const encodedText = encodeURIComponent(text);
        const newUrl = `${window.location.origin}${window.location.pathname}?text=${encodedText}`;
        
        window.history.pushState({}, '', newUrl);
        showText(text);
        updateUrlDisplay();
    }

    function showText(text) {
        textContent.textContent = text;
        placeholder.style.display = 'none';
        textContent.style.display = 'block';
    }

    function updateUrlDisplay() {
        urlDisplay.value = window.location.href;
    }

    function copyUrl() {
        if (!urlDisplay.value) return;
        
        navigator.clipboard.writeText(urlDisplay.value)
            .then(() => {
                showToast('Link copied!');
            })
            .catch(err => {
                console.error('Copy failed:', err);
                showToast('Failed to copy');
            });
    }

    function showToast(message) {
        toast.textContent = message;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 2000);
    }
});