//!---------------------
import * as React from "react";
import { useEffect, useState } from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import Link from "@mui/joy/Link";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import Favorite from "@mui/icons-material/Favorite"; //? WHY CAN"T I LOCATE THIS AND HOW CAN I RESOLVE IT?

function MultipleInteractionCard(props) {
  return (
    <div>
      {" "}
      {props.games &&
        props.games.map((game) => {
          return (
            <Box
              sx={{
                minHeight: 350,
              }}
              key={game.id}
            >
              <a href="/test"> Test </a>{" "}
              <Card
                variant="outlined"
                sx={(theme) => ({
                  width: 300,
                  gridColumn: "span 2",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  resize: "horizontal",
                  overflow: "hidden",
                  gap: "clamp(0px, (100% - 360px + 32px) * 999, 16px)",
                  transition: "transform 0.3s, border 0.3s",
                  "&:hover": {
                    borderColor: theme.vars.palette.primary.outlinedHoverBorder,
                    transform: "translateY(-2px)",
                  },
                  "& > *": {
                    minWidth: "clamp(0px, (360px - 100%) * 999,100%)",
                  },
                })}
              >
                <AspectRatio
                  variant="soft"
                  sx={{
                    flexGrow: 1,
                    display: "contents",
                    "--AspectRatio-paddingBottom":
                      "clamp(0px, (100% - 360px) * 999, min(calc(100% / (16 / 9)), 300px))",
                  }}
                >
                  <img src={game.background_image} loading="lazy" alt="" />
                </AspectRatio>{" "}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    maxWidth: 200,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                    }}
                  >
                    <div>
                      <Typography
                        level="h2"
                        sx={{
                          fontSize: "md",
                        }}
                        mb={0.5}
                      >
                        <Link
                          href="#container-responsive"
                          overlay
                          underline="none"
                          sx={{
                            color: "text.primary",
                            "&.Mui-focusVisible:after": {
                              outlineOffset: "-4px",
                            },
                          }}
                        >
                          <b> {game.name} </b>{" "}
                        </Link>{" "}
                      </Typography>{" "}
                      {/* <Typography level="body2">
                        released: {game.name}{" "}
                      </Typography>{" "} */}
                    </div>{" "}
                    <IconButton
                      size="sm"
                      variant="plain"
                      color="neutral"
                      sx={{
                        ml: "auto",
                        alignSelf: "flex-start",
                      }}
                    >
                      <FavoriteBorderRoundedIcon color="danger" />{" "}
                    </IconButton>{" "}
                  </Box>{" "}
                  <AspectRatio
                    variant="soft"
                    sx={{
                      "--AspectRatio-paddingBottom":
                        "clamp(0px, (100% - 200px) * 999, 200px)",
                      pointerEvents: "none",
                    }}
                  >
                    <img alt="" src={game.background_image} />{" "}
                  </AspectRatio>{" "}
                  <Box
                    sx={{
                      display: "flex",
                      gap: 1.5,
                      mt: "auto",
                    }}
                  >
                    <Avatar
                      size="sm"
                      src="/static/logo.png"
                      sx={{
                        p: 0.5,
                        border: "2px solid",
                        borderColor: "background.body",
                      }}
                    />{" "}
                    <div>
                      {/* <Typography level="body2"> Designed by </Typography>{" "} */}
                      <Typography fontWeight="lg" level="body2">
                        sign in for more options{" "}
                      </Typography>{" "}
                    </div>{" "}
                  </Box>{" "}
                </Box>{" "}
              </Card>{" "}
            </Box>

            // })}{" "} //! previous project card creation had this code at end. not sure why
          );
        })}{" "}
    </div>
  );
}

export default MultipleInteractionCard;

// components are made to house reusable template

// data passes to components in form of props

// props allow us to extract different parts of object art different times?
