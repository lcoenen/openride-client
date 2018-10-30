IONIC = node_modules/.bin/ionic
ENTRY_POINT = www/index.html
APP_NAME = openride

ANDROID_PLATFORM = _android_platform
APK_TEMP_OUTPUT = platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk
SIGNING_KEY = lcoenen.jks
APK_OUTPUT = openride-$(shell jq '.version' package.json -r).apk

.PHONY: build watch apk clean clean_tmp
	
$(ENTRY_POINT): 
	$(IONIC) build

watch:
	nodemon --exec "make" -w src -e ts,html,css,scss

$(APK_TEMP_OUTPUT): $(ENTRY_POINT) $(ANDROID_PLATFORM)
	cordova build --release android

$(ANDROID_PLATFORM): 
	cordova platform add android
	touch $(ANDROID_PLATFORM)

clean_tmp:
	rm /tmp/$(APP_NAME)* -f

apk: $(APK_TEMP_OUTPUT) clean_tmp
	# See https://developer.android.com/studio/publish/app-signing#signapp
	cp $(APK_TEMP_OUTPUT) /tmp/$(APP_NAME)-unaligned-unsigned.apk
	zipalign -v -p 4 /tmp/$(APP_NAME)-unaligned-unsigned.apk /tmp/$(APP_NAME)-unsigned.apk
	apksigner sign --ks $(SIGNING_KEY) --out $(APK_OUTPUT) /tmp/$(APP_NAME)-unsigned.apk

clean: clean_tmp
	rm platforms/* -rf
	rm www/ -rf
	rm $(ANDROID_PLATFORM) -fr
