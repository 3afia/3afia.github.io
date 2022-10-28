#!/bin/bash

# for local testing


echo -e "Listening Port >> [8080]... \nLogs >> [server.log] ...\n" && python3 -m http.server 8080 | tee -a server.log
