FROM python:3.7-alpine
WORKDIR /code
RUN apk add --no-cache gcc musl-dev linux-headers
COPY /stream/redis_to_elasticsearch/requirements.txt ./requirements.txt
RUN pip install -r requirements.txt
COPY . .
CMD ["python", "-u", "redis_to_elasticsearch.py"]