import { RssFeed } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Container } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
const Parts = () => {
  const [parts, setParts] = useState([]);
  const [loader, setLoader] = useState(true);
  console.log("parts", parts);
  useEffect(() => {
    fetch("https://infinite-waters-60535.herokuapp.com/parts")
      .then((res) => res.json())
      .then((data) => {
        setParts(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoader(false);
      });
  }, []);
  return (
    <div>
      <h1>hello parts</h1>

      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {parts.map((part) => (
              <Grid key={part?._id} item xs={12} sm={12} md={3}>
                <Card style={{ height: "280px" }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={part?.image}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography variant="h6">{part?.name}</Typography>
                      {/* <Typography variant="p">
                        {part?.info.slice(0, 10)}
                      </Typography> */}
                      <Typography variant="button">
                        <ZoomOutMapIcon></ZoomOutMapIcon>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Parts;
