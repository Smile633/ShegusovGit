const showHidden = document.getElementById('show-hidden');
const hiddenWidget = document.getElementById('hidden-widget');
const mobileChatWidget = document.getElementById('mobile-chat-widget');

mobileChatWidget.addEventListener('click', function() {
    if (!hiddenWidget.classList.contains('open')) {
        hiddenWidget.classList.add('open');
        mobileChatWidget.style.marginBottom = '40px';
    } else {
        hiddenWidget.classList.remove('open');
        mobileChatWidget.style.marginBottom = '0';
    }
});