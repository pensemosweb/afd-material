# Para generar keys unicas en react

```js
crypto.randomUUID();
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
Math.random().toString(36).substring(2);
```
