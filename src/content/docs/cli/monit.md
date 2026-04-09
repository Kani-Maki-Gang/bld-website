---
title: "bld monit"
description: "Monitor a running pipeline"
---

# monit

Connect to a Bld server and stream the live output of a running pipeline.

## Options

| Flag | Short | Description |
|------|-------|-------------|
| `--server <SERVER>` | `-s` | Name of the server to connect to |
| `--pipeline <PIPELINE>` | `-p` | Name of the pipeline to monitor (most recent run) |
| `--pipeline-id <PIPELINE_ID>` | `-i` | Specific run ID to monitor. Takes precedence over `--pipeline` |
| `--last` | | Monitor the last invoked pipeline. Takes precedence over all other selectors |
| `--verbose` | | Increase verbosity |
| `--help` | `-h` | Print help |
| `--version` | `-V` | Print version |

## Examples

Monitor the latest run of a named pipeline:

```bash
$ bld monit -s local_server -p example_pipeline.yaml
```

Monitor a specific run by ID:

```bash
$ bld monit -s local_server -i 8f0159e0-7f5c-4dc6-9b1a-70a219d85450
```

Monitor the very last run regardless of pipeline:

```bash
$ bld monit --last
$ bld monit -s local_server --last
```
