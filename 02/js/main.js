const dateTarget = new Date('08/20/2023 00:00 PM');

const days_left = document.querySelector('#days');
const hours_left = document.querySelector('#hours');
const minutes_left = document.querySelector('#minutes');
const seconds_left = document.querySelector('#seconds');

const mili_sec = 1000;
const mili_min = mili_sec * 60;
const mili_hour = mili_min * 60;
const mili_day = mili_hour * 24;


function updateCountdown() {
    const now = new Date()
    const DURATION = dateTarget - now;
    const remaining_days = Math.floor(DURATION / mili_day);
    const remaining_hours = Math.floor((DURATION % mili_day) / mili_hour);
    const remaining_min = Math.floor((DURATION % mili_hour) / mili_min);
    const remaining_sec = Math.floor((DURATION % mili_min) / mili_sec);

    days_left.textContent = remaining_days;
    hours_left.textContent = remaining_hours;
    minutes_left.textContent = remaining_min;
    seconds_left.textContent = remaining_sec;
}

updateCountdown();
setInterval(updateCountdown, mili_sec);

$('.select-1').on('click', function(){
    $('#video1').show();
    $('#video2').hide();
    $('#video3').hide();
    $('#video4').hide();
});

$('.select-2').on('click', function(){
    $('#video1').hide();
    $('#video2').show();
    $('#video3').hide();
    $('#video4').hide();
});

$('.select-3').on('click', function(){
    $('#video1').hide();
    $('#video2').hide();
    $('#video3').show();
    $('#video4').hide();
});

$('.select-4').on('click', function(){
    $('#video1').hide();
    $('#video2').hide();
    $('#video3').hide();
    $('#video4').show();
});