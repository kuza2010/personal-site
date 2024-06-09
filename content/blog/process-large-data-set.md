---
title: Processing large data set
description: How to process large data set
img: /blog/process-large-data-set/elephant.webp
alt: how to process/read large data set
languageTags: [ jdbc, db, result-set ]
created: 2024-06-09T16:57:00
lastModified: 2024-06-09T16:57:00
---

As a developer, we seldom have to deal with processing large tables for which the JVM machine cannot allocate enough
space. But if we had to? Some time back, I was chosen to write a simple app that should synchronize two physically
different databases. Simply read data from one source and write them to another source. For some database tables, the
difference could contain more than millions of rows. So, I just couldn't read all data and process them at once.

In the article I share my solution.

If you want some practise or find code snippet listed in this article, please check
this [repository](https://github.com/kuza2010/read_large_data_example).

## Table of content

- [First attempt](#first-attempt)
- [The second attempt](#the-second-attempt)
- [Other ways](#other-ways)

## First attempt

As a first attempt I simply loop over all tables that should be migrated and read them into the memory and write to the
destination. In pseudocode it looks like:

```text
for table in tables:
    data = reade.select_all(table)
    writer.insert_all(data)
```

This solution has a fighting chance till we have a deal with a relatively small tables. But not in muy case. I got
`OutOfMemoryException` during local tests. I was pretty bummed, so I started looking into other options...

## The second attempt

The solution is based on `ResultSet` abstraction that is represent the result of a sql query. Essentially `ResultSet` is
a cursor that allows us move back and forward within the whole result. To create a `ResultSet` we need `Statement`
object with SQL query. For example:

```java
Connection connection = dataSource.getConnection();
Statement statement = connection.createStatement()
ResultSet resultSet = statement.executeQuery("select * from table");
```

We should fine tune the code above to read data in chunks. `ResultSet` created with default setting will contain all
rows returned by sql query. This comes from
the <a href="https://jdbc.postgresql.org/documentation/query/" target="_blank" style="text-decoration: underline">
documentation:</a>

<blockquote>
    <p>By default the driver collects all the results for the query at once</p>
</blockquote>

To read data in chunks we need to things. Set fetch size to desired value. It will force `ResultSet` return specified
number of rows. Choose this value according your use case. Then - set auto commit mode to `false` just to prevent
closing the cursor at the end of transaction. Transaction will be deemed finished as soon as all data were fetched. So
if we do not change auto commit mode all data will be kept in our result set.

```java
Connection connection = dataSource.getConnection();
Statement statement = connection.createStatement()

connection.setAutoCommit(false);
statement.setFetchSize(100_000);

ResultSet resultSet = statement.executeQuery("select * from table");
```

Steps higher up allow us to read the data in chunks.

Let's now calculate how many round trips our backend issue to the database. If our sql query returns 1 million rows and
fetch size set to `100_000` our backend trip 10 times to database. I think you get the point 🧠

Choose right fetch size for your case!

## Other ways

Of course using `ResultSet` is not a cure-all. There are other ways how to do that, at present I know:

- You could simply Stream the data, just use Spring Data JPA Stream. The good article
  <a href="https://vladmihalcea.com/spring-data-jpa-stream/" target="_blank" style="text-decoration: underline">here</a>
- In some cases you could find MIN and MAX value for unique column of your table (numeric id as an example) and slice
  your data using `WHERE` syntax

