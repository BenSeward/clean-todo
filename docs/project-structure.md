# π Project Structure

This project loosely follows the principles of CLEAN architecture. The goal is to create a clear separation of concerns for each module. The aim being that it should be easy to swap in and out various components. To achieve this we follow the concept of layers.

## Layers Concept

![image](../assets/layers-display.png)

All three layers (presentation, application, and infrastructure) are made to communicate with their βsiblingsβ, but the first and last cannot communicate with each other.

This separation is intentional since it allows relevant logic to be contained exclusively within the Application layer, which serves as a link between the other two.

## Folder Structure

```
βββ /src
    βββ /pages
    βββ /assets
    βββ /presentation
    |   βββ /module1
    |   |   βββ /index.ts
    |   |   βββ /Component.tsx
    |   |   βββ /Component.module.scss
    |   βββ /module2
    |   |   βββ /index.ts
    |   |   βββ /Component.tsx
    |   |   βββ /Component.module.scss
    |   βββ /shared
    |       βββ /ComponentThree
    |       βββ /ComponentFour
    |       βββ /ComponentFive
    |       βββ /styles
    βββ /application
    |   βββ /types
    |   βββ /services
    |   βββ /store
    βββ /infrastructure
    |   βββ /api
    |   |   βββ /module1
    |   |   |   βββ /module.dto.ts
    |   |   |   βββ /module.ts
    |   |   |   βββ /module.mapper.ts
    |   βββ /websocket
    |   |   βββ /module1
    |   |   |   βββ /module.dto.ts
    |   |   |   βββ /module.ts
    |   |   |   βββ /module.mapper.ts
```
