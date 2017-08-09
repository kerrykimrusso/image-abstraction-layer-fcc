Image Abstraction Layer API
===========================

User Stories
------------
1. User Story: I can get the image URLs, alt text and page urls for a set of images relating to a given search string.

2. User Story: I can paginate through the responses by adding a ?offset=2 parameter to the URL.

3. User Story: I can get a list of the most recently submitted search strings.

Example Usage
-------------

- Image Search: /api/v1/imagesearch/<serach term>?offset=# 
- Browse recent search queries: /api/v1/imagesearch