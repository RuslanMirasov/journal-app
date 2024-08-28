import { Header, Footer, Main, EntryForm, Entries } from "@/components";

function App() {
  return (
    <>
      <Header />
      <Main>
        <EntryForm />
        <Entries />
      </Main>
      <Footer />
    </>
  );
}

export default App;
