<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];

    // Формирование заголовков письма
    $headers = "From: $name <$email>\n";
    $headers .= "Reply-To: $name <$email>\n";

    // Текст письма
    $message = "
        Вы получили новое сообщение от $name\n
        Номер телефона: $phone\n
        Почта: $email
    ";

    // Отправка письма
    $to = 'vachikpuper@gmail.com';
    $subject = 'Новая заявка с сайта';
    mail($to, $subject, $message, $headers);

    //Отправка успешного ответа на клиентскую сторону
    echo json_encode(['success' => true]);
}
?>