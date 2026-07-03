install:
	npm ci ## Эта команда полезна при первом клонировании репозитория (или после удаления node_modules)
brain-games:
	node bin/brain-games.js ## позволит запускать игру без глобальной установки
brain-even:
	node games/brain-even.js
brain-calc:
	node games/brain-calc.js
brain-gcd:
	node games/brain-gcd.js
brain-progression:
	node games/brain-progression.js
brain-prime:
	node games/brain-prime.js
publish:
	npm publish --dry-run ## командует не добавлять пакет в основной каталог NPM
link:
	npm link ## установка пакета в систему
lint:
	npx eslint . ## запуск eslint
lint-fix:
	npx eslint --fix . ## Исправить ошибки, которые выдает линтер