FROM python:3.10

WORKDIR /api

COPY requirements.txt ./

RUN pip install -r requirements.txt

COPY ./src ./src

CMD ["python", "./src/app.py"]
