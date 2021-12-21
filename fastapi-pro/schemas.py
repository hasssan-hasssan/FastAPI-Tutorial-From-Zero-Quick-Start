from pydantic import BaseModel


class Post(BaseModel):
    id: int
    title: str
    body: str
    category: str


class UpdatePost(BaseModel):
    title: str
    body: str
    category: str

    class Config:
        orm_mode = True
