stop: 
	docker-compose down
all: stop
	docker-compose up -d --no-deps --build
debug: stop
	docker-compose up --no-deps --build
clean:
	docker container prune
	docker image prune