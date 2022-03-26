FROM cypress/included:6.4.0

RUN apt --allow-releaseinfo-change update && apt -y install x11vnc xvfb fluxbox

CMD ["bash"]
