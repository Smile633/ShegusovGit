// Счетчик кликов для ID
let clickCounter = 0;

const appScriptUrl = 'https://script.google.com/macros/s/AKfycbxi7tMtwKhDLflVrt418TgfYOkwAQOWnWBtyDz0yWQBpR93UeyeHQT5vZdr0c_HrRY9Sg/exec';

mobileChatWidget.addEventListener('click', function() {
    // Получаем параметры из URL
    const urlParams = new URLSearchParams(window.location.search);
    const campaign = urlParams.get('utm_campaign');
    const gbid = urlParams.get('utm_group');
    const keyword = urlParams.get('utm_term');
     const source_type = urlParams.get('utm_source');
     // Получаем yclid
     const yclid = getYclid();
      function getYclid() {
        try {
            const yclidMatch = document.cookie.match(/_ym_uid=([^;]+)/);
            return yclidMatch ? yclidMatch[1] : '';
        } catch (e) {
            return '';
        }
     }

    // Увеличиваем счетчик для ID
    clickCounter++;

    // Получаем текущую дату и время
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();

    // Формируем объект с данными
    const data = {
        id: clickCounter,
        date: date,
        time: time,
        campaign: campaign,
        gbid: gbid,
        keyword: keyword,
       source_type: source_type,
        yclid: yclid,
    };

  // Отправляем данные на веб-приложение
     fetch(appScriptUrl, {
            method: 'POST',
             mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => {
              // Переадресация на Telegram
           window.location.href = 'https://t.me/alexei_shegusov';
        })
        .catch(error => {
            console.error('Error sending data to Apps Script:', error);
               // Переадресация на Telegram
            window.location.href = 'https://t.me/alexei_shegusov';
        });
});