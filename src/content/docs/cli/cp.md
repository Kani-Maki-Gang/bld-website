---
title: "bld cp"
description: "Copy a pipeline locally or on a server"
---

# cp

Copy a pipeline to a new path, either in the local `.bld` directory or on a server.

## Options

| Flag | Short | Description |
|------|-------|-------------|
| `--pipeline <PIPELINE>` | `-p` | The pipeline to copy |
| `--target <TARGET>` | `-t` | Destination path |
| `--server <SERVER>` | `-s` | Name of the server to copy on |
| `--verbose` | | Increase verbosity |
| `--help` | `-h` | Print help |
| `--version` | `-V` | Print version |

## Examples

Copy a local pipeline:

```bash
$ bld cp -p source_pipeline.yaml -t target_pipeline.yaml
```

Copy a pipeline on a server:

```bash
$ bld cp -p source_pipeline.yaml -t target_pipeline.yaml -s local_server
```
