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

## Disabling tags

A variadic Parser#remove is provided to remove pre loaded tags.

## Error handling

When an error occurs while executing a tag, parsing stops immediately and the error string is returned from Parser#parse.
This ensures the application will not crash, and the end user will be able to report the error.

## Discord specific tags

Discord specific tags are implemented assuming you are using discord.js master. For all tags to function, ensure your Context satisfies this interface:
```typescript
interface Context {
    user: discordjs.User;
    guild: discordjs.Guild;
    channel: discordjs.GuildChannel;
}
```
