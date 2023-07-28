# Buerligons integration

Integrate buerligons into your application

## Getting started

1. Clone the repo

   ```sh
   git clone https://github.com/dm385/buerligons-integration.git
   ```

2. Update git submodules. The buerligons repo is a submodule of this git repo.

   ```sh
   git submodule init
   git submodule update
   ```

3. Install required node packages. We are using node for this project.

   ```sh
   yarn
   ```

4. Start the `vite` development server.

   ```sh
   yarn dev
   ```

   As soon as the server is up, the application is available under http://localhost:8085.

5. Make sure a ClassCAD Server is running on `localhost:9091`.

   https://buerli.io/docs/setup-environment/server

   > Since ClassCAD fetches files from the client development server (localhost:8085), the two servers have to run on the same host. E.g. it won't work if the server is running in docker and the client on the host.


## Provied file by URL Parameter

http://localhost:8085?url=/axis.stp
