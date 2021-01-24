# Frontend

## Getting Started

### Local Certificate (Required)

Frist make sure you have go installed:

```
sudo snap install --classic go
```

From: https://github.com/FiloSottile/mkcert

In a separate directory:

```
sudo apt-get install libnss3-tools

git clone https://github.com/FiloSottile/mkcert && cd mkcert
go build -ldflags "-X main.Version=$(git describe --tags)"
```

You'll need to move the newly built `mkcert` binary to `/usr/local/bin`.

Once `mkcert` is installed:

```
./script/ssl
```

Add an entry to your hosts file (`/etc/hosts`):

```
127.0.0.1    notes.test
```

Restart your browsers.

### Local Dev Server

Once the local cert is installed, you can run `yarn start`. It will print out the full URL with port to connect to.
