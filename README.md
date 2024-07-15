# ScholarRise India

## Project Structure
For detailed project structure, please refer to [Project Structure](ProjectStructure.txt)

## Docker

### Development Environment

To build the development Docker image:

```bash
docker build -t scholarrise-dev -f Dockerfile.dev .
```

To run the development container:

```bash
docker run -p 3000:3000 -v $(pwd):/app scholarrise-dev
```

### Production Environment

To build the production Docker image:

```bash
docker build -t scholarrise-prod -f Dockerfile.prod .
```

To run the production container:

```bash
docker run -p 3000:3000 scholarrise-prod
```


## LICENSE

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.