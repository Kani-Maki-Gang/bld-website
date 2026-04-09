---
title: "bld hist"
description: "Browse pipeline run history"
---

# hist

Fetch the execution history of pipelines from a Bld server.

## Options

| Flag | Short | Description |
|------|-------|-------------|
| `--server <SERVER>` | `-s` | Name of the server to fetch history from |
| `--state <STATE>` | `-x` | Filter by state: `all`, `initial`, `queued`, `running`, `finished`, `faulted` (default: `running`) |
| `--pipeline <PIPELINE>` | `-p` | Filter by pipeline name |
| `--limit <LIMIT>` | `-l` | Maximum number of results (default: `100`) |
| `--verbose` | | Increase verbosity |
| `--help` | `-h` | Print help |
| `--version` | `-V` | Print version |

## Examples

Show currently running pipelines:

```bash
$ bld hist -s local_server
```

Filter by state:

```bash
$ bld hist -s local_server -x initial
$ bld hist -s local_server -x queued
$ bld hist -s local_server -x finished
$ bld hist -s local_server -x faulted
$ bld hist -s local_server -x all
```

Increase the result limit:

```bash
$ bld hist -s local_server -x running -l 200
```
