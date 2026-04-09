---
title: "bld check"
description: "Validate a pipeline file"
---

# check

Validate a pipeline file for syntax errors, either locally or against a server.

## Options

| Flag | Short | Description |
|------|-------|-------------|
| `--pipeline <PIPELINE>` | `-p` | Path to pipeline script (default: `default.yaml`) |
| `--server <SERVER>` | `-s` | Name of the server to check the pipeline against |
| `--verbose` | | Increase verbosity |

## Examples

Validate the default local pipeline:

```bash
$ bld check
```

Validate a specific pipeline against a server:

```bash
$ bld check -s local_server -p example_pipeline.yaml
```
