@ECHO OFF
start /d "./client" ng serve --open
start /d "./server" nest start
start /d "./backend" fastapi run backend.py