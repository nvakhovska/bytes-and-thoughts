---
title: SOLID in Simple Words
date: 2025-04-02
category: "Software Design"
---

# What is SOLID and why do we need it?

When we are beginners, everything looks very simple: create a function - it works. But the bigger project - the bigger mess. Change something - scares you, because everything could break. That's why we need SOLID principles, they help us write understandable, flexible, and easy-to-support code.

---

### ✅ S — Single Responsibility Principle

A class (or function) should do only one action.

> 🧠 Analogy: Let`s imagine that you have a kitchen knife. It can cut food, that's all. Imagine you will open bottles with it, hammer nails, or cut your hair? It will be broken soon. Same with the code.

**Bad:**

```ts
class UserService {
  createUser() {...}
  sendWelcomeEmail() {...} // not his business!
}
```

**Good:**

```ts
class UserService {
createUser() {...}
}

class EmailService {
sendWelcomeEmail() {...}
}
```

---

### ✅ O — Open/Closed Principle

Code should be open for extension, but closed for changes.

> 🧠 Analogy: Let's think about LEGO. You`re not breaking blocks, you add new ones. Same thing with code.

**Bad:** add changes to the existing class with every new sale type.

**Good:** creating new classes that will extend behavioral.

---

### ✅ L — Liskov Substitution Principle

If you have an ancestor class, its children should work the same way, without breaking logic.

> 🧠 Analogy: if instead of a juicer you will give someone a bigger juicer, it should make juice too, and not cook cookies.

---

### ✅ I — Interface Segregation Principle

A lot of small interfaces are better than one huge.

> 🧠 Analogy: no need to force someone who only wants to put the kettle on to make dishes too. Every interface should do only what it needs to do.

---

### ✅ D — Dependency Inversion Principle

We should rely not on specific classes, we should rely on abstractions (interfaces).

> 🧠 Analogy: TV could be controlled not only by a specific remote but by any that is standard.

---

### ✨ Conclusion

**SOLID** — it's like road rules for developers. They are not limiting you, they help you achieve your goals faster and without accidents 🚗  
Write less, but thoughtfully. Code should not only “work”, it should be understandable, comfortable, and safe for the future.
