const pacientsState = require('./pacientsState');

describe('control test', () => {
    test('call-tester', () => {
        expect(pacientsState.tester.test()).toBeTruthy();
    });
});

describe('pacient state test', () => {
    test('change-pacient-to-triage', () => {
        /*CheckIn*/
        // Arrange  
        let pacient = new pacientsState.entities.pacient('francisco lacerda', 45);
        const states = new pacientsState.entities.states(pacient);

        // Act
        let state = pacient.getCurrentState();
        
        // Assert
        expect(state).toBe(states.checkIn);

        /*Triage*/
        // Arrange  
        pacient.changeState(new pacientsState.states.triageState(pacient));

        // Act
        state = pacient.getCurrentState();

        // Assert
        expect(state).toBe(states.triage);
    });

    test('change-pacient-to-medic-evaluation', () => {
        /*CheckIn*/
        // Arrange  
        let pacient = new pacientsState.entities.pacient('francisco lacerda', 45);
        const states = new pacientsState.entities.states(pacient);

        // Act
        let state = pacient.getCurrentState();
        
        // Assert
        expect(state).toBe(states.checkIn);

        /*Triage*/
        // Arrange  
        pacient.changeState(new pacientsState.states.triageState(pacient));

        // Act
        state = pacient.getCurrentState();

        // Assert
        expect(state).toBe(states.triage);

        /*MedicEvaluation*/
        // Arrange  
        pacient.changeState(new pacientsState.states.medicEvaluationState(pacient));

        // Act
        state = pacient.getCurrentState();

        // Assert
        expect(state).toBe(states.medicEvaluation);
    });

    test('change-pacient-to-medic-release', () => {
        /*CheckIn*/
        // Arrange  
        let pacient = new pacientsState.entities.pacient('francisco lacerda', 45);
        const states = new pacientsState.entities.states(pacient);

        // Act
        let state = pacient.getCurrentState();
        
        // Assert
        expect(state).toBe(states.checkIn);

        /*Triage*/
        // Arrange  
        pacient.changeState(new pacientsState.states.triageState(pacient));

        // Act
        state = pacient.getCurrentState();

        // Assert
        expect(state).toBe(states.triage);

        /*MedicEvaluation*/
        // Arrange  
        pacient.changeState(new pacientsState.states.medicEvaluationState(pacient));

        // Act
        state = pacient.getCurrentState();

        // Assert
        expect(state).toBe(states.medicEvaluation);

        /*MedicRelease*/
        // Arrange  
        pacient.changeState(new pacientsState.states.medicReleaseState(pacient));

        // Act
        state = pacient.getCurrentState();

        // Assert
        expect(state).toBe(states.medicRelease);
    });
}); 