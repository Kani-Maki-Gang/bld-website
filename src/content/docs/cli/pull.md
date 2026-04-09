---
title: "bld pull"
description: "Download a pipeline from a server"
---

# pull

Fetch a pipeline and its dependencies from a Bld server and save them locally.

## Options

| Flag | Short | Description |
|------|-------|-------------|
| `--pipeline <PIPELINE>` | `-p` | Name of the pipeline to pull |
| `--server <SERVER>` | `-s` | Name of the server to pull from |
| `--ignore-deps` | | Skip pulling pipeline dependencies |
| `--verbose` | | Increase verbosity |
| `--help` | `-h` | Print help |
| `--version` | `-V` | Print version |

## Examples

Pull a pipeline and its dependencies:

```bash
$ bld pull -s local_server -p example_pipeline.yaml
```

Pull without dependencies:

```bash
$ bld pull -s local_server -p example_pipeline.yaml --ignore-deps
```
