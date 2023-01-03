from fastapi import APIRouter

from models.pchome_model import Pchome
from config.database import collection_name

from schemas.pchome_schema import pchomes_serializer, pchome_serializer
from bson import ObjectId

pchome_api_router = APIRouter()

# retrieve
@pchome_api_router.get("/")
async def get_pchomes():
    pchomes = pchomes_serializer(collection_name.find())
    return pchomes

@pchome_api_router.get("/{id}")
async def get_pchome(id: str):
    return pchomes_serializer(collection_name.find_one({"_id": ObjectId(id)}))


# post
@pchome_api_router.post("/")
async def create_pchome(pchome: Pchome):
    _id = collection_name.insert_one(dict(pchome))
    return pchomes_serializer(collection_name.find({"_id": _id.inserted_id}))


# update
@pchome_api_router.put("/{id}")
async def update_pchome(id: str, pchome: Pchome):
    collection_name.find_one_and_update({"_id": ObjectId(id)}, {
        "$set": dict(pchome)
    })
    return pchomes_serializer(collection_name.find({"_id": ObjectId(id)}))

# delete
@pchome_api_router.delete("/{id}")
async def delete_pchome(id: str):
    collection_name.find_one_and_delete({"_id": ObjectId(id)})
    return {"status": "ok"}