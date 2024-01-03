# Symbol

Symbol es una dato primitivo, al igual que number y string
Symbol es un dato único e inmutable y puede ser usado como identificador para propiedades de objetos
Symbol es una función, pero no un constructor
Symbol no puede ser usado con el operador new

```js
const miSymbolUnd = Symbol();
miSymbolUnd;
const miSymbolUnd2 = Symbol(undefined);
miSymbolUnd2;

const miSymbolStringKey = Symbol("descripcion");
miSymbolStringKey;

const miSymbolNull = Symbol(null);
miSymbolNull;

const miSymbolObj = Symbol({});
miSymbolObj;

const miSymbolObj2 = Symbol({ a: 1 });
miSymbolObj2;

const miSymbolNum = Symbol(1);
miSymbolNum;
```

Todos los Symbols anteriores crearán un symbol único mientras se ejecute el programa. No se crean en el registro global de symbols. Si quieres crear un Symbol disponible entre diferentes archivos y diferentes ambitos usa los metodos Symbol.for() y Symbol.keyFor()

# Usos

- Puedes usarlos como elementos unicos de un objeto al estilo de un Enum en otros lenguajes
- Identificadores unicos para propiedades de objetos, así evitar colisiones al agregar nuevas propiedades.
- Evitar que ciertas propiedades sean enumerables, así no se mostraran en un for in o en un Object.keys()
- Definir como un objeto puede ser iterado usando un protocolo de de iteración
- Todas las propiedades estaticas de Symbol son usadas como metodos de los objetos que implementan el protocolo de iteración. [Well'know symbols](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#Well-known_symbols)
