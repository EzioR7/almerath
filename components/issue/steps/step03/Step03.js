/* Parents Select */
import { useState } from "react";
import { useUpdateIssue, useIssue } from "context/Issue";
import { useNextStep, useLastStep } from "context/Steps";
import {
  fathersSixthCut,
  fathersWithNoChildren,
  fathersWithOnlyDaughters,
  mothersSixthCut,
} from "./HelperFunctions";
import { Grid, FormLabel } from "@mui/material";
import {
  FatherSelect,
  MotherSelect,
  GrandfatherSelect,
  GrandmotherFatherSideSelect,
  GrandmotherMotherSideSelect,
  HusbandSelect,
  WifesSelect,
} from "./index";
import NextStepButton from "../../steps_buttons/NextStepButton";

function Step03() {
  // Using the custom Hook to update the Issue general state
  const updateIssue = useUpdateIssue();
  const issueData = useIssue();

  // Use next step context
  const goNextStep = useNextStep();

  // Use Last step context
  const goLastStep = useLastStep();

  // State
  const [father, setFather] = useState(true);
  const [mother, setMother] = useState(true);
  const [grandfather, setGrandfather] = useState(false);
  const [grandmotherFatherSide, setGrandmotherFatherSide] = useState(false);
  const [grandmotherMotherSide, setGrandmotherMotherSide] = useState(false);
  const [husband, setHusband] = useState(false);
  const [wifes, setWifes] = useState(0);
  const [hasSiblings, setHasSiblings] = useState(false);

  // onChange Handlers
  const fatherChange = () => {
    setFather(!father);
  };
  const motherChange = () => {
    setMother(!mother);
  };
  const grandfatherChange = () => {
    setGrandfather(!grandfather);
  };
  const grandmotherFatherSideChange = () => {
    setGrandmotherFatherSide(!grandmotherFatherSide);
  };
  const grandmotherMotherSideChange = () => {
    setGrandmotherMotherSide(!grandmotherMotherSide);
  };
  const husbandChange = () => {
    setHusband(!husband);
  };
  const wifesChange = (e) => {
    setWifes(e.target.value);
  };
  const hasSiblingsChange = () => {
    setHasSiblings(!hasSiblings);
  };

  // Go Next Step
  const nextStep = () => {
    if (father) {
      // Father is Alive
      if (issueData.hasChild) {
        // There are Children
        fathersSixthCut("الأب", issueData, updateIssue);

        // Check if Children are only Daughters Without Sons
        if (!issueData.hasSons) {
          fathersWithOnlyDaughters("الأب", updateIssue);
        }
      } else {
        // There are No Children
        fathersWithNoChildren("الأب", updateIssue);
      }
    }

    if (mother) {
      // If Mother is Alive
      if (issueData.hasChild) {
        // There are Children
        mothersSixthCut("الأم", issueData, updateIssue);
      } else {
        // There are no Children
        if (hasSiblings) {
          // There are Siblings
          let fard = issueData.fardInherits;
          fard.push({
            title: "الأم",
            count: 1,
            cut: "السدس",
            stocks: 4,
            earn: (issueData.amount * 4) / 24,
            proof:
              'قالَ عزَّ و جلَّ: "‏‏ ‏‏ ‏‏ ‏‏‏‏ ‏‏‏‏ ‏‏‏‏‏‏" سورة النساء آية رقم 11.',
          });
          const data = {
            fardInherits: fard,
          };

          updateIssue(data);
        }

        if (father && (husband || wifes > 0) && !hasSiblings) {
          // It's special Issue 'المسألة الغراوية'
          if (issueData.gender == "male") {
            let fard = issueData.fardInherits;
            fard.push({
              title: "الأم",
              count: 1,
              cut: "ثلث الباقي",
              stocks: 4,
              earn: (issueData.amount * 4) / 24,
              proof:
                'قالَ عزَّ و جلَّ: "‏‏‏ ‏‏ ‏‏‏ ‏‏ ‏‏ ‏‏‏‏‏‏‏‏ ‏‏‏‏‏ ‏‏‏‏ ‏‏‏‏‏" سورة النساء آية رقم 11.',
            });
            const data = {
              fardInherits: fard,
              note: "حالة خاصة المسألة الغراوية",
            };

            updateIssue(data);
          }

          if (issueData.gender == "female") {
            let fard = issueData.fardInherits;
            fard.push({
              title: "الأم",
              count: 1,
              cut: "ثلث الباقي",
              stocks: 6,
              earn: (issueData.amount * 6) / 24,
              proof:
                'قالَ عزَّ و جلَّ: "‏‏‏ ‏‏ ‏‏‏ ‏‏ ‏‏ ‏‏‏‏‏‏‏‏ ‏‏‏‏‏ ‏‏‏‏ ‏‏‏‏‏" سورة النساء آية رقم 11.',
            });
            const data = {
              fardInherits: fard,
            };

            updateIssue(data);
          }
        }

        if (!hasSiblings && !(father && (husband || wifes > 0))) {
          let fard = issueData.fardInherits;
          fard.push({
            title: "الأم",
            count: 1,
            cut: "الثلث",
            stocks: 8,
            earn: (issueData.amount * 8) / 24,
            proof:
              'قالَ عزَّ و جلَّ: " ‏‏‏ ‏‏ ‏‏‏ ‏‏ ‏‏ ‏‏‏‏‏‏‏‏ ‏‏‏‏‏ ‏‏‏‏ ‏‏‏‏‏" سورة النساء آية رقم 11.',
          });
          const data = {
            fardInherits: fard,
          };

          updateIssue(data);
        }
      }
    }

    if (issueData.gender == "male") {
      // Check For Wifes
      if (wifes > 0) {
        if (issueData.hasChild) {
          // There are Children
          let fard = issueData.fardInherits;
          fard.push({
            title: "الزوجات",
            count: parseInt(wifes),
            cut: "الثمن",
            stocks: 3,
            earn: (issueData.amount * 3) / 24,
            proof:
              'قالَ عزَّ و جلَّ: "‏‏‏ ‏‏ ‏‏‏ ‏‏ ‏‏‏‏ ‏‏‏‏‏ ‏‏‏ ‏‏‏‏‏‏ ‏" سورة النساء آية رقم 12.',
          });
          const data = {
            fardInherits: fard,
            hasPartner: true,
          };

          updateIssue(data);
        } else {
          // There are no Children
          let fard = issueData.fardInherits;
          fard.push({
            title: "الزوجات",
            count: parseInt(wifes),
            cut: "الربع",
            stocks: 6,
            earn: (issueData.amount * 6) / 24,
            proof:
              'قالَ عزَّ و جلَّ: "‏‏‏‏ ‏‏‏‏‏ ‏‏‏ ‏‏‏‏‏ ‏‏ ‏‏ ‏‏‏ ‏‏‏ ‏‏‏" سورة النساء آية رقم 12.',
          });
          const data = {
            fardInherits: fard,
            hasPartner: true,
          };

          updateIssue(data);
        }
      }
    }

    if (issueData.gender == "female") {
      // Check for Husband
      if (husband) {
        if (issueData.hasChild) {
          // There are Children
          let fard = issueData.fardInherits;
          fard.push({
            title: "الزوج",
            count: 1,
            cut: "الربع",
            stocks: 6,
            earn: (issueData.amount * 6) / 24,
            proof:
              'قالَ عزَّ و جلَّ: "‏‏‏ ‏‏ ‏‏‏ ‏‏ ‏‏‏‏ ‏‏‏‏‏ ‏‏‏ ‏‏‏‏‏ ‏‏ ‏‏‏ ‏‏‏‏ ‏‏‏‏ ‏‏‏ ‏‏ ‏‏‏" سورة النساء آية رقم 12.',
          });
          const data = {
            fardInherits: fard,
            hasPartner: true,
          };

          updateIssue(data);
        } else {
          // There are no Children
          let fard = issueData.fardInherits;
          fard.push({
            title: "الزوج",
            count: 1,
            cut: "النصف",
            stocks: 12,
            earn: (issueData.amount * 12) / 24,
            proof:
              'قالَ عزَّ و جلَّ: "‏‏‏ ‏‏‏ ‏‏ ‏‏‏ ‏‏‏‏‏‏‏ ‏‏ ‏‏ ‏‏‏ ‏‏‏ ‏‏‏" سورة النساء آية رقم 12.',
          });
          const data = {
            fardInherits: fard,
            hasPartner: true,
          };

          updateIssue(data);
        }
      }
    }

    if (grandfather) {
      // If Grandfather is Alive
      if (issueData.hasChild) {
        // There are Children
        fathersSixthCut("الجد", issueData, updateIssue);

        // Check if Children are only Daughters Without Sons
        if (!issueData.hasSons) {
          fathersWithOnlyDaughters("الجد", updateIssue);
        }
      } else {
        // There are No Children
        fathersWithNoChildren("الجد", updateIssue);
      }
    }

    if (grandmotherFatherSide && grandmotherMotherSide) {
      // There are both Grandmas
      let fard = issueData.fardInherits;
      fard.push({
        title: "الجدّات",
        count: 2,
        cut: "السدس",
        stocks: 4,
        earn: (issueData.amount * 4) / 24,
        proof:
          'قالَ عزَّ و جلَّ: "‏‏‏‏‏ ‏‏ ‏‏‏ ‏‏‏‏‏ ‏‏‏‏‏ ‏‏‏ ‏‏‏ ‏‏ ‏‏ ‏‏ ‏‏‏" سورة النساء آية رقم 11.',
      });
      const data = {
        fardInherits: fard,
      };

      updateIssue(data);
    }

    if (grandmotherFatherSide && !grandmotherMotherSide) {
      // There is only GrandmotherFatherSide
      mothersSixthCut("الجدّة من ناحية الأب", issueData, updateIssue);
    }

    if (!grandmotherFatherSide && grandmotherMotherSide) {
      // There is only GrandmotherFatherSide
      mothersSixthCut("الجدّة من ناحية الأم", issueData, updateIssue);
    }

    if (issueData.leagueInherits.length > 0) {
      // There are League So The Issue Ready to Solve
      if (grandfather && issueData.creed == "الشافعي") {
        updateIssue({ hasGrandfather: true });
        goNextStep();
      }
      goLastStep();
    } else {
      goNextStep();
    }
  };

  return (
    <>
      <FormLabel sx={{ py: "1.5rem" }}>الآباء</FormLabel>
      <Grid container rowSpacing={3} columnSpacing={3}>
        <Grid md={3} sm={4} xs={10} item>
          <FatherSelect
            father={father}
            grandfather={grandfather}
            fatherChange={fatherChange}
          />
        </Grid>
        <Grid md={3} sm={4} xs={10} columnSpacing={3} item>
          <MotherSelect
            mother={mother}
            grandmotherFatherSide={grandmotherFatherSide}
            grandmotherMotherSide={grandmotherMotherSide}
            motherChange={motherChange}
            hasSiblings={hasSiblings}
            hasSiblingsChange={hasSiblingsChange}
          />
        </Grid>
      </Grid>
      <Grid container rowSpacing={3} columnSpacing={3}>
        <Grid md={3} sm={4} xs={10} item>
          <GrandfatherSelect
            grandfather={grandfather}
            father={father}
            grandfatherChange={grandfatherChange}
          />
        </Grid>
        <Grid md={3} sm={4} xs={10} item>
          <GrandmotherFatherSideSelect
            grandmotherFatherSide={grandmotherFatherSide}
            mother={mother}
            father={father}
            grandmotherFatherSideChange={grandmotherFatherSideChange}
          />
        </Grid>
        <Grid md={3} sm={4} xs={10} item>
          <GrandmotherMotherSideSelect
            grandmotherMotherSide={grandmotherMotherSide}
            grandmotherMotherSideChange={grandmotherMotherSideChange}
            mother={mother}
          />
        </Grid>
      </Grid>
      <Grid container rowSpacing={3} columnSpacing={3}>
        <Grid md={3} sm={4} xs={10} item>
          {issueData.gender == "female" ? (
            <HusbandSelect husband={husband} husbandChange={husbandChange} />
          ) : (
            <WifesSelect wifes={wifes} wifesChange={wifesChange} />
          )}
        </Grid>
      </Grid>
      <NextStepButton nextStep={nextStep} />
    </>
  );
}

export default Step03;
