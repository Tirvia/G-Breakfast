$(document).ready(function() {
   var cards = [
        {id:0, question:'./images/Английский завтрак.png', answer:'./images/Английский завтрак1.png'},
        {id:1, question:'./images/Беларуский завтрак.png', answer:'./images/Беларуский завтрак1.png'},
        {id:2, question:'./images/Блинчики с творогом. png.png', answer:'./images/Блинчики с творогом1. png.png'},
        {id:3, question:'./images/Беларуский завтрак.png', answer:'./images/Беларуский завтрак1.png'},
        {id:4, question:'./images/большой блин.png', answer:'./images/большой блин1.png'},
        {id:5, question:'./images/Бульон с филе индейки.png', answer:'./images/Бульон с филе индейки1.png'},
        {id:6, question:'./images/Гречневая каша.png', answer:'./images/Гречневая каша1.png'},
        {id:7, question:'./images/Йогурт с чиа.png', answer:'./images/Йогурт с чиа1.png'},
        {id:8, question:'./images/Мексиканский завтрак.png', answer:'./images/Мексиканский завтрак1.png'},
        {id:9, question:'./images/Немецкий завтрак.png', answer:'./images/Немецкий завтрак1.png'},
        {id:10, question:'./images/Овсянка.png', answer:'./images/Овсянка1.png'},
        {id:11, question:'./images/Омлет с салатом.png', answer:'./images/Омлет с салатом1.png'},
        {id:12, question:'./images/Омлет с ссалатом и беконом.png', answer:'./images/Омлет с ссалатом и беконом1.png'},
        {id:13, question:'./images/Омлет с ссалатом и курицей.png', answer:'./images/Омлет с ссалатом и курицей1.png'},
        {id:14, question:'./images/Омлет с ссалатом и лососем.png', answer:'./images/Омлет с ссалатом и лососем1.png'},
        {id:15, question:'./images/Сырная овсянка.png', answer:'./images/Сырная овсянка1.png'},
        {id:16, question:'./images/Яйца Бенедикт с беконом.png', answer:'./images/Яйца Бенедикт с беконом1.png'},
        {id:17, question:'./images/Яйца Бенедикт с лососем.png', answer:'./images/Яйца Бенедикт с лососем1.png'},
        {id:18, question:'./images/Яйца Бенедикт с цыпленком.png', answer:'./images/Яйца Бенедикт с цыпленком1.png'}
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
