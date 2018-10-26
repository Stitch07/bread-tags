# Bread Tags

Bread tags is a WIP text parser for Discord Bots. It is designed to be a better and efficient successor to [stitchscript](https://github.com/Soumil07/stitchscript).

Bread tags **supports recursive** matching and nested subtags. It is possible to have infinite nested tags looking like this: `{uppercase:{lowercase:{uppercase:stitch}}}`.

**Now supports variables**

# Usage

```js
const { Parser } = require('breadtags')
(async function() {
    console.log(await new Parser().parse('The uppercase of {allargs} is {uppercase:{allargs}}'), {
        args: ['stitch', 'is', 'cool']
    })
})() // The uppercase of stitch is cool is STITCH IS COOL
```

# Data

For useful tags, the developer needs to pass certain data objects to the parse function. These objects are -
* user: The user object of the user running this tag.
* member: The member object of the guildmember running this tag.
* channel: The channel object of the channel this tag is being used in.
* args: An array of arguments passed into this tag. (default to [])

# Creating your own tags

```js
const { Parser, Builder } = require('breadtags')

const HighestRoleTag = new Builder()
    .setType(['highestrole'])
    .setDescription('Sends the name of the member\'s highest role.')
    .hasAction(false)
    .setProcess(ctx => ctx.member.roles.highest.name);

Parser.loadTag(HighestRoleTag)
```

# Builder Functions

* setType: array[string] -> Sets the type/name/aliases of the tag.
* setDescription: string -> Sets the optional description of the tag.
* hasAction: boolean -> Whether the tag carries out an action. (adding a role)
* setProcess: function(context) -> Sets the process function of the tag. Here, context is whatever data you passed into the parse() function.

# More examples

```js
const { Parser } = require('breadtags')
(async function() {
    console.log(await new Parser().parse('The server we are in is called {server}. The user is {username}, with discriminator - {usertag}.'), {
        user: {
            username: 'Stitch',
            tag: 'Stitch#1337'
        },
        guild: {
            name: 'Apex Lounge'
        }
    })
})() // The server we are in is called Apex Lounge. The user is Stitch, with discriminator - Stitch#1337.
```
