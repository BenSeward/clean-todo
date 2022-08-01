# ⚙️ Application Layer

The application layer is responsible for applying business logic inside the app, it can interact with all the modules present in the presentation layer and call the services declared inside the infrastructure layer.

```
├── /application
   ├── /services
   ├── /store
   ├── /types
```

### Services

The Services folder contains functions or classes made to bring calculations on the table or execute specific flows from/to the Infrastructure layer.

### Store

This is where the state management and data is held. For our examnple we happen to be using React Context, however this could be swapped out for Redux, Zustand or any other state management tool.

There is a core `store.tsx` file which references multiple sub directories for specific data structures used throughout the project (todo store, user store etc.) This is the central repository for all of your applications state.

### Types

This is where all of the Typescript interfaces and types are stored for the application. The presentation layer can access these if needed. You should lean on these type interfaces to shape the data within your application.
