$(document).ready(function() {
   var cards = [
        {id:0, question:'./images/1.png', answer:'./images/2.png'},
        {id:1, question:'./images/3.png', answer:'./images/4.png'},
        {id:2, question:'./images/5.png', answer:'./images/6.png'},
        {id:3, question:'./images/7.png', answer:'./images/8.png'},
        {id:4, question:'./images/9.png', answer:'./images/10.png'},
        {id:5, question:'./images/11.png', answer:'./images/12.png'},
        {id:6, question:'./images/13.png', answer:'./images/14.png'},
        {id:7, question:'./images/15.png', answer:'./images/16.png'},
        {id:8, question:'./images/17.png', answer:'./images/18.png'},
        {id:9, question:'./images/19.png', answer:'./images/20.png'},
        {id:10, question:'./images/21.png', answer:'./images/22.png'},
        {id:11, question:'./images/23.png', answer:'./images/24.png'},
        {id:12, question:'./images/25.png', answer:'./images/26.png'},
        {id:13, question:'./images/27.png', answer:'./images/28.png'},
        {id:14, question:'./images/29.png', answer:'./images/30.png'}
    ];

    var currentCardIndex;
    var isShowingAnswer = false;
    
    // Инициализация
    $('.flashcard').hide();
    $('#flipCard').hide();
    $('#flipCard-mobile').hide();

    // Функция для получения случайной карточки
    function getRandomCard() {
        return Math.floor(Math.random() * cards.length);
    }

    // Общая функция для показа карточки
    function showCard() {
        currentCardIndex = getRandomCard();
        var displayCard = cards[currentCardIndex].question;
        $('#card').attr('src', displayCard);
        
        $('.flashcard').show();
        $('#flipCard').show().text('Посмотреть состав');
        $('#flipCard-mobile').show().text('Посмотреть состав');
        isShowingAnswer = false;
    }

    // Общая функция для переворота карточки
    function flipCard() {
        if (isShowingAnswer) {
            // Показываем вопрос
            var displayCard = cards[currentCardIndex].question;
            $('#card').attr('src', displayCard);
            $('#flipCard').text('Посмотреть состав');
            $('#flipCard-mobile').text('Посмотреть состав');
            isShowingAnswer = false;
        } else {
            // Показываем ответ
            var displayAnswer = cards[currentCardIndex].answer;
            $('#card').attr('src', displayAnswer);
            $('#flipCard').text('Посмотреть фото');
            $('#flipCard-mobile').text('Посмотреть фото');
            isShowingAnswer = true;
        }
    }

    // Обработчики для десктопных кнопок
    $('#question').on('click', showCard);
    $('#flipCard').on('click', flipCard);

    // Обработчики для мобильных кнопок
    $('#question-mobile').on('click', showCard);
    $('#flipCard-mobile').on('click', flipCard);

    // Стили для кнопок при наведении и нажатии
    $('.btn')
        .on("mousedown", function() {
            $(this).css("background-color", "#b32e2e");
        })
        .on("mouseup mouseleave", function() {
            $(this).css("background-color", "red");
        })
        .on("mouseenter", function() {
            $(this).css("background-color", "#b32e2e");
        });
});
