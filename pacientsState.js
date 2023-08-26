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
            this.CheckIn = `Doing checkin to pacient ${pacient?.name ?? pacient}`;
            this.Triage = `Doing triage to pacient ${pacient?.name ?? pacient}`;
            this.MedicEvaluation = `Doing medic evaluation to pacient ${pacient?.name ?? pacient}`;
            this.MedicRelease = `Doing medic release to pacient ${pacient?.name ?? pacient}`;
        }     
    }
};

pacientsState.states = {
    checkInState: class extends pacientsState.contracts.iPacientsState {
        changeState = (pacient) => {
            const states = new pacientsState.entities.states(pacient);
            return states.CheckIn;
        };
    },
    triageState: class extends pacientsState.contracts.iPacientsState{
        changeState = (pacient) => {
            const states = new pacientsState.entities.states(pacient);
            return states.Triage;
        };
    },
    medicEvaluationState: class extends pacientsState.contracts.iPacientsState{
        changeState = (pacient) => {
            const states = new pacientsState.entities.states(pacient);
            return states.MedicEvaluation;
        };
    },
    medicReleaseState: class extends pacientsState.contracts.iPacientsState{
        changeState = (pacient) => {
            const states = new pacientsState.entities.states(pacient);
            return states.MedicRelease;
        };
    },
};

pacientsState.tester = {
    test:() => {
        return true;
    }
};

module.exports = pacientsState;