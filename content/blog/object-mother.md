---
title: Object Mother
description: How to simplify the creation of test objects
img: /blog/object-mother/object-mother.webp
alt: java testing pattern
languageTags: [ java, testing, pattern ]
created: 2026-01-05T15:20:00
lastModified: 2026-01-05T15:20:00
---

When we write tests (I hope you do 🙂), from one test to another we constantly need objects with different
characteristics (properties). Creating objects for test purposes is always painful. Some developers, in order to save
time, start creating objects directly inside `@Test` methods; others create private helper methods that instantiate
objects for tests. I do not like this approached because these one are not extendable.

Today, I am going to show you how I deal with this noisy problem.

## Table of contents

- [Object Mother intent](#object-mother-intent)
- [Key advantages](#key-advantages)
- [Example](#example)
- [Personal research](#personal-research)

## Object Mother intent

The intent of writing Object Mother classes is to provide prefabricated objects for our tests. In short, the Object
Mother pattern simplifies test object creation and feels similar to the Factory pattern.

<p class="text-right">
    <a href="https://martinfowler.com/bliki/ObjectMother.html" style="text-decoration: underline">Martin Fowler</a>
</p>

## Key advantages

When we introduce an Object Mother for test objects, we:

- improve **readability**, since in our tests we see expressive names that reflect the essence of the created object
- improve **encapsulation**, since it hides the details of object instantiation behind a dedicated Object Mother class

## Example

For example, we have a `User` record that represents a user in the system. It can be described as:

```java
package ad.example.model;

public record User(
    String name,
    String role,
    String email,
    Boolean active,
    byte[] password
) {}
```

Then a basic Object Mother implementation could look like this:

```java
package ad.example.model;

@With
@NoArgsConstructor
public class UserObjectMother {

    private String name = "Artem";
    private Boolean active = true;
    private String role = "Developer";
    private byte[] password = "pswd".getBytes();
    private String email = "kyza20106@yandex.ru";

    public static UserObjectMother aUser() {
        return new UserObjectMother();
    }

    public User build() {
        return new User(name, role, email, active, password);
    }
}
```

Further, if you want to get a specialized User instance for test purposes (for example, an inactive user), you can write
something like this:

```java
public static UserObjectMother anInactiveUser() {
    return aUser().withActive(false);
}
```

And use this static method in your test:

```java
package ad.example.service;

@Test
public void inactiveUserShouldNotBePermitted() {
    // given
    User inactiveUser = UserObjectMother.anInactiveUser().build();

    // assert
}
```

## Personal research

I personally use this approach many times and have developed a few simple rules. To create a really useful Object
Mother, I follow the steps below:

1. Use Lombok’s @With — it gives your Object Mother class the ability to use wither methods, which allow you to build
   flexible test objects without boilerplate. This is somewhat similar to the Test Object Builder pattern.
2. Use an all-args constructor — try to use the all-args constructor of the original class inside the build method of
   your Object Mother class. This forces you to update the Object Mother whenever the original class changes (a property
   is added or removed).
3. Use an LLM — to speed up your work, prepare a prompt for your LLM to generate Object Mother classes on the fly.