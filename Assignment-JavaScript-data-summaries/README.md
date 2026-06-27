# JavaScript Utility Functions

A collection of small JavaScript utility functions that work with arrays, objects, and functions. This project demonstrates proper handling of `undefined` vs `null` vs `""`, defensive programming with `throw` and `try/catch`, and common built-in methods.

---

## 📋 Starter Data

```javascript
const users = [
    { id: 101, name: " Ada ", scores: [10, 20, 30] },
    { id: 102, name: "", scores: [5, 0, 15] },
    { id: 103, name: null, scores: [7, 14] },
    { id: 104, /* name missing on purpose */ scores: [3, 3, 3, 3] },
    { id: 105, name: "Grace", scores: [] }
];


### 1. `normalizeName(value)`
Normalizes a name value. Returns `"Unknown"` if value is `null`, `undefined`, or trimmed to `""`; otherwise returns `value.trim()`.

**Uses:** `trim()`, `typeof`

```javascript
console.log(normalizeName(" Ada "));
console.log(normalizeName(" "));
console.log(normalizeName(null));
```


### 2. `averageScore(scores)`
Calculates the average of an array of scores.

| Condition | Behavior |
|---|---|
| Not an array | `throw new Error("scores must be an array")` |
| Empty array | Returns `null` |
| Valid array | Returns average rounded to 2 decimal places |

**Uses:** `Array.isArray()`, `Math.round()`, `reduce()`

```javascript
console.log(averageScore([10, 20, 30, 67, 85, 33]));
console.log(averageScore([]));
```


### 3. `buildUserSummary(user)`
Builds a summary object for a single user.

| Condition | Behavior |
|---|---|
| Not a non-null object | `throw new Error("User must be an object")` |

**Returns:** `{ id, name, scoreCount, avg }`

**Uses:** Both dot notation and bracket notation

```javascript
console.log(buildUserSummary(users[0]));
console.log(buildUserSummary(users[3]));
```

### 4. `summarizeUsers(userArray)`
Maps an entire array of users into an array of summaries.

| Condition | Behavior |
|---|---|
| Not an array | `throw new Error("userArray must be an array")` |

**Uses:** `map()`

```javascript
console.log(summarizeUsers(users));
```


### 5. `safeSummarizeUsers(userArray)`
A safe wrapper around `summarizeUsers` using `try/catch`.

| Scenario | Return Value |
|---|---|
| Success | `{ ok: true, data: [...] }` |
| Error | `{ ok: false, error: "<error message>" }` |

```javascript
console.log(safeSummarizeUsers(users).ok);
console.log(safeSummarizeUsers("not an array"));
```


### 6. `getUserDisplayNameById(userArray, id)`
Finds a user by `id` and returns their normalized display name.

| Condition | Behavior |
|---|---|
| `userArray` not an array | `throw new Error("userArray must be an array")` |
| `id` not a number | `throw new Error("id must be a number")` |
| User not found | `throw new Error("user not found")` |

**Uses:** `find()`

```javascript
console.log(getUserDisplayNameById(users, 105));
```


---

## 📝 Part C: Theory Questions

```javascript
// 1) typeof undefined = "undefined"
// 2) typeof null = "object"
// 3) "" is an empty string intentionally filled by the user (input exists but 
//    left blank), whereas null/undefined means the data is not available at all.
//    Concept: "" = "I filled it but left it empty", 
//    null/undefined = "I didn't fill it".


## 📁 Solution Code

The complete solution code is available in the file:

**`test-assignment.js`** — Contains all 6 utility functions with full implementation and test case