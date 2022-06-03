# Saka Search: Web Crawler and alternate Search Engine
This is a Natural Language Programming (NLP) and Information Retrieval (IR) project that uses Python to crawl web pages and index them.

The project employs the following features:
- A web crawler that utilizes crawls web pages and stores the content of the web pages in a database. The crawler is iplemented using the **[Beautiful Soup](https://www.crummy.com/software/BeautifulSoup/)** library.
- An **SQLite** database that stores the web pages and their content. The database also store lemmatisized words and their frequencies, as well as the links between web documents.
- An **inverted index** has been employed as a data structure to map words to their locations in the documents.
- The **Porter Stemming Algorithm**, porter stemmer, has been employed to remove commoner morphological and inflexional endings from words.

The project can be modified to create localized search features across news websites, among other uses. Feel free to contact me for any questions or comments about the project at <hello@lukorito.dev>.