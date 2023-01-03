
from fastapi import FastAPI
from routes.pchome_route import pchome_api_router

app = FastAPI()

app.include_router(pchome_api_router)