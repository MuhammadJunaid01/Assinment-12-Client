import { RssFeed } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";

import {
  Button,
  CardActionArea,
  CircularProgress,
  Container,
} from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import "./parts.css";
import Modal from "@mui/material/Modal";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const Parts = () => {
  const [open, setOpen] = React.useState(false);
  const [modalData, setModalData] = useState([]);
  const [modalDataLoader, setModalDataLoader] = useState(true);
  const handleModalOpen = (id) => {
    console.log("modal id", id);
    fetch(`https://infinite-waters-60535.herokuapp.com/parts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setModalData(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setModalDataLoader(false);
      });
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  // modal
  const [parts, setParts] = useState([]);
  const [loader, setLoader] = useState(true);

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
  return loader ? (
    <Typography style={{ textAlign: "center" }} variant="h1">
      <CircularProgress />
    </Typography>
  ) : (
    <div className="partsContainer">
      <div className="availablePartsInfo">
        <h1>Now Available Parts In Our Shop</h1>
      </div>

      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {parts.map((part) => (
              <Grid key={part?._id} item xs={12} sm={12} md={3}>
                <Card className="partsCard">
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={part?.image}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography variant="h6">
                        {part?.name.slice(0, 20)}
                      </Typography>
                      {/* <Typography variant="p">
                        {part?.info.slice(0, 10)}
                      </Typography> */}
                      <Button
                        onClick={() => handleModalOpen(part?._id)}
                        className="zoomBtn"
                        variant="outlined"
                      >
                        <ZoomOutMapIcon></ZoomOutMapIcon>
                      </Button>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>

          <div>
            {/* <Button >Open modal</Button> */}

            <Box style={{ textAlign: "center" }}>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    {modalData?.name}
                  </Typography>
                  <img
                    className="modalImage"
                    src={modalData?.image}
                    alt="modalimage"
                  ></img>
                  <br />
                  <Typography variant="p">{modalData?.info}</Typography>
                  <Box className="rating-box">
                    <Typography variant="h6" color="text.secondary">
                      Price: ${modalData?.price}
                    </Typography>
                    <Typography variant="p">
                      <Stack spacing={1}>
                        <Rating
                          name="half-rating-read"
                          defaultValue={modalData?.rate}
                          precision={0.5}
                          readOnly
                        />
                      </Stack>
                    </Typography>
                  </Box>
                </Box>
              </Modal>
            </Box>
          </div>
        </Box>
      </Container>
    </div>
  );
};

export default Parts;
