import { Section, Navigation, EntryList, EntryCard } from "@/components";

const Entries = () => {
  return (
    <Section>
      <Navigation />
      <EntryList>
        <EntryCard />
        <EntryCard />
        <EntryCard />
        <EntryCard />
      </EntryList>
    </Section>
  );
};

export default Entries;
