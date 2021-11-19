const atmSpotsElement = document.getElementsByClassName('atmSpots')[0];
const queueElement = document.getElementsByClassName('queue')[0];

class ATM {
    constructor() {
        this.element = document.createElement('div');
        this.element.className = 'atmSpot';
        atmSpotsElement.appendChild(this.element);
        const atmElement = document.createElement('div');
        atmElement.className = 'atm';
        this.element.appendChild(atmElement);
        this.currentUser = undefined;
    }

    setCurrentUser(currentUser) {
        this.currentUser = currentUser;
    }
}

class Person {
    constructor() {
        this.element = document.createElement('div');
        this.element.className = 'person';
        queueElement.appendChild(this.element);
    }

    startUsingATM(atm) {
        this.atmStartUsageTime = Date.now();
        this.atmUsageTime = Math.random() * 9000 + 1000;
        this.atm = atm;
        this.atm.setCurrentUser(this);
        //this.element.style.position = "fixed";
        this.element.style.left = "-150px";
        this.element.style.top = "0px";
        //let cords = atmElement.getBoundingClientRect();
        //console.log(cords.left)
    }

    stopUsingATM() {
        this.atm.setCurrentUser(undefined);
        this.element.style.display = "none";
    }

    stillUsingATM() {
        return Date.now() - this.atmStartUsageTime < this.atmUsageTime;


    }
}

class Queue {
    constructor(initialUsers) {
        this.users = initialUsers;
    }

    push(user) {
        this.users.push(user);
    }

    pop() {
        return this.users.shift();
    }
}

const atms = [new ATM(), new ATM(), new ATM()];
const initialUsers = [];
for (let i = 0; i < 5; i++)
    initialUsers.push(new Person());

const queue = new Queue(initialUsers);

function updateQueue() {
    if (Math.random() < 0.01) {
        queue.push(new Person());
    }

    for (const atm of atms) {
        if (atm.currentUser !== undefined) {
            const currentUser = atm.currentUser;
            if (!currentUser.stillUsingATM()) {
                currentUser.stopUsingATM();
                // TODO: remove user from html
                // queueElement.removeChild(user.element);

            }
        } else {
            const user = queue.pop();
            if (user !== undefined) {
                user.startUsingATM(atm);
                // TODO: move user from queue to specified atm

            }
        }
    }

    window.requestAnimationFrame(updateQueue);
}

window.requestAnimationFrame(updateQueue);