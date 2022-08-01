# 🗄 Project Structure

This project loosely follows the principles of CLEAN architecture. The goal is to create a clear separation of concerns for each module. The aim being that it should be easy to swap in and out various components. To achieve this we follow the concept of layers.

## Layers Concept

![image](../assets/layers-display.png)

All three layers (presentation, application, and infrastructure) are made to communicate with their “siblings”, but the first and last cannot communicate with each other.

This separation is intentional since it allows relevant logic to be contained exclusively within the Application layer, which serves as a link between the other two.

## Folder Structure

```
└── /src
    ├── /pages
    ├── /assets
    ├── /docs
    ├── /presentation
    |   ├── /module1
    |   |   ├── /index.ts
    |   |   ├── /Component.tsx
    |   |   ├── /Component.module.scss
    |   ├── /module2
    |   |   ├── /index.ts
    |   |   ├── /Component.tsx
    |   |   ├── /Component.module.scss
    |   └── /shared
    |       ├── /ComponentThree
    |       ├── /ComponentFour
    |       ├── /ComponentFive
    |       └── /styles
    ├── /application
    |   ├── /types
    |   ├── /services
    |   └── /store
    ├── /infrastructure
    |   ├── /api
    |   |   └── /module1
    |   |   |   ├── /module.dto.ts
    |   |   |   ├── /module.ts
    |   |   |   └── /module.mapper.ts
    |   └── /websocket
    |   |   └── /module1
    |   |   |   ├── /module.dto.ts
    |   |   |   ├── /module.ts
    |   |   |   └── /module.mapper.ts
```
