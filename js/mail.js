// Отправка запроса к PHP файлу по найденным формам

const forms = document.querySelectorAll('form');

forms.forEach(form => {
    form.addEventListener('submit', (evt) => {
        evt.preventDefault();
    
        const formData = new FormData(form);
    
        fetch('send_email.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Сообщение успешно отправлено');
                form.reset();
            }
        })
        .catch(error => {
            alert('Ошибка при отправке сообщения', error);
        });
    });  
});