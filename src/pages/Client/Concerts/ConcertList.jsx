import ConcertListTable from "components/ConcertListTable/ConcertListTable";
import Container from "components/ui/Container/Container";
import Title from "components/ui/Title/Title";

const ConcertList = () => {
  return (
    <div>
      <Container marginTB>
        <Title>Концерты</Title>
        <br />
        <ConcertListTable />
      </Container>
    </div>
  );
};

export default ConcertList;
