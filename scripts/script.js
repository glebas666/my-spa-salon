let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const indicators = document.querySelectorAll('.indicator');

// Изменение слайда
function changeSlide(direction) {
    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
    updateSlider();
}

// Установка слайда по индикатору
function setSlide(index) {
    currentIndex = index;
    updateSlider();
}

// Обновление слайдера
function updateSlider() {
    const slider = document.querySelector('.slides');
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateIndicators();
}

// Обновление индикаторов
function updateIndicators() {
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });
}

// Функции для стрелок
function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlider();
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
}


// Открытие боковой панели
function openNav() {
    document.getElementById("sidebar").style.width = "250px";
}

// Закрытие боковой панели
function closeNav() {
    document.getElementById("sidebar").style.width = "0";
}

// Автоматическая смена слайдов каждые 5 секунд
setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
}, 20000);

// Открытие модального окна
function openRegistrationModal() {
    document.getElementById('registrationModal').style.display = "block";
}

// Закрытие модального окна
function closeRegistrationModal() {
    document.getElementById('registrationModal').style.display = "none";
}

// Закрытие модального окна при клике за пределами окна
window.onclick = function(event) {
    if (event.target == document.getElementById('registrationModal')) {
        closeRegistrationModal();
    }
}


// Инициализация слайдера
updateSlider();

