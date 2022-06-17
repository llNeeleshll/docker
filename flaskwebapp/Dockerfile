FROM python:3

RUN pip install flask
RUN pip install pandas

WORKDIR /usr/app

COPY ./ ./

CMD ["python", "main.py"]