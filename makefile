.PHONY: build
	
build:
	ionic build

watch:
	nodemon --exec "make" -w src -e ts,html,css,scss

apk: 
	ionic cordova build --release android

