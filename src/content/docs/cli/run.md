---
title: "bld run"
description: "Execute a pipeline locally or on a server"
---

# run

Execute a Bld pipeline locally or on a remote server.

## Options

| Flag | Short | Description |
|------|-------|-------------|
| `--pipeline <PIPELINE>` | `-p` | Path to pipeline script (default: `default.yaml`) |
| `--server <SERVER>` | `-s` | Name of the server to run on |
| `--detach` | | Detach from execution (server mode only) |
| `--variable <VARIABLES>` | `-v` | Set a variable value. Repeatable |
| `--environment <ENVIRONMENT>` | `-e` | Set an environment variable value. Repeatable |
| `--verbose` | | Increase verbosity |
| `--help` | `-h` | Print help |
| `--version` | `-V` | Print version |

## Examples

Run a pipeline locally:

```bash
$ bld run -p example_pipeline.yaml
```

Run with variables and environment variables:

```bash
$ bld run -p example_pipeline.yaml \
  -v variable1=some_value \
  -v variable2=some_value \
  -e env_variable=some_value
```

Run on a remote server:

```bash
$ bld run -s local_server -p example_pipeline.yaml
```

Run on a server and detach immediately:

```bash
$ bld run -s local_server -p example_pipeline.yaml -d
```

Run on a server with variables, detached:

```bash
$ bld run -s local_server -p example_pipeline.yaml \
  -v variable1=some_value \
  -e env_variable=some_value \
  -d
```
