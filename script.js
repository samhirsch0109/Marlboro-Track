$('.logo-image').on('mouseenter', function (event) {
    $(event.currentTarget).next('.card-description').fadeIn(800);
});

$('.logo-image').on('mouseleave', function (event) {
    $(event.currentTarget).next('.card-description').fadeOut(500);
});
const vue_app = Vue.createApp({
    data() {
        return {
            raceRecords: [] // This will hold your race records
        };
    },
    mounted() {
        // Fetch the JSON file when the component is mounted
        fetch('records.json')  // Use the correct file name here
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();  // Parse the JSON file
            })
            .then(data => {
                this.raceRecords = data;  // Assign the fetched data to raceRecords
            })
            .catch(error => {
                console.error('Error loading the race records:', error);  // Log errors
            });
    }
});

// Correctly mount the Vue instance using vue_app
vue_app.mount("#app");
