all:
	docker build -t buzz/api ./api
	docker build -t buzz/frontend ./frontend
	docker build -t buzz/buzz ./buzz
	docker build -t buzz/proxy ./proxy

up:
	docker-compose up -d

down:
	docker-compose down