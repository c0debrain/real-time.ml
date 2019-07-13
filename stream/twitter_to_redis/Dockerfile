FROM python:3.7-alpine
WORKDIR /code
RUN apk add --no-cache gcc musl-dev linux-headers
COPY /stream/twitter_to_redis/requirements.txt ./requirements.txt
RUN pip install -r requirements.txt
COPY . .
CMD ["python", "-u", "twitter_to_redis.py"]