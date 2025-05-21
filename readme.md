# JavaScript Bàsic

## Introducció

**JavaScript** és un llenguatge de programació utilitzat principalment en **pàgines web**, però també aplicat en programació i administració general.  

- És un llenguatge amb múltiples capes d’abstracció, llibreries i frameworks. Alguns exemples són:  
  - **Angular**: Framework de desenvolupament d'aplicacions web.  
  - **Three.js**: Llibreria de modelatge 3D per al navegador.  
  - **Node.js**: *entorn d'execució* de JavaScript dissenyat per executar codi JavaScript **fora del navegador**.  

Es va crear el maig de 1995 per Brendan Eich i es va convertir a l'ECMAScript (estàndard oficial de JavaScript gestionat per ECMA International) l'any 1997.  

Les noves versions del llenguatge van començar el juny de 2015, quan es va reanomenar la versió de JavaScript com a ES2015 o també ES6. Aquesta edició va introduir novetats importants com classes i mòduls. A partir d’aquesta edició, es publiquen actualitzacions anuals (ES2016, ES2017, etc.).  

Totes les versions modernes són **compatibles amb les anteriors**, cosa que permet actualitzacions progressives.  

Aquesta tasca ha de servir per consolidar el teu coneixement del JavaScript modern. Aquest coneixement et servirà per treballar amb els frameworks de desenvolupament web amb seguretat.  

## Objectiu  

Resoldre els problemes plantejats per assolir els coneixements mínims necessaris de JavaScript per avançar en l'itinerari de desenvolupament web que et proposis.  

Els conceptes de JavaScript a cobrir són:  
- Funcions de fletxa (Arrow Functions)  
- Callbacks  
- Operadors rest i spread  
- Transformacions d'array amb funcions pures  
- Promises  

## Informació tècnica de l'exercici  

- Clona aquest repositori:  
```sh  
$ git clone https://github.com/IT-Academy-BCN/starter-code-basics-js.git  
```  

- Desconnecta el teu repositori del repositori de IT Academy. Utilitza la següent ordre de git:  
```sh  
$ git remote rm origin  
```  

- Connecta el teu repositori amb el teu compte de GitHub:  
```sh  
$ git remote add origin <URL-del-teu-repositori>  
```  

- Treballa els exercicis al fitxer `script.js`.  
- Puja els canvis al teu repositori.  

>**Important**:  
>Aquest repositori té testing automatitzat, és a dir, quan pugis el resultat al repositori s'executaran automàticament els tests i sabràs la teva nota d'aquest exercici. Pots pujar totes les vegades que vulguis fins que resolguis tots els casos.  

>- Si vols anar fent comprovacions dels teus avenços, pots executar els tests al terminal mitjançant la comanda:  
>```bash  
>npm run test  
>```  


## Requeriments

