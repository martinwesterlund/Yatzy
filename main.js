
// An instance of a store, which contains all data in the app
const store = new Vuex.Store({
    state: {
        sum: 0,
        totalSum: 0,
        rollNumber: 1,
        roundNumber: 0,

        // Array of the 5 dice objects, where the initial value before each round is 7, 8, 9, 10, 11 since that generates the images Y, A, T, Z, Y
        dices: [
            { id: 1, value: 7, locked: false, shouldRotate: false },
            { id: 2, value: 8, locked: false, shouldRotate: false },
            { id: 3, value: 9, locked: false, shouldRotate: false },
            { id: 4, value: 10, locked: false, shouldRotate: false },
            { id: 5, value: 11, locked: false, shouldRotate: false },
        ],

        // Array including each value in the scoreboard. Only "Summa", "Bonus" and "Total" is locked since they should not be clickable
        combinations: [
            { id: 1, name: "Ettor", value: null, locked: false },
            { id: 2, name: "Tvåor", value: null, locked: false },
            { id: 3, name: "Treor", value: null, locked: false },
            { id: 4, name: "Fyror", value: null, locked: false },
            { id: 5, name: "Femmor", value: null, locked: false },
            { id: 6, name: "Sexor", value: null, locked: false },
            { id: 7, name: "Summa", value: null, locked: true },
            { id: 8, name: "Bonus", value: null, locked: true },
            { id: 9, name: "Ett par", value: null, locked: false },
            { id: 10, name: "Två par", value: null, locked: false },
            { id: 11, name: "Tretal", value: null, locked: false },
            { id: 12, name: "Fyrtal", value: null, locked: false },
            { id: 13, name: "Liten stege", value: null, locked: false },
            { id: 14, name: "Stor stege", value: null, locked: false },
            { id: 15, name: "Kåk", value: null, locked: false },
            { id: 16, name: "Chans", value: null, locked: false },
            { id: 17, name: "Yatzy", value: null, locked: false },
            { id: 18, name: "Total", value: null, locked: true },
        ]

    },

    mutations: {

        // Mutations to lock and unlock the dice
        lock1(state) {
            state.dices[0].locked = !state.dices[0].locked
        },
        lock2(state) {
            state.dices[1].locked = !state.dices[1].locked
        },
        lock3(state) {
            state.dices[2].locked = !state.dices[2].locked
        },
        lock4(state) {
            state.dices[3].locked = !state.dices[3].locked
        },
        lock5(state) {
            state.dices[4].locked = !state.dices[4].locked
        },

        // Gives all unlocked dice a rotations and then a new randomized number
        rolldices(state) {
            
            
                for (let i = 0; i < state.dices.length; i++) {
                    if (state.dices[i].locked) continue
                    else{
                        state.dices[i].shouldRotate = true;
                        setTimeout(function(){
                            state.dices[i].value = Math.floor(Math.random() * 6) + 1; 
                            state.dices[i].shouldRotate = false; 
                        }, 500);  
                    } 
                }
                state.rollNumber++;
            
        },

        // Checks total value of all dice with value 1
        check1(state) {
            if (!state.combinations[0].locked && state.dices[0].value < 7) {
                var dicesResult = [];
                for (let i = 0; i < state.dices.length; i++) {
                    dicesResult.push(state.dices[i].value)
                }
                dicesResult.sort();
                var sum = 0;
                for (let i = 0; i < state.dices.length; i++) {
                    if (dicesResult[i] == 1) {
                        sum += dicesResult[i];
                    }
                }
                state.combinations[0].value = sum;
                for (let i = 0; i < 5; i++) {
                    state.dices[i].locked = false;
                    state.dices[i].value = i + 7;
                }
                state.combinations[0].locked = true;
                state.rollNumber = 1;
                state.roundNumber++;
            }
        },

        // Checks total value of all dice with value 2
        check2(state) {
            if (!state.combinations[1].locked && state.dices[0].value < 7) {
                var dicesResult = [];
                for (let i = 0; i < state.dices.length; i++) {
                    dicesResult.push(state.dices[i].value)
                }
                dicesResult.sort();
                var sum = 0;
                for (let i = 0; i < state.dices.length; i++) {
                    if (dicesResult[i] == 2) {
                        sum += dicesResult[i];
                    }
                }
                state.combinations[1].value = sum;
                for (let i = 0; i < 5; i++) {
                    state.dices[i].locked = false;
                    state.dices[i].value = i + 7;
                }
                state.combinations[1].locked = true;
                state.rollNumber = 1;
                state.roundNumber++;
            }
        },
        
        // Checks total value of all dice with value 3
        check3(state) {
            if (!state.combinations[2].locked && state.dices[0].value < 7) {
                var dicesResult = [];
                for (let i = 0; i < state.dices.length; i++) {
                    dicesResult.push(state.dices[i].value)
                }
                dicesResult.sort();
                var sum = 0;
                for (let i = 0; i < state.dices.length; i++) {
                    if (dicesResult[i] == 3) {
                        sum += dicesResult[i];
                    }
                }
                state.combinations[2].value = sum;
                for (let i = 0; i < 5; i++) {
                    state.dices[i].locked = false;
                    state.dices[i].value = i + 7;
                }
                state.combinations[2].locked = true;
                state.rollNumber = 1;
                state.roundNumber++;
            }
        },

        // Checks total value of all dice with value 4
        check4(state) {
            if (!state.combinations[3].locked && state.dices[0].value < 7) {
                var dicesResult = [];
                for (let i = 0; i < state.dices.length; i++) {
                    dicesResult.push(state.dices[i].value)
                }
                dicesResult.sort();
                var sum = 0;
                for (let i = 0; i < state.dices.length; i++) {
                    if (dicesResult[i] == 4) {
                        sum += dicesResult[i];
                    }
                }
                state.combinations[3].value = sum;
                for (let i = 0; i < 5; i++) {
                    state.dices[i].locked = false;
                    state.dices[i].value = i + 7;
                }
                state.combinations[3].locked = true;
                state.rollNumber = 1;
                state.roundNumber++;
            }
        },

        // Checks total value of all dice with value 5
        check5(state) {
            if (!state.combinations[4].locked && state.dices[0].value < 7) {
                var dicesResult = [];
                for (let i = 0; i < state.dices.length; i++) {
                    dicesResult.push(state.dices[i].value)
                }
                dicesResult.sort();
                var sum = 0;
                for (let i = 0; i < state.dices.length; i++) {
                    if (dicesResult[i] == 5) {
                        sum += dicesResult[i];
                    }
                }
                state.combinations[4].value = sum;
                for (let i = 0; i < 5; i++) {
                    state.dices[i].locked = false;
                    state.dices[i].value = i + 7;
                }
                state.combinations[4].locked = true;
                state.rollNumber = 1;
                state.roundNumber++;
            }
        },

        // Checks total value of all dice with value 6
        check6(state) {
            if (!state.combinations[5].locked && state.dices[0].value < 7) {
                var dicesResult = [];
                for (let i = 0; i < state.dices.length; i++) {
                    dicesResult.push(state.dices[i].value)
                }
                dicesResult.sort();
                var sum = 0;
                for (let i = 0; i < state.dices.length; i++) {
                    if (dicesResult[i] == 6) {
                        sum += dicesResult[i];
                    }
                }
                state.combinations[5].value = sum;
                for (let i = 0; i < 5; i++) {
                    state.dices[i].locked = false;
                    state.dices[i].value = i + 7;
                }
                state.combinations[5].locked = true;
                state.rollNumber = 1;
                state.roundNumber++;
            }
        },

        // Checks total value of the highest pair
        check9(state) {
            if (!state.combinations[8].locked && state.dices[0].value < 7) {
                var dicesResult = [];
                for (let i = 0; i < state.dices.length; i++) {
                    dicesResult.push(state.dices[i].value)
                }
                dicesResult.sort();
                var sum = 0;
                for (let i = 0; i < state.dices.length - 1; i++) {
                    if (dicesResult[i] == dicesResult[i + 1]) {
                        sum = dicesResult[i] + dicesResult[i + 1];
                    }
                }
                state.combinations[8].value = sum;
                for (let i = 0; i < 5; i++) {
                    state.dices[i].locked = false;
                    state.dices[i].value = i + 7;
                }
                state.combinations[8].locked = true;
                state.rollNumber = 1;
                state.roundNumber++;
            }
        },

        // Checks total value of two-pair
        check10(state) {
            if (!state.combinations[9].locked && state.dices[0].value < 7) {
                var dicesResult = [];
                for (let i = 0; i < state.dices.length; i++) {
                    dicesResult.push(state.dices[i].value)
                }
                dicesResult.sort();
                var sum = 0;
                if (dicesResult[0] == dicesResult[1] && dicesResult[2] == dicesResult[3] && dicesResult[3] > dicesResult[0]) {
                    sum = dicesResult[0] + dicesResult[1] + dicesResult[2] + dicesResult[3];
                }
                else if (dicesResult[0] == dicesResult[1] && dicesResult[3] == dicesResult[4] && dicesResult[3] > dicesResult[0]) {
                    sum = dicesResult[0] + dicesResult[1] + dicesResult[3] + dicesResult[4];
                }
                else if (dicesResult[1] == dicesResult[2] && dicesResult[3] == dicesResult[4] && dicesResult[3] > dicesResult[0]) {
                    sum = dicesResult[1] + dicesResult[2] + dicesResult[3] + dicesResult[4];
                }

                state.combinations[9].value = sum;
                for (let i = 0; i < 5; i++) {
                    state.dices[i].locked = false;
                    state.dices[i].value = i + 7;
                }
                state.combinations[9].locked = true;
                state.rollNumber = 1;
                state.roundNumber++;
            }
        },

        // Checks total value of three identical dice values
        check11(state) {
            if (!state.combinations[10].locked && state.dices[0].value < 7) {
                var dicesResult = [];
                for (let i = 0; i < state.dices.length; i++) {
                    dicesResult.push(state.dices[i].value)
                }
                dicesResult.sort();
                var sum = 0;
                for (let i = 0; i < 3; i++) {
                    if (dicesResult[i] == dicesResult[i + 1] && dicesResult[i + 1] == dicesResult[i + 2])
                        sum = dicesResult[i] + dicesResult[i + 1] + dicesResult[i + 2]
                }

                state.combinations[10].value = sum;
                for (let i = 0; i < 5; i++) {
                    state.dices[i].locked = false;
                    state.dices[i].value = i + 7;
                }
                state.combinations[10].locked = true;
                state.rollNumber = 1;
                state.roundNumber++;
            }
        },

        // Checks total value of four identical dice values
        check12(state) {
            if (!state.combinations[11].locked && state.dices[0].value < 7) {
                var dicesResult = [];
                for (let i = 0; i < state.dices.length; i++) {
                    dicesResult.push(state.dices[i].value)
                }
                dicesResult.sort();
                var sum = 0;
                for (let i = 0; i < 2; i++) {
                    if (dicesResult[i] == dicesResult[i + 1] && dicesResult[i + 1] == dicesResult[i + 2] && dicesResult[i + 2] == dicesResult[i + 3])
                        sum = dicesResult[i] + dicesResult[i + 1] + dicesResult[i + 2] + dicesResult[i + 3]
                }

                state.combinations[11].value = sum;
                for (let i = 0; i < 5; i++) {
                    state.dices[i].locked = false;
                    state.dices[i].value = i + 7;
                }
                state.combinations[11].locked = true;
                state.rollNumber = 1;
                state.roundNumber++;
            }
        },

        // Checks total value of small straight
        check13(state) {
            if (!state.combinations[12].locked && state.dices[0].value < 7) {
                var dicesResult = [];
                for (let i = 0; i < state.dices.length; i++) {
                    dicesResult.push(state.dices[i].value)
                }

                dicesResult.sort();
                var sum = 0;
                if (dicesResult[0] == 1 && dicesResult[1] == 2 && dicesResult[2] == 3 && dicesResult[3] == 4 && dicesResult[4] == 5) {
                    sum = dicesResult[0] + dicesResult[1] + dicesResult[2] + dicesResult[3] + dicesResult[4]
                }


                state.combinations[12].value = sum;
                for (let i = 0; i < 5; i++) {
                    state.dices[i].locked = false;
                    state.dices[i].value = i + 7;
                }
                state.combinations[12].locked = true;
                state.rollNumber = 1;
                state.roundNumber++;
            }
        },

        // Checks total value of large straight
        check14(state) {
            if (!state.combinations[13].locked && state.dices[0].value < 7) {
                var dicesResult = [];
                for (let i = 0; i < state.dices.length; i++) {
                    dicesResult.push(state.dices[i].value)
                }

                dicesResult.sort();
                var sum = 0;
                if (dicesResult[0] == 2 && dicesResult[1] == 3 && dicesResult[2] == 4 && dicesResult[3] == 5 && dicesResult[4] == 6) {
                    sum = dicesResult[0] + dicesResult[1] + dicesResult[2] + dicesResult[3] + dicesResult[4]
                }


                state.combinations[13].value = sum;
                for (let i = 0; i < 5; i++) {
                    state.dices[i].locked = false;
                    state.dices[i].value = i + 7;
                }
                state.combinations[13].locked = true;
                state.rollNumber = 1;
                state.roundNumber++;
            }
        },

        // Checks total value of full house
        check15(state) {
            if (!state.combinations[14].locked && state.dices[0].value < 7) {
                var dicesResult = [];
                for (let i = 0; i < state.dices.length; i++) {
                    dicesResult.push(state.dices[i].value)
                }

                dicesResult.sort();
                var sum = 0;
                if (
                    (
                        (dicesResult[0] == dicesResult[1] && dicesResult[1] == dicesResult[2])
                        &&
                        (dicesResult[3] == dicesResult[4])
                        &&
                        (dicesResult[0] < dicesResult[4])
                    )
                    ||
                    (
                        (dicesResult[0] == dicesResult[1])
                        &&
                        (dicesResult[2] == dicesResult[3] && dicesResult[3] == dicesResult[4])
                        &&
                        (dicesResult[0] < dicesResult[4])
                    )
                ) {
                    sum = dicesResult[0] + dicesResult[1] + dicesResult[2] + dicesResult[3] + dicesResult[4]
                }

                state.combinations[14].value = sum;
                for (let i = 0; i < 5; i++) {
                    state.dices[i].locked = false;
                    state.dices[i].value = i + 7;
                }
                state.combinations[14].locked = true;
                state.rollNumber = 1;
                state.roundNumber++;

            }
        },

        // Returns the total value of all 5 dice
        check16(state) {
            if (!state.combinations[15].locked && state.dices[0].value < 7) {
                var dicesResult = [];
                var sum = 0;
                for (let i = 0; i < state.dices.length; i++) {
                    dicesResult.push(state.dices[i].value)
                    sum += dicesResult[i]
                }

                state.combinations[15].value = sum;
                for (let i = 0; i < 5; i++) {
                    state.dices[i].locked = false;
                    state.dices[i].value = i + 7;
                }
                state.combinations[15].locked = true;
                state.rollNumber = 1;
                state.roundNumber++;
            }
        },

        // Checks if YATZY. Then return 50 points
        check17(state) {
            if (!state.combinations[16].locked && state.dices[0].value < 7) {
                var dicesResult = [];
                var sum = 0;
                for (let i = 0; i < state.dices.length; i++) {
                    dicesResult.push(state.dices[i].value)
                }

                if (dicesResult[0] == dicesResult[1] && dicesResult[1] == dicesResult[2] && dicesResult[2] == dicesResult[3] && dicesResult[3] == dicesResult[4]) {
                    sum = 50;
                }

                state.combinations[16].value = sum;
                for (let i = 0; i < 5; i++) {
                    state.dices[i].locked = false;
                    state.dices[i].value = i + 7;
                }
                state.combinations[16].locked = true;
                state.rollNumber = 1;
                state.roundNumber++;
            }
        },
    }
})

