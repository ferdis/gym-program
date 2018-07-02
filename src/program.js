export default {
    dayNames: [
        'Chest & Triceps'
    ],

    exercises: [
        [
            {
                picture: 'http://weighttraining.guide/wp-content/uploads/2016/06/Dumbbell-Pullover-edited-990x494.png',
                name: 'Dumbell Pullover',
                sets: ['8 - 12', '8 - 12', '8 - 12'],
            },
            {
                picture: 'http://weighttraining.guide/wp-content/uploads/2017/07/close-grip-barbell-bench-press-990x558.png',
                name: 'Bench Press (Flat)',
                sets: ['8 - 12', '8 - 12', '8 - 12'],
            },
            {
                picture: '',
                name: 'Bench Press (Decline)',
                sets: ['8 - 12', '8 - 12', '8 - 12'],
            },
            {
                picture: '',
                name: 'Bench Dip',
                sets: ['8 - 12', '8 - 12', '8 - 12'],
            },
            {
                picture: '',
                name: 'Ezbar Overhead Extensions',
                sets: ['8 - 12', '8 - 12', '8 - 12'],
            },
            {
                picture: '',
                name: 'Gym Ball Press Ups',
                sets: ['8 - 12', '8 - 12', '8 - 12'],
            },
        ],
    ],

    getDailyExercises(dayNum) {
        const dayIndex = parseInt(dayNum, 10) - 1;
        return this.exercises[dayIndex] || [];
    },

    getDayName(dayNum) {
        const dayIndex = parseInt(dayNum, 10) - 1;
        return this.dayNames[dayIndex] || '';
    }
}