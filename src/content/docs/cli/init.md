---
title: "bld init"
description: "Initialize a bld project directory"
---

# init

Create a `.bld` directory with a default configuration and pipeline.

## Options

| Flag | Short | Description |
|------|-------|-------------|
| `--server` | `-s` | Initialize a server configuration instead of a client project |
| `--verbose` | | Increase verbosity |
| `--help` | `-h` | Print help |
| `--version` | `-V` | Print version |

## Examples

Initialize a client project:

```bash
$ bld init
```

Initialize a server configuration:

```bash
$ bld init -s
```
