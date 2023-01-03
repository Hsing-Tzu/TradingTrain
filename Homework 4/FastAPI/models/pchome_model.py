from pydantic import BaseModel

class Pchome(BaseModel):
    name: str
    description: str
    completed: bool
    date: str