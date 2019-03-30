# bread-tags

bread-tags is a minimal and performant tags parser supporting infinitely nested tags.

## Usage

```js
const Parser = require('breadtags');

// inside an async function
console.log(await new Parser().parse('A random fruit is {uppercase:{choose:orange;apple;banana}}'))
// A random fruit is ORANGE/APPLE/BANANA
```

## Context

Users can pass in a context to make tags more aware. It is passed into the *run* function of every tag.

## Creating your own tags

All tags (including built-ins) satisfy an interface. 
```typescript
interface Tag {
    aliases: Array<string>;
    name: string;
    run: Function;
}
```
Users can pass a tag implementing this interface into `Parser#load`.
A synchronous `Parser#loadAll` is also provided to load all tags from a directory.