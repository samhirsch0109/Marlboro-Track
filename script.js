//jQuery for hover overlay

$('.logo-image').on('mouseenter', function (event) {
    $(event.currentTarget).next('.card-description').fadeIn(800);
});

$('.logo-image').on('mouseleave', function (event) {
    $(event.currentTarget).next('.card-description').fadeOut(1000); // Fades out smoothly when hover ends
});

// Vue instance for Girls XC Records
const girlsXCApp = Vue.createApp({
    data() {
        return {
            raceRecords: []
        };
    },
    mounted() {
        fetch('json/girlsxc.json')
            .then(response => response.json())
            .then(data => {
                this.raceRecords = data;
            })
            .catch(error => console.error('Error fetching girls records:', error));
    }
});
girlsXCApp.mount("#girlsxc-app");

//end of girls xc 


const boysXCApp = Vue.createApp({
    data() {
        return {
            raceRecords: []
        };
    },
    mounted() {
        fetch('json/boysxc.json')
            .then(response => response.json())
            .then(data => {
                this.raceRecords = data;
            })
            .catch(error => console.error('Error fetching girls records:', error));
    }
});
boysXCApp.mount("#boysxc-app");

//end of boys xc



const boysWinterApp = Vue.createApp({
    data() {
        return {
            raceRecords: []
        };
    },
    mounted() {
        fetch('json/boyswinter.json')
            .then(response => response.json())
            .then(data => {
                this.raceRecords = data;
            })
            .catch(error => console.error('Error fetching boys records:', error));
    }
});
boysWinterApp.mount("#boyswinter-app");
//end of boys winter

const girlsWinterApp = Vue.createApp({
    data() {
        return {
            raceRecords: []
        };
    },
    mounted() {
        fetch('json/girlswinter.json')
            .then(response => response.json())
            .then(data => {
                this.raceRecords = data;
            })
            .catch(error => console.error('Error fetching girls records:', error));
    }
});
girlsWinterApp.mount("#girlswinter-app");

//end of girls winter


const boysSpringApp = Vue.createApp({
    data() {
        return {
            raceRecords: []
        };
    },
    mounted() {
        fetch('json/boysspring.json')
            .then(response => response.json())
            .then(data => {
                this.raceRecords = data;
            })
            .catch(error => console.error('Error fetching boys records:', error));
    }
});
boysSpringApp.mount("#boysspring-app");

//end of boys spring

const girlsSpringApp = Vue.createApp({
    data() {
        return {
            raceRecords: []
        };
    },
    mounted() {
        fetch('json/girlsspring.json')
            .then(response => response.json())
            .then(data => {
                this.raceRecords = data;
            })
            .catch(error => console.error('Error fetching girls records:', error));
    }
});
girlsSpringApp.mount("#girlsspring-app");
//end of girls spring


const slide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let index = 0;
const totalImages = images.length;

// Function to move carousel by one image
function moveCarousel() {
    slide.style.transform = `translateX(${-index * 100}%)`;
}

// Next Button
nextButton.addEventListener('click', () => {
    index++;
    if (index >= totalImages) {
        index = 0;  // Reset to the first image
    }
    moveCarousel();
});

// Previous Button
prevButton.addEventListener('click', () => {
    index--;
    if (index < 0) {
        index = totalImages + 1;  // Go back to the last image
    }
    moveCarousel();
});

// Optional: Auto-slide every 3 seconds
setInterval(() => {
    index++;
    if (index >= totalImages) {
        index = 1;  // Reset to the first image
    }
    moveCarousel();
}, 3000);
