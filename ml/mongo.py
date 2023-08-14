import pymongo
import pandas as pd
from bson import json_util
import json


def getUsers():
    client = pymongo.MongoClient(<URL>)
    db = client['test']
    collection = db["users"]
    allDocs = collection.find()
    allDocs = json.loads(json_util.dumps(allDocs))
    # allDocs = json.dumps(allDocs, default=str)
    lst = list(allDocs)
    df = pd.DataFrame(lst)
    return df