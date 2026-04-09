---
title: "bld cat"
description: "Print a remote pipeline's contents"
---

# cat

Print the contents of a pipeline stored on a Bld server.

## Options

| Flag | Short | Description |
|------|-------|-------------|
| `--pipeline <PIPELINE>` | `-p` | Name of the pipeline to print |
| `--server <SERVER>` | `-s` | Name of the server to fetch from |
| `--verbose` | | Increase verbosity |
| `--help` | `-h` | Print help |
| `--version` | `-V` | Print version |

## Examples

Print a pipeline from a server:

```bash
$ bld cat -s local_server -p example_pipeline.yaml
```
