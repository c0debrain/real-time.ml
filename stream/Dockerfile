FROM python:latest
ADD tweets_to_elasticsearch.py /

RUN pip install python-twitter
RUN pip install python-dotenv

CMD [ "python", "./tweets_to_elasticsearch.py" ]