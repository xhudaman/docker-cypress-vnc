#!/bin/bash
# if [ -f /tmp/.X20-lock ]; then
Xvfb -ac :20 -screen 0 1920x1080x16 &
sleep 1
x11vnc -display :20 -N -forever -bg -o "/tmp/x11vnc.log"
sleep 1
DISPLAY=:20 fluxbox -log /tmp/fluxbox.log &
wait
# else
#   echo "Xvfb server is already running."
# fi
