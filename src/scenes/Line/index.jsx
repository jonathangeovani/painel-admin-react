import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

const Line = () => {
  return (
    <Box m="20px">
      <Header
        title="GRÁFICO DE LINHA"
        subtitle="Visualização dos dados em linha com Nivo Chart"
      />

      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;
