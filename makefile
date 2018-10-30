IONIC = node_modules/.bin/ionic

.PHONY: build
	
build:
	$(IONIC) build

watch:
	nodemon --exec "make" -w src -e ts,html,css,scss

apk: 
	$(IONIC) cordova build --release android

