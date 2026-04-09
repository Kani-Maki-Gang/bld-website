---
title: "bld cron"
description: "Manage cron jobs on a server"
---

# cron

Manage scheduled pipeline runs (cron jobs) on a Bld server. Available subcommands: `cat`, `add`, `ls`, `update`, `rm`.

## cron cat

Print detailed information for a registered cron job.

### Options

| Flag | Short | Description |
|------|-------|-------------|
| `--server <SERVER>` | `-s` | Name of the server |
| `--id <ID>` | `-i` | ID of the target cron job |
| `--verbose` | | Increase verbosity |
| `--help` | `-h` | Print help |
| `--version` | `-V` | Print version |

### Examples

```bash
$ bld cron cat -s local -i 5592508f-507c-4224-a7af-1983c2ccb971
```

## cron add

Add a new cron job to a server.

### Options

| Flag | Short | Description |
|------|-------|-------------|
| `--server <SERVER>` | `-s` | Name of the server |
| `--pipeline <PIPELINE>` | `-p` | Name of the target pipeline |
| `--schedule <SCHEDULE>` | `-S` | Cron schedule expression |
| `--variable <VARIABLES>` | `-v` | Set a variable value. Repeatable |
| `--environment <ENVIRONMENT>` | `-e` | Set an environment variable. Repeatable |
| `--verbose` | | Increase verbosity |
| `--help` | `-h` | Print help |
| `--version` | `-V` | Print version |

### Examples

```bash
$ bld cron add -s local -p sample-pipeline.yaml -S '10 * * * * * *' \
  -v var1=hello -v var2=world -e env1='hello world'
```

## cron ls

List registered cron jobs on a server.

### Options

| Flag | Short | Description |
|------|-------|-------------|
| `--server <SERVER>` | `-s` | Name of the server |
| `--id <ID>` | `-i` | Filter by cron job ID |
| `--pipeline <PIPELINE>` | `-p` | Filter by pipeline name |
| `--schedule <SCHEDULE>` | `-S` | Filter by schedule expression |
| `--default <IS_DEFAULT>` | `-d` | Fetch only default cron jobs (`true` or `false`) |
| `--limit <LIMIT>` | `-l` | Maximum number of results |
| `--verbose` | | Increase verbosity |
| `--help` | `-h` | Print help |
| `--version` | `-V` | Print version |

### Examples

List all cron jobs:

```bash
$ bld cron ls -s local
```

Filter by pipeline or limit results:

```bash
$ bld cron ls -s local -p sample-pipeline.yaml
$ bld cron ls -s local -p sample-pipeline.yaml -l 10
$ bld cron ls -s local -l 10 -d true
```

## cron update

Update an existing cron job on a server.

### Options

| Flag | Short | Description |
|------|-------|-------------|
| `--server <SERVER>` | `-s` | Name of the server |
| `--id <ID>` | `-i` | ID of the cron job to update |
| `--schedule <SCHEDULE>` | `-S` | New cron schedule expression |
| `--variable <VARIABLES>` | `-v` | Set a variable value. Repeatable |
| `--environment <ENVIRONMENT>` | `-e` | Set an environment variable. Repeatable |
| `--verbose` | | Increase verbosity |
| `--help` | `-h` | Print help |
| `--version` | `-V` | Print version |

### Examples

```bash
$ bld cron update -s local -i 5592508f-507c-4224-a7af-1983c2ccb971 \
  -S '10 * * * * * *' -v var1=hello -e env1=world
```

## cron rm

Remove a cron job from a server.

### Options

| Flag | Short | Description |
|------|-------|-------------|
| `--id <CRON_JOB_ID>` | `-i` | ID of the cron job to remove |
| `--server <SERVER>` | `-s` | Name of the server |
| `--verbose` | | Increase verbosity |
| `--help` | `-h` | Print help |
| `--version` | `-V` | Print version |

### Examples

```bash
$ bld cron rm -s local -i 5592508f-507c-4224-a7af-1983c2ccb971
```
