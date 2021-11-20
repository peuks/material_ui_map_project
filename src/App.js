import { CssBaseline, Grid } from "@material-ui/core";
import { Header, Map, List } from "./components";
import useSetup from "@/hooks/useSetup";
const App = () => {
  const { setCoords, setBounds, coords } = useSetup();
  return (
    <>
      {/* MUI CSS Normalize */}
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map coords={coords} setCoords={setCoords} setBounds={setBounds} />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
