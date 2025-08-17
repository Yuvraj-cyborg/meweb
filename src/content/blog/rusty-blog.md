---
title: 'Rust Memory Safety: Ownership, Borrowing & References'
date: 2025-05-07
description: 'Learn how Rust prevents memory errors at compile time through its unique ownership system'
---

# **Memory Safety in Rust**
---

&nbsp;

Rust's ownership system eliminates entire classes of memory bugs while maintaining performance. Here's how it works:

&nbsp;

### **1. Ownership Rules**
&nbsp;

The foundation of Rust's memory safety is built on three key ownership rules:

- Each value has exactly one owner
- When the owner goes out of scope, the value is dropped
- Assignment transfers ownership (moves)

Here's a simple example demonstrating ownership:

```rust
fn main() {
    let s1 = String::from("hello"); // s1 owns the string
    let s2 = s1;                    // Ownership moves to s2

    // println!("{}", s1);          // Error! Value was moved
    println!("{}", s2);             // This works
}
```

&nbsp;

### **2. Borrowing (References)**

&nbsp;

Borrowing allows you to reference data without taking ownership:

- Create read-only references with `&`
- Multiple immutable borrows are allowed
- References must always be valid

```rust
fn calculate_length(s: &String) -> usize {
    s.len()
}

fn main() {
    let s = String::from("hello");
    let len = calculate_length(&s);
    println!("Length: {}", len);
}
```

&nbsp;

### **3. Mutable References**

&nbsp;

When you need to modify borrowed data:

- Only one mutable reference is allowed at a time
- No immutable borrows can exist simultaneously
- Prevents data races at compile time

&nbsp;

```rust
fn modify(s: &mut String) {
    s.push_str(", world!");
}

fn main() {
    let mut s = String::from("hello");
    modify(&mut s);
    println!("{}", s); // Prints "hello, world!"
}
```

&nbsp;

### **Practical Example**

&nbsp;

Here's a practical example that brings these concepts together:

&nbsp;

```rust
fn process_text(text: &str) -> String {
    let mut result = String::new();
    result.push_str("Processed: ");
    result.push_str(text);
    result
}

fn main() {
    let input = String::from("Rust is awesome");
    let output = process_text(&input);
    println!("{}", output);
}
```
