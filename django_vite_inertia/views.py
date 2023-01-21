from inertia import inertia


@inertia("Home/Index")
def index(request):
    return {"greeting": "Hello, world!"}


@inertia("Home/About")
def about_us(request):
    return {"page_title": "About Us"}
