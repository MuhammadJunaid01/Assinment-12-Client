import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const ViewDetails = () => {
  const [moreInfo, setMoreInfo] = useState([]);
  const [loader, setLoader] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/ourCollection/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setMoreInfo(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoader(false);
      });
  }, []);
  return loader ? (
    <Typography style={{ textAlign: "center" }} variant="h3">
      <CircularProgress />
    </Typography>
  ) : (
    <div>
      <h1></h1>
      <Container>
        <Grid item xs={12} md={6} sm={12}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={moreInfo?.image}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {moreInfo?.name}
                </Typography>
                <Typography gutterBottom variant="p" component="div">
                  {moreInfo?.info}
                </Typography>
                <Box className="rating-box">
                  <Typography variant="h6" color="text.secondary">
                    Price: ${moreInfo?.price}
                  </Typography>
                  <Typography variant="p">
                    <Stack spacing={1}>
                      <Rating
                        name="half-rating-read"
                        defaultValue={moreInfo?.rate}
                        precision={0.5}
                        readOnly
                      />
                    </Stack>
                  </Typography>
                </Box>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Add To Cart
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Container>
    </div>
  );
};

export default ViewDetails;
