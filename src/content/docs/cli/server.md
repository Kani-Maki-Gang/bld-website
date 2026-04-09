---
title: "bld server"
description: "Start a bld server"
---

# server

Start a Bld server instance. See the [Server documentation](/docs/server/) for configuration details.

## Options

| Flag | Short | Description |
|------|-------|-------------|
| `--host <HOST>` | `-H` | Host address to bind to |
| `--port <PORT>` | `-P` | Port to listen on |
| `--verbose` | | Increase verbosity |
| `--help` | `-h` | Print help |
| `--version` | `-V` | Print version |

## Examples

Start with defaults from configuration:

```bash
$ bld server
```

Start on a specific host and port:

```bash
$ bld server -H 127.0.0.1 -P 6080
```
