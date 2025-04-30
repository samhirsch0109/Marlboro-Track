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

//show more/less button
$(document).ready(function () {
    const button = $("#toggle-btn");
    const extraEvents = $("#extra-events");

    button.on("click", function () {
        extraEvents.fadeToggle();

        if (button.hasClass("expanded")) {
            button.removeClass("expanded").html("+ Show More");
        } else {
            button.addClass("expanded").html("- Show Less");
        }
    });
});

