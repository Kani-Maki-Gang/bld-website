---
title: "bld rm"
description: "Remove a pipeline from a server"
---

# rm

Remove a registered pipeline from a Bld server.

## Options

| Flag | Short | Description |
|------|-------|-------------|
| `--pipeline <PIPELINE>` | `-p` | Name of the pipeline to remove |
| `--server <SERVER>` | `-s` | Name of the server to remove from |
| `--verbose` | | Increase verbosity |
| `--help` | `-h` | Print help |
| `--version` | `-V` | Print version |

## Examples

Remove a pipeline from a server:

```bash
$ bld rm -s local_server -p example_pipeline.yaml
```
