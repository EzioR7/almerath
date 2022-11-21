/* Children Select */
import { useState } from "react";
import { useUpdateIssue, useIssue } from "context/Issue";
import { useNextStep } from "context/Steps";
import { Grid, FormLabel } from "@mui/material";
import {
  SonsSelect,
  DaughtersSelect,
  GrandsonsSelect,
  GranddaughtersSelect,
  GrandGrandsonsSelect,
  GrandGranddaughtersSelect,
} from "./index";
import {
  maleAndFemale,
  maleLeagueOnly,
  oneFemaleOnly,
  twoAndMoreFemale,
  femaleWithOneGreaterFemale,
} from "./HelperFunctions";
import NextStepButton from "../../NextStepButton";

function Step02() {
  // Using the custom Hook to update the Issue general state
  const updateIssue = useUpdateIssue();
  const issueData = useIssue();

  // Use next step context
  const goNextStep = useNextStep();

  // State
  const [sons, setSons] = useState(0);
  const [daughters, setDaughters] = useState(0);
  const [grandsons, setGrandsons] = useState(0);
  const [granddaughters, setGranddaughters] = useState(0);
  const [grandGrandsons, setGrandGrandsons] = useState(0);
  const [grandGranddaughters, setGrandGranddaughters] = useState(0);

  // State Change from children
  const sonsChange = (val) => {
    setSons(val);
  };

  const daughtersChange = (val) => {
    setDaughters(val);
  };

  const grandsonsChange = (val) => {
    setGrandsons(val);
  };

  const granddaughtersChange = (val) => {
    setGranddaughters(val);
  };

  const grandGrandsonsChange = (val) => {
    setGrandGrandsons(val);
  };

  const grandGranddaughtersChange = (val) => {
    setGrandGranddaughters(val);
  };

  // Handle Next Step Button
  const nextStep = () => {
    if (sons > 0 && daughters > 0) {
      // Has Sons with Daughters
      maleAndFemale("الأبناء", sons, "البنات", daughters, updateIssue);
    }

    if (sons > 0 && daughters == 0) {
      // Has Only Sons
      maleLeagueOnly("الأبناء", sons, updateIssue);
    }

    if (daughters > 0 && sons == 0) {
      // Has only Daughters without Sons
      if (daughters == 1) {
        // Only One Daughters
        oneFemaleOnly("البنات", issueData, updateIssue);
      }

      if (daughters >= 2) {
        // Two or More Daughters
        twoAndMoreFemale("البنات", daughters, issueData, updateIssue);
      }
    }

    if (grandsons > 0 && granddaughters > 0) {
      // Has Grandsons with Granddaughters
      maleAndFemale(
        "أبناء الأبناء",
        grandsons,
        "بنات الأبناء",
        granddaughters,
        updateIssue
      );
    }

    if (grandsons > 0 && granddaughters == 0) {
      // Has Only Grandsons
      maleLeagueOnly("أبناء الأبناء", grandsons, updateIssue);
    }

    if (granddaughters > 0 && grandsons == 0) {
      // Has only GrandDaughters without Grandsons
      if (granddaughters == 1 && daughters == 0) {
        // Only One grandDaughters
        oneFemaleOnly("بنات الأبناء", issueData, updateIssue);
      }

      if (granddaughters >= 2 && daughters == 0) {
        // Two or More Granddaughters
        twoAndMoreFemale(
          "بنات الأبناء",
          granddaughters,
          issueData,
          updateIssue
        );
      }

      if (granddaughters > 0 && daughters == 1) {
        // Has Granddaughters with one Daughter
        femaleWithOneGreaterFemale(
          "بنات الأبناء",
          granddaughters,
          issueData,
          updateIssue
        );
      }
    }

    if (grandGrandsons > 0 && grandGranddaughters > 0) {
      // Has GrandGrandsons with GrandGranddaughters
      maleAndFemale(
        "أبناء أبناء الأبناء",
        grandGrandsons,
        "بنات أبناء الأبناء",
        grandGranddaughters,
        updateIssue
      );
      // Special Case Daughters Granddaughters with GrandGrandSons with GrandGranddaughters
      if (daughters >= 2 && granddaughters > 0) {
        const data = {
          leagueInherits: [
            {
              title: "أبناء أبناء الأبناء",
              count: parseInt(grandGrandsons),
              proof:
                'قال عزّ و جلّ: "‏‏‏‏‏ ‏‏ ‏ ‏‏‏‏‏‏‏ ‏‏‏‏ ‏‏‏ ‏‏ ‏‏‏‏‏‏" سورة النساء آية رقم 11',
            },
            {
              title: "بنات أبناء الأبناء",
              count: parseInt(grandGranddaughters),
              proof:
                'قال عزّ و جلّ: "‏‏‏‏‏ ‏‏ ‏ ‏‏‏‏‏‏‏ ‏‏‏‏ ‏‏‏ ‏‏ ‏‏‏‏‏‏" سورة النساء آية رقم 11',
            },
            {
              title: "بنات الأبناء",
              count: parseInt(granddaughters),
              proof:
                'قال عزّ و جلّ: "‏‏‏‏‏ ‏‏ ‏ ‏‏‏‏‏‏‏ ‏‏‏‏ ‏‏‏ ‏‏ ‏‏‏‏‏‏" سورة النساء آية رقم 11',
            },
          ],
          hasChild: true,
          hasSons: true,
        };

        updateIssue(data);
      }
    }

    if (grandGrandsons > 0 && grandGranddaughters == 0) {
      // Has Only GrandGrandsons
      maleLeagueOnly("أبناء أبناء الأبناء", grandGrandsons, updateIssue);
    }

    if (grandGranddaughters > 0 && grandGrandsons == 0) {
      // Has only GrandGrandDaughters without GrandGrandsons
      if (grandGranddaughters == 1 && daughters == 0 && granddaughters == 0) {
        // Only One grandGrandDaughters
        oneFemaleOnly("بنات أبناء الأبناء", updateIssue);
      }

      if (grandGranddaughters >= 2 && daughters == 0 && granddaughters == 0) {
        // Two or More GrandGranddaughters
        twoAndMoreFemale(
          "بنات أبناء الأبناء",
          grandGranddaughters,
          issueData,
          updateIssue
        );
      }

      if (granddaughters > 0 && daughters + granddaughters == 1) {
        // Has GrandGranddaughters with one Daughter or Granddaughter
        femaleWithOneGreaterFemale(
          "بنات أبناء الأبناء",
          grandGranddaughters,
          issueData,
          updateIssue
        );
      }
    }

    if (
      daughters >= 2 &&
      grandGrandsons > 0 &&
      granddaughters > 0 &&
      grandGranddaughters == 0
    ) {
      maleAndFemale(
        "أبناء أبناء الأبناء",
        grandGrandsons,
        "بنات الأبناء",
        granddaughters,
        updateIssue
      );
    }

    goNextStep();
  };

  return (
    <>
      <FormLabel sx={{ py: "1.5rem" }}>الفروع</FormLabel>
      <Grid container rowSpacing={3} columnSpacing={3}>
        <Grid md={3} sm={4} xs={10} item>
          <SonsSelect
            sons={sons}
            grandsons={grandsons}
            grandGrandsons={grandGrandsons}
            granddaughters={granddaughters}
            sonsChange={sonsChange}
          />
        </Grid>
        <Grid md={3} sm={4} xs={10} item>
          <DaughtersSelect
            daughters={daughters}
            daughtersChange={daughtersChange}
          />
        </Grid>
      </Grid>
      <Grid container mt={4} rowSpacing={3} columnSpacing={3}>
        <Grid md={3} sm={4} xs={10} item>
          <GrandsonsSelect
            grandsons={grandsons}
            sons={sons}
            grandGrandsons={grandGrandsons}
            grandsonsChange={grandsonsChange}
          />
        </Grid>
        <Grid md={3} sm={4} xs={10} item>
          <GranddaughtersSelect
            granddaughters={granddaughters}
            sons={sons}
            daughters={daughters}
            grandsons={grandsons}
            granddaughtersChange={granddaughtersChange}
            grandGrandsons={grandGrandsons}
          />
        </Grid>
      </Grid>
      <Grid container mt={4} rowSpacing={3} columnSpacing={3}>
        <Grid item md={3} sm={4} xs={10}>
          <GrandGrandsonsSelect
            grandGrandsons={grandGrandsons}
            sons={sons}
            grandsons={grandsons}
            grandGrandsonsChange={grandGrandsonsChange}
          />
        </Grid>
        <Grid item md={3} sm={4} xs={10}>
          <GrandGranddaughtersSelect
            grandGranddaughters={grandGranddaughters}
            daughters={daughters}
            grandGrandsons={grandGrandsons}
            sons={sons}
            granddaughters={granddaughters}
            grandsons={grandsons}
            grandGranddaughtersChange={grandGranddaughtersChange}
          />
        </Grid>
      </Grid>
      <NextStepButton nextStep={nextStep} />
    </>
  );
}

export default Step02;
