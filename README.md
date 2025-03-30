# BFF on AWS

A Backend for Frontend (BFF) implementation using AWS Lambda and API Gateway. This project aggregates data from JSONPlaceholder API to demonstrate BFF pattern.

## Project Structure

```
bff-on-aws/
├── src/                    # Source code directory
│   ├── app.js             # Main Lambda function
│   ├── package.json       # Node.js dependencies
│   └── package-lock.json  # Locked dependencies
├── template.yml           # AWS SAM template
├── samconfig.toml         # SAM configuration
└── .gitignore            # Git ignore rules
```

## Features

- Aggregates posts and users data from JSONPlaceholder API
- Implements BFF pattern using AWS Lambda
- Exposes a single endpoint for combined data
- Serverless architecture using AWS SAM

## Prerequisites

- AWS CLI
- AWS SAM CLI
- Node.js 18.x
- AWS Account with appropriate permissions

## Setup

1. Install dependencies
```bash
cd src
npm init -y
npm install axios
```

2. Build the application (from project root):
```bash
sam build
```

3. Deploy to AWS (from project root):
```bash
sam deploy --guided
```

## API Endpoint

- **URL**: `/posts-with-users`
- **Method**: GET
- **Authentication**: None
- **Response**: Combined posts and users data

## Development

1. Local testing (from project root):
```bash
sam local start-api
```

2. Invoke function locally (from project root):
```bash
sam local invoke BffFunction
```

## Architecture

- AWS Lambda function (Node.js 18.x)
- API Gateway for HTTP endpoint
- Serverless deployment using AWS SAM
- External API integration with JSONPlaceholder

## Dependencies

- axios: ^1.8.4 (HTTP client)

## Notes

- The function has a 10-second timeout
- Memory allocation is set to 128MB
- Uses x86_64 architecture
- No authentication required (can be added as needed)