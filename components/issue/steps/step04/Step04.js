/* Siblings Select */
import { useState } from "react";
import { useUpdateIssue, useIssue } from "context/Issue";
import { useNextStep, useLastStep } from "context/Steps";
import { Grid, FormLabel } from "@mui/material";
import NextStepButton from "../../steps_buttons/NextStepButton";
import {
  BrothersSelect,
  SistersSelect,
  FatherSideBrothersSelect,
  FatherSideSistersSelect,
  MotherSideSiblingsSelect,
} from "./index";
import {
  maleAndFemale,
  maleLeagueOnly,
  oneFemaleOnly,
  twoAndMoreFemale,
  femaleWithOneGreaterFemale,
} from "./HelperFunctions";

function Step04() {
  // Using the custom Hook to update the Issue general state
  const updateIssue = useUpdateIssue();
  const issueData = useIssue();
  // Use next step context
  const goNextStep = useNextStep();

  // Use Last step context
  const goLastStep = useLastStep();

  // State
  const [brothers, setBrothers] = useState(0);
  const [sisters, setSisters] = useState(0);
  const [fatherSideBrothers, setFatherSideBrothers] = useState(0);
  const [fatherSideSisters, setFatherSideSisters] = useState(0);
  const [motherSideSiblings, setMotherSideSiblings] = useState(0);

  // State Change from children
  const brothersChange = (val) => {
    setBrothers(val);
  };
  const sistersChange = (val) => {
    setSisters(val);
  };
  const fatherSideBrothersChange = (val) => {
    setFatherSideBrothers(val);
  };
  const fatherSideSistersChange = (val) => {
    setFatherSideSisters(val);
  };
  const motherSideSiblingsChange = (val) => {
    setMotherSideSiblings(val);
  };

  // Handle Next Step Button
  const nextStep = () => {
    if (!issueData.hasGrandfather) {
      // There is no Grandfather
      if (brothers > 0 && sisters > 0) {
        // Has Brothers with Sisters
        maleAndFemale(
          "الإخوة الأشقاء",
          brothers,
          "الأخوات الشقيقات",
          sisters,
          updateIssue
        );
      }

      if (brothers > 0 && sisters == 0) {
        // Has Only Brothers
        maleLeagueOnly("الإخوة الأشقاء", brothers, updateIssue);
      }

      if (sisters > 0 && brothers == 0 && !issueData.hasChild) {
        // Has only Sisters without Brothers
        if (sisters == 1) {
          // Only One Sister
          oneFemaleOnly("الأخوات الشقيقات", issueData, updateIssue);
        }

        if (sisters >= 2) {
          // Two or More Sisters
          twoAndMoreFemale("الأخوات الشقيقات", sisters, issueData, updateIssue);
        }
      }

      if (fatherSideBrothers > 0 && fatherSideSisters > 0) {
        // Has fatherSideBrothers with fatherSideSisters
        maleAndFemale(
          "الإخوة لأب",
          fatherSideBrothers,
          "الأخوات لأب",
          fatherSideSisters,
          updateIssue
        );
      }

      if (fatherSideBrothers > 0 && fatherSideSisters == 0) {
        // Has Only fatherSideBrothers
        maleLeagueOnly("الإخوة لأب", fatherSideBrothers, updateIssue);
      }

      if (
        fatherSideSisters > 0 &&
        fatherSideBrothers == 0 &&
        !issueData.hasChild
      ) {
        // Has only fatherSideSisters without fatherSideBrothers
        if (fatherSideSisters == 1) {
          // Only One fatherSideSisters
          oneFemaleOnly("الأخوات لأب", issueData, updateIssue);
        }

        if (fatherSideSisters >= 2) {
          // Two or More fatherSideSisters
          twoAndMoreFemale(
            "الأخوات لأب",
            fatherSideSisters,
            issueData,
            updateIssue
          );
        }
      }
    }
  };

  return (
    <>
      <FormLabel sx={{ py: "1.5rem" }}>الفروع</FormLabel>
      <Grid container rowSpacing={3} columnSpacing={3}>
        <Grid md={3} sm={4} xs={10} item>
          <BrothersSelect
            brothers={brothers}
            brothersChange={brothersChange}
            fatherSideBrothers={fatherSideBrothers}
            fatherSideSisters={fatherSideSisters}
          />
        </Grid>
        <Grid md={3} sm={4} xs={10} item>
          <SistersSelect sisters={sisters} sistersChange={sistersChange} />
        </Grid>
      </Grid>
      <Grid container rowSpacing={3} columnSpacing={3}>
        <Grid md={3} sm={4} xs={10} item>
          <FatherSideBrothersSelect
            fatherSideBrothers={fatherSideBrothers}
            fatherSideBrothersChange={fatherSideBrothersChange}
            brothers={brothers}
            sisters={sisters}
            hasChild={issueData.hasChild}
          />
        </Grid>
        <Grid md={3} sm={4} xs={10} item>
          <FatherSideSistersSelect
            fatherSideSisters={fatherSideSisters}
            fatherSideSistersChange={fatherSideSistersChange}
            brothers={brothers}
            sisters={sisters}
            fatherSideBrothers={fatherSideBrothers}
            hasChild={issueData.hasChild}
          />
        </Grid>
      </Grid>
      <Grid container rowSpacing={3} columnSpacing={3}>
        <Grid md={3} sm={4} xs={10} item>
          <MotherSideSiblingsSelect
            motherSideSiblings={motherSideSiblings}
            motherSideSiblingsChange={motherSideSiblingsChange}
            hasChild={issueData.hasChild}
            hasGrandfather={issueData.hasGrandfather}
          />
        </Grid>
      </Grid>
      <NextStepButton nextStep={nextStep} />
    </>
  );
}

export default Step04;
