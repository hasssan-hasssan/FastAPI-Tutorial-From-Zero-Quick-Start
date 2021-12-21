from fastapi import FastAPI, HTTPException, status
from objects import *
from schemas import Post, UpdatePost
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()


origins = [
    "*",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# 127.0.0.1:8000/posts
# 127.0.0.1:8000/posts/{ID}
# 127.0.0.1:8000/get-posts-by-category/network
# 127.0.0.1:8000/search


@app.get("/")
def home():
    return {"Data": "Hello World!"}


@app.get("/posts")
def get_posts():
    post_list = []
    for post_id in post_objects:
        post_list.append(post_objects[post_id])
    if post_list:
        return post_list
    else:
        raise HTTPException(status_code=404, detail="There are not any posts.")


@app.get("/posts/{ID}")
def get_post(ID: int):
    for post_id in post_objects:
        if post_id == ID:
            return post_objects[post_id]

    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND)


@app.get("/get-posts-by-category/{category}")
def get_posts_by_category(category: str):
    post_list = []
    for post_id in post_objects:
        if post_objects[post_id]["category"] == category:
            post_list.append(post_objects[post_id])

    if post_list:
        return post_list
    else:
        return {"Data": "Not found any post by this category"}


@app.get("/search")
def get_posts_by_search(keyword: str):
    post_list = []
    for post_id in post_objects:
        if (
            keyword in post_objects[post_id]["title"]
            or keyword in post_objects[post_id]["body"]
        ):
            post_list.append(post_objects[post_id])
    if post_list:
        return post_list
    else:
        return {"Data": "there is not any post."}


@app.post("/new-post/{ID}")
def create_post(ID: int, post: Post):
    if ID in post_objects:
        raise HTTPException(status_code=400, detail="Post ID is already exists")

    post_objects[ID] = {
        "title": post.title,
        "body": post.body,
        "category": post.category,
    }
    return post_objects[ID]


@app.put("/update-post/{ID}")
def update_post(ID: int, post: UpdatePost):
    if ID not in post_objects:
        raise HTTPException(status_code=404, detail="There is no any post by this ID")

    if post.title != None:
        post_objects[ID]["title"] = post.title

    if post.body != None:
        post_objects[ID]["body"] = post.body

    if post.category != None:
        post_objects[ID]["category"] = post.category

    return post_objects[ID]


@app.delete("/delete-post/{ID}")
def delete_post(ID: int):
    if ID not in post_objects:
        raise HTTPException(status_code=404, detail="There is no any post by this ID")

    del post_objects[ID]
    return {"Data": "Post successfully deleted"}
