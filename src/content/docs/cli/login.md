---
title: "bld login"
description: "Authenticate with a bld server"
---

# login

Initiate the authentication process for a Bld server. Opens a browser tab to complete the OIDC login flow.

## Options

| Flag | Short | Description |
|------|-------|-------------|
| `--server <SERVER>` | `-s` | Name of the server to authenticate with |
| `--verbose` | | Increase verbosity |
| `--help` | `-h` | Print help |
| `--version` | `-V` | Print version |

## Examples

Log in to a server:

```bash
$ bld login -s local_server
# Opens a browser tab to complete authentication.
# Login completed successfully!
```
