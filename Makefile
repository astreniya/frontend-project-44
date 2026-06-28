install:
	npm ci ## Эта команда полезна при первом клонировании репозитория (или после удаления node_modules)
brain-games:
	node bin/brain-games.js ## позволит запускать игру без глобальной установки
publish:
	npm publish --dry-run ## командует не добавлять пакет в основной каталог NPM