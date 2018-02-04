# `lt-cli`

<img src='http://i.imgur.com/e5KPnPp.gif' alt='lt demo' width='532' />

`lt-cli` is a small time tracking cli.

- Each task must have a unique id.
- One task can run at a time.

**Install `lt-cli`:**

`npm i -g lt-cli`

[![JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

***

# cli usage

[`lt` start [$id]](#lt-start-id)  
[`lt` stop](#lt-stop)  
[`lt` add $id $value](#lt-add-id-value)  
[`lt` subtract $id $value](#lt-subtract-id-value)  
[`lt` rm [$id]](#lt-rm-id)  
[`lt` ls [$id]](#lt-ls-id)  
[`lt` log](#lt-log)

***

## `lt` start [$id]

Start a timer. If there is a running timer, `lt` will stop it. If no id is
provided, `lt` will resume the last timer that was stopped.

`lt start foo`

## `lt` stop

Stop the running timer.

## `lt` add $id $value

Add a specific value to a timer. The value should include units, for example:

- 30m
- 0.5h
- 2hr
- 4d
- 4.5h
- 4h30m

`lt add foo 1h7m`

## `lt` subtract $id $value

Subtract a specific value from a timer. The value should include units,
for example:

- 30m
- 0.5h
- 2hr
- 4d
- 4.5h
- 4h30m

`lt subtract foo 37m`

## `lt` rm [$id]

Remove a timer.

If no id is provided, all timers will be removed.

### Flags

- `-f`: Skip confirmation prompt.

## `lt` ls [$id]

List the existing timers and the current duration of each. If a timer is
running, it's id will be highlighted.

If an id is provided, only the matching timer will be listed.

## `lt` log

Event log for all timers.

***

## core

[This is a cli for `lt-core`](https://github.com/juice49/lt-core).

***

🔥 it's `lt`