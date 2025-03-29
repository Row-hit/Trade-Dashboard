import SideDrawer from "../../components/SideDrawer";
import DashboardLayout from "../../components/DashboardLayout";
import Portfolio from "./components/Portfolio";
import PriceSection from "./components/PriceSection";
import { Grid, GridItem, HStack, useEditable } from "@chakra-ui/react";
import Transaction from "./components/Transaction";
import { InfoCard } from "./components/InfoCard";
import { useEffect } from "react";
import fetchExample from "../../api/Query/exampleQuery";
import { useQuery } from "@tanstack/react-query";

const Dashboard = () => {
  const exampleQuery = useQuery({
    queryKey: ["example"],
    queryFn: fetchExample,
  });
  if (exampleQuery.isLoading) return <div>Loading....!!!</div>;
  return (
    <DashboardLayout title="Dashboard">
      <Grid
        gap="5"
        templateColumns={{
          base: "repeat(1, 1fr)",
          lg: "repeat(2, 1fr)",
        }}
      >
        <GridItem
          colSpan={{
            base: "1",
            lg: "2",
          }}
        >
          <Portfolio />
        </GridItem>

        <GridItem colSpan={1}>
          <PriceSection />
        </GridItem>
        <GridItem colSpan={1}>
          <Transaction />
        </GridItem>
        <GridItem colSpan={1}>
          <InfoCard title="loan" img="url(/Shape1.png)" />
        </GridItem>
        <GridItem colSpan={1}>
          <InfoCard title="Contact" img="url(/Shape2.png)" inverted />
        </GridItem>
      </Grid>
    </DashboardLayout>
  );
};

export default Dashboard;
