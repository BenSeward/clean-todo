import type { NextPage } from "next";
import Head from "next/head";
import { ToDoList } from "../presentation/ToDoList";
import { Container } from "../presentation/shared/Container";

function Home(): JSX.Element {
  return (
    <div>
      <Head>
        <title>To-Do App | CLEAN Architecture</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <h1>Tasks</h1>
        <ToDoList />
      </Container>
    </div>
  );
}

export default Home;
