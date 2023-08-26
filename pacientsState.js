const pacientsState = {};

pacientsState.contracts = {
    iPacientsState: class {
        changeState = (pacient) => {}
    }
};

pacientsState.entities = {
    pacient: class {
        constructor(name, age){
            this.name = name;
            this.age = age;
            this.currentState = new pacientsState.states.checkInState();
        }

        changeState = (newState) =>{
            this.currentState = newState;
        };
        
        getCurrentState = () =>{
            return this.currentState.changeState(this);
        };
    },
    states: class {
        constructor(pacient){
            this.checkIn = `Doing checkin to pacient ${pacient?.name}`;
            this.triage = `Doing triage to pacient ${pacient?.name}`;
            this.medicEvaluation = `Doing medic evaluation to pacient ${pacient?.name}`;
            this.medicRelease = `Doing medic release to pacient ${pacient?.name}`;
        }     
    }
};

pacientsState.states = {
    checkInState: class extends pacientsState.contracts.iPacientsState {
        changeState = (pacient) => {
            const states = new pacientsState.entities.states(pacient);
            return states.checkIn;
        };
    },
    triageState: class extends pacientsState.contracts.iPacientsState{
        changeState = (pacient) => {
            const states = new pacientsState.entities.states(pacient);
            return states.triage;
        };
    },
    medicEvaluationState: class extends pacientsState.contracts.iPacientsState{
        changeState = (pacient) => {
            const states = new pacientsState.entities.states(pacient);
            return states.medicEvaluation;
        };
    },
    medicReleaseState: class extends pacientsState.contracts.iPacientsState{
        changeState = (pacient) => {
            const states = new pacientsState.entities.states(pacient);
            return states.medicRelease;
        };
    },
};

pacientsState.tester = {
    test:() => {
        return true;
    }
};

module.exports = pacientsState;