---
title: ".NET Pipeline"
description: "Build and copy artifacts from a .NET project in a container"
---

# .NET Pipeline

This example builds a .NET project inside a Docker container and copies the compiled artifacts back to the host machine.

**What it demonstrates:**
- Running pipelines on a pulled Docker image
- Using variables for branch and build configuration
- Collecting build artifacts with the `get` method
- Named steps with a working directory

## Pipeline

### Platform and image

The pipeline runs inside the official .NET SDK container. Setting `pull: true` ensures the image is pulled if not available locally.

```yaml
runs_on:
  image: mcr.microsoft.com/dotnet/sdk:6.0-focal
  pull: true
```

### Variables

Two variables control the Git branch and build configuration. Both can be overridden at runtime with `-v`.

```yaml
variables:
  branch: master
  config: release
```

### Artifacts

After the `main` job completes, the compiled output is copied from the container to a local path.

```yaml
artifacts:
- method: get
  from: /example_project/src/ExampleProject/bin/${{config}}/net6.0
  to: /some/local/path
  after: main
```

### Jobs

The `main` job clones the repository and builds the project using `dotnet build`.

```yaml
jobs:
  main:
  - git clone -b ${{branch}} https://some-url-to-the-example-project-repository
  - name: Build project
    working_dir: /example_project
    exec:
    - dotnet build -c ${{config}}
```

## Full pipeline

```yaml
name: Example dotnet pipeline
version: 2
runs_on:
  image: mcr.microsoft.com/dotnet/sdk:6.0-focal
  pull: true

variables:
  branch: master
  config: release

artifacts:
- method: get
  from: /example_project/src/ExampleProject/bin/${{config}}/net6.0
  to: /some/local/path
  after: main

jobs:
  main:
  - git clone -b ${{branch}} https://some-url-to-the-example-project-repository
  - name: Build project
    working_dir: /example_project
    exec:
    - dotnet build -c ${{config}}
```

## Running

```bash
# Run with defaults
bld run -p dotnet-pipeline.yaml

# Override branch and config
bld run -p dotnet-pipeline.yaml -v branch=develop -v config=debug
```
