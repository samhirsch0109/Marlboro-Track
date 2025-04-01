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
            raceRecords: [] // Holds girls' records
        };
    },
    mounted() {
        fetch('json/girlsxc.json') // Ensure this file exists
            .then(response => response.json())
            .then(data => {
                this.raceRecords = data;
            })
            .catch(error => console.error('Error fetching girls records:', error));
    }
});
girlsXCApp.mount("#girlsxc-app");

// Vue instance for Boys XC Records
const boysXCApp = Vue.createApp({
    data() {
        return {
            raceRecords: [] // Holds boys' records
        };
    },
    mounted() {
        fetch('json/boysxc.json') // Ensure this file exists
            .then(response => response.json())
            .then(data => {
                this.raceRecords = data;
            })
            .catch(error => console.error('Error fetching boys records:', error));
    }
});
boysXCApp.mount("#boysxc-app");
