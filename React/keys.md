# Para generar keys unicas en react

```js
crypto.randomUUID(); // "67a92b0e-86c8-48c7-a4a0-957f01b24afb
```

o tambien:

```js
import { v4 as uuidv4 } from "uuid";
uuidv4();
```

```js
crypto.randomBytes(16).toString("hex");
```

o tambien:

```js
Math.random().toString(36); // '0.zjukog5hxyc'
Math.random().toString(36).substring(2); // "zjukog5hxyc"
```
