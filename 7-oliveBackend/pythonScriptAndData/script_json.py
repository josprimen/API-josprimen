from pandas import read_csv
from pandas import DataFrame
import csv
import json


data = read_csv('datos_aceituna_gilena.csv', usecols=[0, 1, 2, 4, 5, 6, 7, 8], engine='python')
dataframe = DataFrame(data)
dataframe.to_csv("olive_data.csv", index=False)

csvfile = open('olive_data.csv', 'r')
jsonfile = open('olive_data.json', 'w')

fieldnames = ("DIA", "MES", "ANYO", "KGSACEITUNA", "RDTO", "HUMEDAD", "ACIDEZ", "TICKET")
reader = csv.DictReader(csvfile, fieldnames)
jsonfile.write('[')
for row in reader:
    json.dump(row, jsonfile)
    jsonfile.write(',')
    jsonfile.write('\n')
jsonfile.write(']')
