"use client";

import FilterButton from "@/components/common/FilterButton";
import { useFilter } from "@/hooks/use-filter";
import { FilterItem, FilterType } from "@/types/filter";
import { JobPost as JobPostType } from "@/types/job";
import { Styles } from "@/types/styles";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { Fragment, useMemo } from "react";

type JobPostProps = {
  post: JobPostType;
};

const styles: Styles = {
  root: {
    backgroundColor: "#FFFFFF",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    padding: {
      mobile: "32px 24px 24px",
      desktop: "24px",
    },
    position: "relative",
    marginTop: {
      mobile: "25px",
      desktop: 0,
    },
    "&:hover": {
      "&::before": {
        content: '""',
        backgroundColor: "primary.main",
        position: "absolute",
        top: 0,
        left: 0,
        width: "5px",
        height: "100%",
        borderTopLeftRadius: "10px",
        borderBottomLeftRadius: "10px",
      },
    },
  },
  avatar: {
    width: {
      mobile: "50px",
      desktop: "80px",
    },
    height: {
      mobile: "50px",
      desktop: "80px",
    },
    position: {
      mobile: "absolute",
      desktop: "relative",
    },
    top: {
      mobile: "-25px",
      desktop: 0,
    },
  },
  chip: {
    fontSize: "12px",
    fontWeight: "bold",
  },
  position: {
    "&:hover": {
      color: "primary.main",
    },
  },
  subDescription: {
    color: "text.secondary",
    span: {
      typography: "caption",
    },
  },
  divider: {
    display: {
      mobile: "block",
      desktop: "none",
    },
  },
};

const JobCard = ({ post }: JobPostProps) => {
  const { onAddFilter } = useFilter();

  const subDescription = useMemo(() => {
    return [post.postedAt, post.contract, post.location];
  }, [post]);

  const filterBtns = useMemo(() => {
    const filterArr: FilterItem[] = [];

    if (post.level) {
      filterArr.push({
        type: FilterType.Level,
        text: post.level,
      });
    }
    if (post.role) {
      filterArr.push({
        type: FilterType.Role,
        text: post.role,
      });
    }
    if (post.languages?.length > 0) {
      post.languages.map((language) => {
        filterArr.push({
          type: FilterType.Language,
          text: language,
        });
      });
    }
    if (post.tools?.length > 0) {
      post.tools.map((tool) => {
        filterArr.push({
          type: FilterType.Tool,
          text: tool,
        });
      });
    }

    return filterArr;
  }, [post]);

  return (
    <Stack
      sx={styles.root}
      direction={{
        mobile: "column",
        desktop: "row",
      }}
      alignItems={{
        mobile: "flex-start",
        desktop: "center",
      }}
      justifyContent={"space-between"}
      gap={"16px"}
    >
      <Stack direction={"row"} alignItems={"center"} gap={"16px"}>
        <Avatar sx={styles.avatar} src={`/assets/${post.logo}`} />
        <Stack gap={"8px"}>
          <Stack direction={"row"} alignItems={"center"} gap={"12px"}>
            <Typography
              variant={"body2"}
              fontWeight={"bold"}
              color={"primary.main"}
            >
              {post.company}
            </Typography>
            {post.new && (
              <Chip
                sx={[styles.chip]}
                color={"primary"}
                size={"small"}
                label={"NEW!"}
              />
            )}
            {post.featured && (
              <Chip
                color={"info"}
                sx={[styles.chip]}
                size={"small"}
                label={"FEATURED"}
              />
            )}
          </Stack>
          <Typography
            sx={styles.position}
            component={Link}
            href={"#"}
            variant={"body1"}
            fontWeight={"bold"}
          >
            {post.position}
          </Typography>
          <Stack
            sx={styles.subDescription}
            direction={"row"}
            alignItems={"center"}
            gap={"8px"}
          >
            {subDescription.map((data, i) => (
              <Fragment key={i}>
                <Typography component={"span"}>{data}</Typography>
                {i < subDescription.length - 1 && (
                  <Typography component={"span"}>&#x2022;</Typography>
                )}
              </Fragment>
            ))}
          </Stack>
        </Stack>
      </Stack>
      <Divider sx={styles.divider} />
      <Stack
        direction={"row"}
        alignItems={"center"}
        gap={"8px"}
        flexWrap={"wrap"}
      >
        {filterBtns.map((filterItem) => (
          <FilterButton
            key={`${filterItem.type}-${filterItem.text}`}
            onClick={() => onAddFilter(filterItem)}
          >
            {filterItem.text}
          </FilterButton>
        ))}
      </Stack>
    </Stack>
  );
};

export default JobCard;