- Les instruccions estan en format [gherkin](https://cucumber.io/docs/gherkin/reference)

```gherkin
    Feature: Arrow Functions

        Scenario: Add two numbers
         **Given** two numbers
         **When** the `addTwoNumbers` function is called with these numbers
         **Then** it should return their sum

        Scenario: Generate a random integer between 0 and 100
         **When** the `randomNumber` function is called
         **Then** it should return an integer between 0 and 100 inclusive

        Scenario: Person class greeting
         **Given** a `Person` instance with a name
         **When** the `greet` method is called
         **Then** it should log "Hola, [name]" to the console

        Scenario: Print numbers from an array
         **Given** an array of numbers
         **When** `printNumbers` is called with this array
         **Then** it should log each number to the console sequentially

        Scenario: Delayed message printing
         **When** `printDelayedMessage` is called
         **Then** it should log "Missatge després de 3 segons" after 3 seconds

    Feature: Ternary Operator

        Scenario: Check driving eligibility
        **Given** a person's age
        **When** `canDrive` is called with this age
        **Then** it should return "Pots conduir" if age ≥ 18, else "No pots conduir"

        Scenario: Compare two numbers
        **Given** two numbers `num1` and `num2`
        **When** `guessTheBigger` function is called with these numbers
        **Then** it should return which number is larger or if they are equal

        Scenario: Classify number type
        **Given** a number
        **When** `guessTypeNumber` is called with the number
        **Then** it should return "Positiu", "Negatiu", or "Zero" based on the input

        Scenario: Find the maximum of three numbers
        **Given** three numbers
        **When** `findTheMaxNumber` is called
        **Then** it should return the largest number

        Scenario: Classify numbers as odd/even
        **Given** an array of numbers
        **When** `guessOddOrEvenNumber` processes them
        **Then** it should log "Parell" for even numbers and "Imparell" for odd numbers


    Feature: Callbacks

        Scenario: Process a number with a callback
        **Given** a number and a callback
        **When** `processNumber` is called
        **Then** the callback should receive the number as an argument

        Scenario: Calculator with callback
        **Given** two numbers and an operation callback
        **When** `calculator` is called
        **Then** it should return the result of the callback operation

        Scenario: Delayed greeting
        **Given** a name and a callback
        **When** `waitAndGreet` is called
        **Then** the callback should receive the name after 2 seconds

        Scenario: Process array elements
        **Given** an array and a callback
        **When** `processElements` is called
        **Then** the callback should be invoked for each element

        Scenario: Process string to uppercase
        **Given** a string and a callback
        **When** `processString` is called
        **Then** the callback should receive the uppercase version of the string


    Feature: Rest & Spread Operators

        Scenario: Merge two arrays
        **Given** two arrays of numbers
        **When** `arrayNumbers3` is created using spread
        **Then** it should contain all elements from both source arrays

        Scenario: Sum rest parameters
        **Given** multiple numbers as arguments
        **When** `addRestParameters` is called
        **Then** it should return their sum

        Scenario: Clone object with new property
        
        **When** `citizenPlusCity` is created using spread
        **Then** it should be a copy of the original object with an added `city` property

        Scenario: Spread array as function arguments
        **Given** an array of numbers
        **When** spread in a function call
        **Then** `resultSpreadArgumentsToFunction` should equal their sum

        Scenario: Merge two objects
        **When** `mergeObject` is created using spread
        **Then** it should contain properties from both source objects


    Feature: Array Transformations

        Scenario: Square numbers in array
        **Given** an array of numbers
        **When** `squareNumbersArray` is created using `map`
        **Then** it should contain the squares of the original numbers

        Scenario: Filter even numbers
        **Given** an array of numbers
        **When** `evenNumbersArray` is created using `filter`
        **Then** it should contain only even numbers

        Scenario: Find first number > 10
        **Given** an array of numbers
        **When** `firstGreaterThan10` is determined using `find`
        **Then** it should return the first number greater than 10

        Scenario: Sum all numbers
        **Given** an array of numbers
        **When** `totalCalculated` is determined using `reduce`
        **Then** it should equal the sum of all numbers

        Scenario: Double numbers > 10 and sum
        **Given** an array of numbers
        **When** processed with `filter`, `map`, and `reduce`
        **Then** `calculateDoubleGreaterThan10NumbersAddition` should return the correct result


    Feature: Loops

        Scenario: Iterate with forEach
        **Given** an array of names
        **When** `printNamesWithForEach` is called
        **Then** it should log each name using `forEach`

        Scenario: Iterate with for...of
        **Given** an array of names
        **When** `printNamesWithForOf` is called
        **Then** it should log each name using `for...of`

        Scenario: Filter even numbers with loop
        **Given** an array of numbers
        **When** `evenNumbers` is created using a loop
        **Then** it should contain only even numbers

        Scenario: Iterate object properties
        **Given** an object
        **When** `printKeyValuePairs` is called
        **Then** it should log each key-value pair using `for...in`

        Scenario: Break loop on condition
        **Given** an array of numbers
        **When** `printUntilFive` is called
        **Then** it should stop logging when encountering 5


    Feature: Promises & Async/Await

        Scenario: Resolve a simple promise
        **When** `myFirstPromise` is resolved
        **Then** it should return "Hola, món"

        Scenario: Handle promise rejection
        **Given** an input to `promiseWithReject`
        **When** the promise is rejected
        **Then** it should throw an error for invalid inputs

        Scenario: Async/await execution
        **When** `asyncAwaitFunction` is called
        **Then** it should log "Hola, món" after resolving

        Scenario: Handle errors with try/catch
        **Given** an input to `tryCatchFunction`
        **When** processing the input
        **Then** it should log "Correcte" or handle the error

        Scenario: Execute multiple promises
        **When** `allPromises` is resolved via `Promise.all`
        **Then** it should return an array of results from all promises
```

### Avaluació
Has de treure una nota de **7 sobre 10** per poder passar a la següent tasca de l'itinerari.

*nota* el test també comprova que els commits segueixen les convencions actuals de la pàgina https://conventionalcommits.org


