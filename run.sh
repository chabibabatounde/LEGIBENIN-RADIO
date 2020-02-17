pm2 stop legibeninradio
pm2 start app.js -n legibeninradio -l log.json --log-type json -- --port 9002
pm2 reload legibeninradio
pm2 restart legibeninradio