---
title: "bld mv"
description: "Move or rename a pipeline"
---

# mv

Move or rename a pipeline in the local `.bld` directory or on a server.

## Options

| Flag | Short | Description |
|------|-------|-------------|
| `--pipeline <PIPELINE>` | `-p` | The pipeline to move |
| `--target <TARGET>` | `-t` | Destination path |
| `--server <SERVER>` | `-s` | Name of the server to perform the move on |
| `--verbose` | | Increase verbosity |
| `--help` | `-h` | Print help |
| `--version` | `-V` | Print version |

## Examples

Move a local pipeline:

```bash
$ bld mv -p source_pipeline.yaml -t target_pipeline.yaml
```

Move a pipeline on a server:

```bash
$ bld mv -p source_pipeline.yaml -t target_pipeline.yaml -s local_server
```
