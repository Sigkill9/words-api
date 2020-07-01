# words-api

### NOTES

This is a first no frills pass. 
A quick, dirty and fairly performant linear search. 
The time complexity is O(n).

Since the data length is known to be fixed search times are fairly predictable, but if (n) is expected to grow than this solution may be less than optimal.

A binary or recursive search may prove to be a better solution.

### Install the app
```javascript
  npm install
```

### Run the app

```bash
  npm run dev
```

the app runs on `localhost:3000`

-----

## ENDPOINT
  http://localhost:3000/search?term=fab

  http://localhost:3000/search?term=FAB

  http://localhost:3000/search?term=FAb&limit=10

  http://localhost:3000/search?term=FaB&limit=25

****
### Above queries should ALL return the same (Mixed Cased) results
```json
[
"FAB",
"Faba",
"Fabaceae",
"fabaceous",
"Fabe",
"fabella",
"Fabens",
"Faber",
"Faberg",
"Faberge",
"fabes",
"Fabi",
"Fabian",
"Fabyan",
"Fabianism",
"Fabianist",
"Fabiano",
"Fabien",
"fabiform",
"Fabio",
"Fabiola",
"Fabyola",
"Fabiolas",
"Fabius",
"Fablan"
]
```

--------------------------------------------------------------------------------
## words-api
