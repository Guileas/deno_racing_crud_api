# Install Deno

!!!! Rootless don't work be on root be execute those cmd !!!!!!

1 - curl -fsSL https://deno.land/x/install/install.sh | sh

2 - export DENO_INSTALL="/root/.deno"

3 - export PATH="$DENO_INSTALL/bin:$PATH"

# Lancer l'API 

docker-compose up -d
docker exec -it deno bash
deno run --allow-net --allow-env server.ts
