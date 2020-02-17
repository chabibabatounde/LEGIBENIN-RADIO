pm2 stop legibeninradio
pm2 start /home/serveur-node-js/LEGIBENIN-RADIO/app.js -n legibeninradio -l /home/serveur-node-js/LEGIBENIN-RADIO/log.json --log-type json
pm2 reload legibeninradio
pm2 restart legibeninradio