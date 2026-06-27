// Starter Data
const users = [
    { id: 101, name: " Ada ", scores: [10, 20, 30] },
    { id: 102, name: "", scores: [5, 0, 15] },
    { id: 103, name: null, scores: [7, 14] },
    { id: 104, /* name missing on purpose */ scores: [3, 3, 3, 3] },
    { id: 105, name: "Grace", scores: [] }
];

// FUNCTION 1: normalizeName
// Normalizes name value: null/undefined/empty string → "Unknown"
function normalizeName(value) {
    // value === null → checks if value is null
    // typeof value === 'undefined' → checks if value is undefined (using typeof)
    // value.trim() === "" → calls trim() then checks if result is empty string
    if (value === null || typeof value === 'undefined' || value.trim() === "" ) {
        return 'Unknown'
    } 
    // value.trim() → removes whitespace from both ends of string
    return value.trim();
}

// Test case for function 1
console.log(normalizeName(" Ada ")); // Expected: "Ada"
console.log(normalizeName(" ")); // Expected: "Unknown"
console.log(normalizeName(null)); // Expected: "Unknown"


// FUNCTION 2: averageScore
// Calculates array average, returns null if empty, throws error if not array
function averageScore(scores) {
    // Array.isArray() → checks if scores is an array
    if (!Array.isArray(scores)) {
        throw new Error('scores must be an array')
    }
    // scores.length → checks array length, 0 means empty
    if (Array.isArray(scores) && scores.length == 0) {
        return null;
    }
    // reduce() → sums all elements in the array
    // (sum, num) => sum + num → callback: sum is accumulator, num is current value
    // 0 → initial value of accumulator
    const total = scores.reduce(
        (sum, num) => sum + num, 0,
    );
    // total / scores.length → average formula
    const avg = total/scores.length;
    // Math.round(avg * 100) / 100 → rounds to 2 decimal places
    return Math.round(avg * 100)/100
}

// Test case for function 2
console.log(averageScore([10, 20, 30, 67, 85, 33])); // expected: 40.83
console.log(averageScore([])); // expected: null


// FUNCTION 3: buildUserSummary
// Builds a summary object for a user: id, name, scoreCount, avg
function buildUserSummary(user) {
    // typeof user !== 'object' → checks if data type is not object
    // user === null → null in JS has type "object", so checked separately
    if (user === null || typeof(user) !== 'object') {
        throw new Error('User must be an object') 
    } 
    return {
        id : user.id, // dot notation → accesses id property
        name : normalizeName(user.name), // calls normalizeName for the name
        scoreCount : Array.isArray(user['scores']) ? user['scores'].length : 0, // bracket notation → accesses scores property with ['scores']
        avg : Array.isArray(user.scores) ? averageScore(user.scores) : null  // ternary operator → condition ? true : false
    }; 
}

// Test case for function 3
console.log(buildUserSummary(users[0]));   // Expected: { id: 101, name: "Ada", scoreCount: 3, avg: 20 }
console.log(buildUserSummary(users[3]));   // expected: { id: 104, name: 'Unknown', scoreCount: 4, avg: 3 }


// FUNCTION 4: summarizeUsers
// Maps entire user array into an array of summaries
function summarizeUsers(userArray) {
    if (!Array.isArray(userArray)) {
        throw new Error('userArray must be an array');
    }
    return userArray.map(buildUserSummary);
}


// FUNCTION 5: safeSummarizeUsers
// Safe wrapper using try/catch
function safeSummarizeUsers(userArray) {
    try {
        // try → code block that may throw an error
        const result = summarizeUsers(userArray);
        return {
            ok : true, // success → ok: true
            data : result  // data contains the summary result
        };
    } 

    catch (err){
        // catch → catches any thrown error
        // err.message → error message from throw
        return {
            ok : false, // failure → ok: false
            error : err.message // error contains the error message
        };
    }
}

// Test case for function 5
console.log(safeSummarizeUsers(users).ok); // expected: true
console.log(safeSummarizeUsers("not an array"));   // expected: { ok: false, error: 'userArray must be an array' }


// FUNCTION 6: getUserDisplayNameById
// Finds user by id, returns normalized name
function getUserDisplayNameById(userArray, id) {
    // Validation: userArray must be an array
    if (!Array.isArray(userArray)) {
        throw new Error('userArray must be an array');
    }
    // typeof id !== 'number' → validates that id is a number type
    if (typeof(id) !== 'number') {
        throw new Error('id must be a number');
    }
    

    // const found = userArray.find(function(u){
        // return u.id === u;
    // });

    // Using arrow function => instead of general function like above
    
    // find() → searches for the first element that matches the condition
    // u => u.id === id → arrow function: for each user u, check if u.id equals id
    const found = userArray.find(u => u.id === id);
    
    // If not found, found will be undefined (falsy)
    if (!found) {
        throw new Error('user not found');
    }
    // Returns normalized name
    return normalizeName(found.name);
}

// Test case for function 6
console.log(getUserDisplayNameById(users, 105));   // expected: Grace

// Part C Answers
// 1) typeof undefined = "undefined"
// 2) typeof null = "object"
// 3) "" is an empty string intentionally filled by the user (input exists but left blank),
//    whereas null/undefined means the data is not available at all.
//    Concept: "" = "I filled it but left it empty", null/undefined = "I didn't fill it".