// Component including the five dice objects
Vue.component('dice-bar', {
    props: ['dice'],
    template:
        `
    <div>
        <img class="dice" v-on:click="$emit('lock' + dice.id )" v-bind:class="[{rotate: dice.shouldRotate}, {lockedDice: dice.locked}]" v-for="dice, index in showDices" v-bind:src="'./images/dice' + dice.value + '.jpg'">
    </div>
    `,

    computed: {
        showDices() {
            return store.state.dices
        }
    }
})


// Component including the scoreboard 
Vue.component('score-board', {
    template:
        `
    <div>    
        <div class="scoreboard-container">
            <div class="scoreboard-item">{{scoreboard[0].name}}</div>
            <div class="scoreboard-value-item" v-on:click="$emit('check1')">{{scoreboard[0].value}}</div>
            <div class="scoreboard-item">{{scoreboard[8].name}}</div>
            <div class="scoreboard-value-item" v-on:click="$emit('check9')">{{scoreboard[8].value}}</div>
            <div class="scoreboard-item">{{scoreboard[1].name}}</div>
            <div class="scoreboard-value-item" v-on:click="$emit('check2')">{{scoreboard[1].value}}</div>
            <div class="scoreboard-item">{{scoreboard[9].name}}</div>
            <div class="scoreboard-value-item" v-on:click="$emit('check10')">{{scoreboard[9].value}}</div>
            <div class="scoreboard-item">{{scoreboard[2].name}}</div>
            <div class="scoreboard-value-item" v-on:click="$emit('check3')">{{scoreboard[2].value}}</div>
            <div class="scoreboard-item">{{scoreboard[10].name}}</div>
            <div class="scoreboard-value-item" v-on:click="$emit('check11')">{{scoreboard[10].value}}</div>
            <div class="scoreboard-item">{{scoreboard[3].name}}</div>
            <div class="scoreboard-value-item" v-on:click="$emit('check4')">{{scoreboard[3].value}}</div>
            <div class="scoreboard-item">{{scoreboard[11].name}}</div>
            <div class="scoreboard-value-item" v-on:click="$emit('check12')">{{scoreboard[11].value}}</div>
            <div class="scoreboard-item">{{scoreboard[4].name}}</div>
            <div class="scoreboard-value-item" v-on:click="$emit('check5')">{{scoreboard[4].value}}</div>
            <div class="scoreboard-item">{{scoreboard[12].name}}</div>
            <div class="scoreboard-value-item" v-on:click="$emit('check13')">{{scoreboard[12].value}}</div>
            <div class="scoreboard-item">{{scoreboard[5].name}}</div>
            <div class="scoreboard-value-item" v-on:click="$emit('check6')">{{scoreboard[5].value}}</div>
            <div class="scoreboard-item">{{scoreboard[13].name}}</div>
            <div class="scoreboard-value-item" v-on:click="$emit('check14')">{{scoreboard[13].value}}</div>
            <div class="scoreboard-item">{{scoreboard[6].name}}</div>
            <div class="scoreboard-value-item">{{ sum }}</div>
            <div class="scoreboard-item">{{scoreboard[14].name}}</div>
            <div class="scoreboard-value-item" v-on:click="$emit('check15')">{{scoreboard[14].value}}</div>
            <div class="scoreboard-item">{{scoreboard[7].name}}</div>
            <div class="scoreboard-value-item">{{ bonus }}</div>
            <div class="scoreboard-item">{{scoreboard[15].name}}</div>
            <div class="scoreboard-value-item" v-on:click="$emit('check16')">{{scoreboard[15].value}}</div>
            <div class="scoreboard-item">{{scoreboard[16].name}}</div>
            <div class="scoreboard-value-item" v-on:click="$emit('check17')">{{scoreboard[16].value}}</div>
            <div class="scoreboard-item">{{scoreboard[17].name}}</div>
            <div class="scoreboard-value-item">{{ totalSum }}</div>
        </div>
    </div>
    `,

    computed: {
        scoreboard() {
            return store.state.combinations
        },
        sum() {
            store.state.sum =
                store.state.combinations[0].value +
                store.state.combinations[1].value +
                store.state.combinations[2].value +
                store.state.combinations[3].value +
                store.state.combinations[4].value +
                store.state.combinations[5].value;
            if (store.state.sum > 0) {
                return store.state.sum;
            }
            else return null;
        },
        bonus() {
            if (store.state.sum >= 63) {
                store.state.combinations[7].value = 50;
                return store.state.combinations[7].value;
            }
            else return null;
        },

        totalSum() {
            store.state.totalSum = 0;
            for (let i = 0; i < 17; i++) {

                store.state.totalSum += store.state.combinations[i].value
            }
            return store.state.totalSum;
        },


    },





})


