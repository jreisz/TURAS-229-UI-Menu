
gh-pages
--------
dev:
	npm start
deploy:
	npm run deploy

.envcmd-rc
----------
dev:
	npx env-cmd -e DEV  npm run start	
build:
	npx env-cmd -e TEST  npm run build  	
