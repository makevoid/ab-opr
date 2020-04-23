#!/usr/bin/env bash

function disco() {
  redis-cli -h discovery --raw $*
}

function run() {
  cd /api
  node run.js
}

TIME=2
CTR_ADDR_PATH=/contracts/build/contractAddresses.json

while [ "$(disco ping)" != "PONG" ]
do
  echo "discovery redis not up, waiting..." && sleep 1;
done

set -ex

run
