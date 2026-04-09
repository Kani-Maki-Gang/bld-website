---
title: "bld ls"
description: "List pipelines locally or on a server"
---

# ls

List pipelines in the local `.bld` directory or on a server.

## Options

| Flag | Short | Description |
|------|-------|-------------|
| `--server <SERVER>` | `-s` | Name of the server to list pipelines from |
| `--verbose` | | Increase verbosity |
| `--help` | `-h` | Print help |
| `--version` | `-V` | Print version |

## Examples

List local pipelines:

```bash
$ bld ls
```

List pipelines on a server:

```bash
$ bld ls -s local_server
```
