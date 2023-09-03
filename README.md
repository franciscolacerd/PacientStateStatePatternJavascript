# Pacient State - State Pattern - Javascript
State Pattern Javascript implementation of an Hospital pacient state

The State Pattern is used to manage the behavior of an object as its internal state changes. In this example, the IPacientState class defines a method ChangeState to perform actions based on the patient's state. Concrete states like TriageState and MedicEvaluationState implement this class to perform specific actions. The Pacient class holds a reference to the current state and delegates actions to it. This pattern promotes flexibility and simplifies the code by encapsulating each state's behavior.

------

The state pattern is a behavioral software design pattern that allows an object to alter its behavior when its internal state changes. This pattern is close to the concept of finite-state machines. The state pattern can be interpreted as a strategy pattern, which is able to switch a strategy through invocations of methods defined in the pattern's interface.

The state pattern is used in computer programming to encapsulate varying behavior for the same object, based on its internal state. This can be a cleaner way for an object to change its behavior at runtime without resorting to conditional statements and thus improve maintainability.

![State_Design_Pattern_UML](https://upload.wikimedia.org/wikipedia/commons/e/ec/W3sDesign_State_Design_Pattern_UML.jpg)

https://en.wikipedia.org/wiki/State_pattern

------
## How to run

1. Clone project

2. Run to install dependencies
```npm
npm i
```

3. Run to start Jest
```npm
jest
```

------

## Javascript Implementation

### 1. Declare entities 

```javascript
  const pacientsState = {};

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
```

### 2. Declare the state base class

```javascript
pacientsState.contracts = {
    iPacientsState: class {
        changeState = (pacient) => {}
    }
};
```

### 3. Declare concrete state subclasses

```javascript
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

module.exports = pacientsState;
```

### 4. Unit test it (NUnit)

```javascript
  const pacientsState = require('./pacientsState');

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
```
