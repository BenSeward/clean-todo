# 🎨 Presentation Layer

The presentation layer is responsible for the user interfaces and interactions from the user. This is usually one of the largest layers within the structure.

This layer reads from the application layer, and should never have any dependencies or communication with the infrastructure layer. The presentation layer is split into the following parts:

```
├── /presentation
    ├── /pages
    ├── /module1
    |   ├── /index.ts
    |   ├── /Component.tsx
    |   └── /Component.module.scss
    ├── /module2
    |   ├── /index.ts
    |   ├── /Component.tsx
    |   └── /Component.module.scss
    └── /shared
        ├── /module3
        ├── /module4
        └── /styles
```
