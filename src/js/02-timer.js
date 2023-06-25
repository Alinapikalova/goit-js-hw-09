import '../css/common.css';

import flatpickr from 'flatpickr';

const timer = {
    start() {
        const startTime = Date.now();
        setInterval(() => {
            console.log('qweqwe');
        }, 1000);
    },
};
timer.start();

function updateClockface({ hour, min, sec }) {
    
}