// The app also known as the Vue instance
const app = new Vue({
    el: '#app',

    // Three computed properties, to keep track of synchronously
    computed: {

        // Keeping track of the roll number, to avoid cheaters
        rollNumber() {
            return store.state.rollNumber
        },

        // Keeping track of the round number, to see if the game is over or not
        roundNumber() {
            return store.state.roundNumber
        },

        // Keeping track of the total sum, which will also be displayed when the game is over
        finalResult() {
            return store.state.totalSum
        }



    },

    // methods that calls the mutations in the store
    methods: {
        lock1() {
            store.commit('lock1')
        },
        lock2() {
            store.commit('lock2')
        },
        lock3() {
            store.commit('lock3')
        },
        lock4() {
            store.commit('lock4')
        },
        lock5() {
            store.commit('lock5')
        },
        rollDices() {
            store.commit('rolldices')
        },
        check1() {
            store.commit('check1')
        },
        check2() {
            store.commit('check2')
        },
        check3() {
            store.commit('check3')
        },
        check4() {
            store.commit('check4')
        },
        check5() {
            store.commit('check5')
        },
        check6() {
            store.commit('check6')
        },
        check7() {
            store.commit('check7')
        },
        check9() {
            store.commit('check9')
        },
        check10() {
            store.commit('check10')
        },
        check11() {
            store.commit('check11')
        },
        check12() {
            store.commit('check12')
        },
        check13() {
            store.commit('check13')
        },
        check14() {
            store.commit('check14')
        },
        check15() {
            store.commit('check15')
        },
        check16() {
            store.commit('check16')
        },
        check17() {
            store.commit('check17')
        },
        reloadGame() {
            window.location.reload()
        }
    }

})