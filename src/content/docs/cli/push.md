---
title: "bld push"
description: "Upload a pipeline to a server"
---

# push

Push a local pipeline and its dependencies to a Bld server.

## Options

| Flag | Short | Description |
|------|-------|-------------|
| `--pipeline <PIPELINE>` | `-p` | Name of the pipeline to push |
| `--server <SERVER>` | `-s` | Name of the server to push to |
| `--ignore-deps` | | Skip pushing pipeline dependencies |
| `--verbose` | | Increase verbosity |
| `--help` | `-h` | Print help |
| `--version` | `-V` | Print version |

## Examples

Push a pipeline and its dependencies:

```bash
$ bld push -s local_server -p example_pipeline.yaml
```

Push without dependencies:

```bash
$ bld push -s local_server -p example_pipeline.yaml --ignore-deps
```
