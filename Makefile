all:
	cd ./api
		docker build -t buzz/api .
	cd ..
	cd ./frontend
		docker build -t buzz/frontend .
	cd ..
	cd ./buzz
		docker build -t buzz/buzz .
	cd ..
	cd ./proxy
		docker build -t buzz/proxy .
	cd ..

up:
	docker-compose up -d

down:
	docker-compose down