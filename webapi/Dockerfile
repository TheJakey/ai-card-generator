# syntax=docker/dockerfile:1

# Build stage
FROM golang:1.20-alpine AS builder

# Enable Go modules and CGO disabled for static build
ENV CGO_ENABLED=0 GOOS=linux

WORKDIR /app

# Cache go.mod and go.sum first for better build caching
COPY go.mod go.sum ./
RUN go mod download

# Copy the rest of the source code
COPY . .

# Build the binary for the target architecture
RUN --mount=type=cache,target=/root/.cache/go-build \
    GOARCH=$(echo $TARGETPLATFORM | cut -d'/' -f2) \
    go build -o webapi ./cmd/server

# Final stage: minimal image
FROM alpine:3.19

WORKDIR /app

# Copy the binary from the builder stage
COPY --from=builder /app/webapi .

# Set environment variable defaults (optional)
ENV PORT=8080

# Expose the port
EXPOSE 8080

# Run the binary
CMD ["./webapi"]
