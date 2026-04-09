---
title: "Node.js Pipeline"
description: "Install, build, and copy artifacts from a Node.js project in a container"
---

# Node.js Pipeline

This example runs a Node.js project build inside a container and copies the output to the host machine.

**What it demonstrates:**
- Running pipelines on the official Node.js LTS image
- Parameterizing the npm script to run
- Collecting build output with the `get` artifact method
- Named steps with a working directory

## Pipeline

### Platform and image

The pipeline runs inside the official Node LTS container. Setting `pull: true` keeps the image up to date.

```yaml
runs_on:
  image: node:lts
  pull: true
```

### Variables

Two variables control the Git branch and the npm script to execute. Both can be overridden at runtime with `-v`.

```yaml
variables:
  branch: master
  script: build-prod
```

### Artifacts

After the `main` job completes, the build output directory is copied from the container to a local path.

```yaml
artifacts:
- method: get
  from: /example_project/path/to/build/files
  to: /some/local/path
  after: main
```

### Jobs

The `main` job clones the repository, installs dependencies, and runs the build script.

```yaml
jobs:
  main:
  - git clone -b ${{branch}} https://some-url-to-the-example-project-repository
  - name: Build project
    working_dir: /example_project
    exec:
    - npm install
    - npm run ${{script}}
```

## Full pipeline

```yaml
name: Example nodejs pipeline
version: 2
runs_on:
  image: node:lts
  pull: true

variables:
  branch: master
  script: build-prod

artifacts:
- method: get
  from: /example_project/path/to/build/files
  to: /some/local/path
  after: main

jobs:
  main:
  - git clone -b ${{branch}} https://some-url-to-the-example-project-repository
  - name: Build project
    working_dir: /example_project
    exec:
    - npm install
    - npm run ${{script}}
```

## Running

```bash
# Run with defaults
bld run -p nodejs-pipeline.yaml

# Override branch and npm script
bld run -p nodejs-pipeline.yaml -v branch=develop -v script=build-staging
```
