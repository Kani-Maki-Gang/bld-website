---
title: "bld stop"
description: "Stop a running pipeline"
---

# stop

Stop a pipeline that is currently running on a Bld server. This triggers a graceful shutdown, cleaning up containers and remote resources associated with the run.

## Options

| Flag | Short | Description |
|------|-------|-------------|
| `--server <SERVER>` | `-s` | Name of the server the pipeline is running on |
| `--run-id <RUN_ID>` | `-i` | ID of the pipeline run to stop |
| `--verbose` | | Increase verbosity |
| `--help` | `-h` | Print help |
| `--version` | `-V` | Print version |

## Examples

Stop a specific run:

```bash
$ bld stop -s local_server -i 8f0159e0-7f5c-4dc6-9b1a-70a219d85450
```
